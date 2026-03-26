"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene | null
    camera: THREE.OrthographicCamera | null
    renderer: THREE.WebGLRenderer | null
    mesh: THREE.Mesh | null
    uniforms: any
    animationId: number | null
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  })

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const { current: refs } = sceneRef

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision mediump float;
      uniform vec2 resolution;
      uniform float time;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        
        vec3 colorOrange = vec3(1.0, 0.5, 0.0);
        vec3 colorGreen  = vec3(0.0, 1.0, 0.3);
        vec3 colorPurple = vec3(0.6, 0.2, 1.0);

        float w1 = 0.015 / abs(p.y + sin((p.x + time * 0.5) * 1.5) * 0.4);
        float w2 = 0.015 / abs(p.y + sin((p.x - time * 0.3) * 2.0 + 1.0) * 0.3);
        float w3 = 0.015 / abs(p.y + sin((p.x + time * 0.2) * 1.0 + 2.0) * 0.5);

        vec3 finalColor = colorOrange * w1 + colorGreen * w2 + colorPurple * w3;
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `

    const initScene = () => {
      refs.scene = new THREE.Scene()
      refs.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: "low-power" })
      // Cap pixel ratio to 1 for background shader — massive FPS boost
      refs.renderer.setPixelRatio(1)
      refs.renderer.setClearColor(new THREE.Color(0x000000))

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

      refs.uniforms = {
        resolution: { value: [window.innerWidth, window.innerHeight] },
        time: { value: 0.0 },
      }

      const position = [
        -1.0, -1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0,  1.0, 0.0,
      ]

      const positions = new THREE.BufferAttribute(new Float32Array(position), 3)
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", positions)

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
      })

      refs.mesh = new THREE.Mesh(geometry, material)
      refs.scene.add(refs.mesh)

      handleResize()
    }

    // Throttle to ~30fps instead of 60fps — the background doesn't need 60fps
    let lastTime = 0
    const targetInterval = 1000 / 30

    const animate = (now: number) => {
      refs.animationId = requestAnimationFrame(animate)
      const delta = now - lastTime
      if (delta < targetInterval) return
      lastTime = now - (delta % targetInterval)

      if (refs.uniforms) refs.uniforms.time.value += 0.01
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera)
      }
    }

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return
      const width = window.innerWidth
      const height = window.innerHeight
      refs.renderer.setSize(width, height, false)
      refs.uniforms.resolution.value = [width, height]
    }

    initScene()
    refs.animationId = requestAnimationFrame(animate)
    window.addEventListener("resize", handleResize)

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId)
      window.removeEventListener("resize", handleResize)
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh)
        refs.mesh.geometry.dispose()
        if (refs.mesh.material instanceof THREE.Material) {
          refs.mesh.material.dispose()
        }
      }
      refs.renderer?.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full block z-0"
    />
  )
}
