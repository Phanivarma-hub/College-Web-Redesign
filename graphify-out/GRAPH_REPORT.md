# Graph Report - Admissions & Academics Page Integration

This report documents the architectural structure, dependencies, and design systems of the Admissions page, Academics section, typography redesign, and layout refinements.

## File Relationship Graph

```mermaid
graph TD
    Nav[components/ui/sterling-gate-kinetic-navigation.tsx] -->|links to| AcademicsPage[app/academics/page.tsx]
    Nav -->|links to| AdmissionsPage[app/admissions/page.tsx]
    AcademicsLayout[app/academics/layout.tsx] -->|wraps layout and metadata| AcademicsPage
    AcademicsLayout -->|imports styles| ScrollCSS[app/academics/academics-scroll.css]
    AdmissionsLayout[app/admissions/layout.tsx] -->|wraps layout and metadata| AdmissionsPage
    AcademicsPage -->|renders| AnimList[components/ui/AnimatedList.tsx]
    AnimList -->|imports| AnimListCSS[components/ui/AnimatedList.css]
    AcademicsPage -->|imports details & data| InfoData[info.md]
    AdmissionsPage -->|imports details & data| InfoData
    
    ProductCtx[PRODUCT.md] -->|defines voice & rules| DesignSys[DESIGN.md]
    DesignSys -->|defines font tokens & colors| GlobalCSS[app/globals.css]
    LayoutTSX[app/layout.tsx] -->|loads Newsreader & Plus Jakarta Sans| GlobalCSS
    LayoutTSX -->|imports and renders| AgentationProvider[components/agentation-provider.tsx]
    AgentationProvider -->|renders in development| Agentation[node_modules/agentation]
    GlobalCSS -->|applies typography to| AcademicsPage
    GlobalCSS -->|applies typography to| AdmissionsPage
    GlobalCSS -->|applies typography to| AboutPage[app/about/page.tsx]
    GlobalCSS -->|applies typography to| HomePage[app/page.tsx]
```

## Component and Route Descriptions

### 1. Route: `/academics`
*   **Layout** ([app/academics/layout.tsx](file:///c:/Users/phani/Desktop/College-Web-Redesign/app/academics/layout.tsx)): Contains page title and meta description metadata optimized for SEO. Imports `academics-scroll.css`.
*   **Syllabus Styles** ([app/academics/academics-scroll.css](file:///c:/Users/phani/Desktop/College-Web-Redesign/app/academics/academics-scroll.css)): Implements the responsive pinned mask reveal styling for desktop and mobile layouts.
*   **Page** ([app/academics/page.tsx](file:///c:/Users/phani/Desktop/College-Web-Redesign/app/academics/page.tsx)): Fully responsive layout featuring the five key academic sections:
    *   *Hero*: Intro banner featuring GSAP-powered line-reveal animations (`SplitType`), a background horizontal scroll parallax ticker, and dual criss-crossing infinite scrolling marquees (spanning full-screen width with solid black backdrops instead of glassmorphism) replacing the static description text.
    *   *Programs & Departments*: CME, ECE, EEE, and Basic Sciences sections integrated with a GSAP-pinned mask reveal parallax layout.
    *   *Syllabus & Calendar*: Cards styled with skeuomorphic depress effects, linking to syllabus downloads and calendar PDFs.
    *   *Examinations & Results*: Two-column overview of the Examination Cell and direct results portal redirection.
    *   *Academic Excellence*: Centered 25+ Years Legacy card launcher triggers the topper list explorer. The redundant featured topper card was removed.
    *   *Student Development*: Staggered tab animations showcasing clubs, workshops, guest lectures, and student achievements.

### 2. Component: `AnimatedList`
*   **Source** ([components/ui/AnimatedList.tsx](file:///c:/Users/phani/Desktop/College-Web-Redesign/components/ui/AnimatedList.tsx)): Translated React Bits scrolling selector with keyboard arrow-key navigation, in-view staggers, and selection callbacks. Fixed type error by changing `triggerOnce: false` to `once: false` inside the `useInView` hook.
*   **Styling** ([components/ui/AnimatedList.css](file:///c:/Users/phani/Desktop/College-Web-Redesign/components/ui/AnimatedList.css)): Dark-mode scrollbars, neon emerald list indicators, and selection animations.

### 3. Layout & Layout Polish Refinements
*   **About Page** ([app/about/page.tsx](file:///c:/Users/phani/Desktop/College-Web-Redesign/app/about/page.tsx)): Removed the "Institution Identity" and "Structural Integrity" badge pills to streamline layout.
*   **Home Page** ([app/page.tsx](file:///c:/Users/phani/Desktop/College-Web-Redesign/app/page.tsx)): Added an SBSP logo and branding header positioned at the top-left of the page viewport/hero section, balanced against the top-right header menu controls.
*   **Navigation & Branding Overlay** ([components/ui/sterling-gate-kinetic-navigation.tsx](file:///c:/Users/phani/Desktop/College-Web-Redesign/components/ui/sterling-gate-kinetic-navigation.tsx)): Refined menu opening animations. Fixed the brand section's visibility flash (FOUC) before starting the GSAP timeline by setting the initial hidden states of all animated items (`menu-brand-item`, `nav-link`, `menu-footer`) before opening the menu container's display. Wrapped the footer section and its top border (`border-t`) in an `overflow-hidden` container and animated it to slide up and reveal in sync with the menu links.
*   **Sticky Footer** ([components/ui/sticky-footer.tsx](file:///c:/Users/phani/Desktop/College-Web-Redesign/components/ui/sticky-footer.tsx)): Restructured campus links to balance page density. "Green Meadows Campus" spans 2 columns in a grid format, and Orchard Park & other campuses are consolidated, eliminating empty vertical columns on desktop viewports.
*   **Autoplay Testimonials** ([components/ui/circular-testimonials.tsx](file:///c:/Users/phani/Desktop/College-Web-Redesign/components/ui/circular-testimonials.tsx)): Configured an `IntersectionObserver` to pause auto-rotation until the testimonials section enters the viewport, ensuring that the Founder and Chairman slides are visible first upon scroll.
*   **Brand Nomenclature Cleanup**: Removed all legacy references to "Sri Vasavi" from global configs, system descriptors (`PRODUCT.md`, `DESIGN.md`), and main app layout headers (`app/layout.tsx`), replacing them strictly with "Smt. B. Seetha Polytechnic" (or "SBSP" in short form).

### 4. GSAP Percentage Preloader & Blinds Transition
*   **Global Effects** ([components/global-effects.tsx](file:///c:/Users/phani/Desktop/College-Web-Redesign/components/global-effects.tsx)): Replaced the deprecated Framer Motion preloader with a GSAP-driven loading timeline (0-100% percentage count and progress bar), vertical blinds reveal (5 panels on desktop, 3 on mobile), and a slide-up content entrance animation. Included session-storage persistence to prevent preloader execution on subsequent navigations. Initialized Lenis smooth scrolling globally under all routing conditions (including session bypasses) and synced its scroll ticks directly to GSAP's `ScrollTrigger.update()`.
*   **Global Styles** ([app/globals.css](file:///c:/Users/phani/Desktop/College-Web-Redesign/app/globals.css)): Appended standard Lenis utility styling selectors at the bottom of the style sheet for clean scroll behaviors.
*   **Loading Demo** ([app/loading-demo/page.tsx](file:///c:/Users/phani/Desktop/College-Web-Redesign/app/loading-demo/page.tsx)): Replaced with an interactive test-bed where the preloader session storage flag can be cleared and re-run.
*   **Housekeeping**: Deleted the deprecated `components/ui/kinetic-dots-loader.tsx` component.

### 5. Route: `/admissions`
*   **Layout** ([app/admissions/layout.tsx](file:///c:/Users/phani/Desktop/College-Web-Redesign/app/admissions/layout.tsx)): Configures route SEO title and description metadata.
*   **Page** ([app/admissions/page.tsx](file:///c:/Users/phani/Desktop/College-Web-Redesign/app/admissions/page.tsx)): Premium admissions route designed in alignment with SVES typography and color rules. Features:
    *   *Hero & trust badges*: Direct logos and AICTE validation callouts.
    *   *Scroll-Triggered Text Highlights*: Custom GSAP ScrollTrigger setup that fills background highlight colors on key phrases on scroll. Adjusted highlights to trigger a slower (2.2s) reveal speed with a premium yellow/amber theme.
    *   *Admission Overview*: Typographic sidebar layout outlining criteria, basis, and instruction language.
    *   *Academic Programs & Transition*: Brochure-style directory list for CME, ECE, EEE, coupled with a Year 1 -> Year 3 transition block connected by GSAP-animated dashed SVG arrows (`FlowArrow`).
    *   *GSAP Vertical Timeline*: Scroll-scrubbing progress line which fills as the user scrolls, highlighting active steps while retaining highlighted completed steps, with disabled animation fallback for `prefers-reduced-motion`.
    *   *Fees & Expandable Scholarships*: Consolidated fee receipt block, Government reimbursement callout, and clickable expanding scholarship lists (Pragati, Saksham, Swanath, Yashasvi, AP state schemes) with inline grid-start formatting.
    *   *Important Info Accordions*: Smooth height shifts for reservation, Aadhaar, and portal registrations.
    *   *Admissions Help Desk*: Clean contact information panel and direct action anchors.
    *   *Structural Bug Fix*: Corrected unbalanced `div` tags in the main content container wrapper to ensure successful Next.js build compilation.


