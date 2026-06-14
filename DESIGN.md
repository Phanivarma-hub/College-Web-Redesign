---
name: Smt. B. Seetha Polytechnic (SBSP)
description: Practical, empowering, and trustworthy academic portal.
colors:
  primary: "#22c55e"
  accent-orange: "#ff9800"
  neutral-bg: "#0a0a0b"
  neutral-surface: "#151517"
  neutral-text: "#e3e3e6"
  neutral-muted: "#a1a1aa"
  border-soft: "#27272a"
typography:
  display:
    fontFamily: "var(--font-serif), 'Newsreader', 'Georgia', serif"
    fontSize: "clamp(2rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "var(--font-sans), 'Plus Jakarta Sans', 'Inter', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "12px"
  lg: "24px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
---

# Design System: Smt. B. Seetha Polytechnic (SBSP)

## 1. Overview

**Creative North Star: "The Trustworthy Academic Portal"**

This design system establishes a stable, clean, and professional layout structure for Smt. B. Seetha Polytechnic (SBSP). We reject startup-inspired gradients, government-style PDF-dump tables, and cyber-neon decoration. The focus is strictly on **readability and trust** through cohesive layout grid structures, premium typography, and authentic content representation.

### Key Characteristics:
- **Left-Aligned Reading Flow**: Paragraphs are strictly left-aligned; centering is limited to isolated main headings.
- **Controlled Measure**: Text containers are capped at 65-70ch to prevent line fatigue.
- **Soft Contrast**: Replaces harsh pure black (#000000) and pure white (#FFFFFF) with a softer, premium dark mode.
- **Double-Font Restraint**: Exactly two font families are used across the entire system.

---

## 2. Colors

A restrained palette focusing on organic academic growth and trust, backed by stable, neutral backgrounds.

### Primary
- **Growth Emerald** (#22c55e / oklch(0.72 0.22 143)): Used as the key highlight for interactive indicators, active states, and focus underlines.

### Secondary
- **Academic Amber** (#ff9800): Used for secondary achievements, accolades, and honors.

### Neutral
- **Deep Slate Ground** (#0a0a0b): The primary background color. Soft enough to reduce glare.
- **Card Surface** (#151517): Used for container backgrounds, section separations, and input surfaces.
- **Paper Ink** (#e3e3e6): The primary text color. High legibility without the harshness of pure white.
- **Slate Muted** (#a1a1aa): Secondary metadata, captions, and placeholders.
- **Soft Border** (#27272a): Subtle borders for structured card elements.

---

## 3. Typography

**Display Font:** Newsreader (with Georgia, serif fallbacks). A soft, literary serif that conveys academic heritage, trust, and prestige.
**Body Font:** Plus Jakarta Sans (with Inter, system-sans fallbacks). A highly legible, grotesque-hybrid typeface that provides technical clarity.

**Character:** Editorial authority meets industrial clarity. Headings command respect; body copy ensures reading comfort over extended sessions.

### Hierarchy
- **Display** (Bold, clamp(2rem, 5vw, 4rem), 1.1): Used for main page headers (h1) and landing hero titles.
- **Headline** (Semibold, clamp(1.5rem, 3.5vw, 2.5rem), 1.2): Used for major section titles (h2).
- **Title** (Medium, 1.25rem, 1.3): Used for cards, subsections, and modal headers.
- **Body** (Regular, 1rem to 1.125rem (16px to 18px), 1.6): Used for all narrative paragraphs. Capped at 65ch measure.
- **Label** (Medium, 0.875rem, letter-spacing: 0.05em, uppercase): Used for small categories, buttons, and system statuses.

---

## 4. Elevation

The system is flat-by-default, relying on structural layout grids, borders, and clean borders rather than heavy shadows or glassmorphism.

### Shadow Vocabulary
- **Interactive Rise** (`box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4)`): Used for hovered card states only.
- **Flat Surface** (`box-shadow: none`): Default state for all cards and page sections.

---

## 5. Components

### Buttons
- **Shape:** Soft rounded corners (6px).
- **Primary:** Growth Emerald background, deep slate text. Medium weight.
- **Secondary:** Transparent background, soft border, paper ink text.

### Cards
- **Shape:** Rounded corners (12px), 1px soft border (#27272a), card surface background (#151517).
- **Padding:** 24px internal padding.

---

## 6. Do's and Don'ts

### Do's
- Keep all paragraphs left-aligned.
- Set body text to `1rem` (16px) or `1.125rem` (18px) for readability.
- Maintain a line length of 65–75 characters (`max-width: 65ch` on content paragraphs).
- Use `text-wrap: balance` for h1-h3 headings.

### Don'ts
- Do not use more than two font families.
- Do not use pure white text (#ffffff) on a pure black background (#000000).
- Do not add neon glows, heavy text shadows, or drop shadows to backgrounds.
- Do not center large paragraphs of narrative text.
