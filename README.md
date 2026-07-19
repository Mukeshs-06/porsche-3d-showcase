# 🏎️ PORSCHE 918 SPYDER | Interactive 3D Luxury Showroom

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://porsche-3d-showcase.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

An award-winning Awwwards-inspired luxury automotive experience for the legendary **Porsche 918 Spyder hypercar**, crafted with **Next.js 15 (App Router)**, **React Three Fiber**, **Three.js**, **GSAP**, and **Tailwind CSS v4**.

🔗 **Live Application Demo**: [https://porsche-3d-showcase.vercel.app](https://porsche-3d-showcase.vercel.app)

---

## 🖼️ Showcase & Preview

| 3D Hypercar Hero | Interactive Configurator |
| :---: | :---: |
| ![Porsche 918 3D Hero](https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80) | ![Porsche Configurator](https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80) |

| Cockpit Ergonomics | Design Showcase Gallery |
| :---: | :---: |
| ![Porsche Cockpit](https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80) | ![Porsche Chassis](https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80) |

---

## ✨ Key Features

- **🏎️ Photorealistic 3D Showroom**: Custom GLTF car model with glossy `MeshReflectorMaterial` floor, studio environment HDR, headlight LED DRL projector beams, and ground contact shadows.
- **🎥 GSAP Camera View Presets**: Real-time camera perspective transitions (*3/4 View, Side Profile, Top Aero, Rear Wing*) with smooth GSAP camera interpolation and interactive mouse parallax.
- **🎨 Interactive Paint & Wheel Configurator**: Dynamic exterior swatches (*GT Silver, Guards Red, Jet Black, Liquid Gold, Racing Yellow, Miami Blue*), brake caliper finishes, Weissach magnesium wheel options, and live MSRP pricing engine.
- **⚡ Performance Gauge & Cockpit Showcase**: Digital speedometer dial (345 km/h top speed), powertrain breakdown tabs (V8 + Dual Electric Motors), carbon monocoque highlights, and specifications grid.
- **🔊 Web Audio Sound Synthesizer**: Zero-dependency Web Audio API synthesizer for button clicks and hover tick feedback with global Audio ON/OFF control.
- **🎯 Precision Custom Cursor**: Smooth spring outer follower ring with magnetic hover scaling on interactive targets.
- **📱 Fully Responsive & Accessibility Focused**: Optimized WCAG contrast ratios, glassmorphism UI overlay, ARIA labels, and mobile drawer menu.

---

## 🛠️ Tech Stack & Architecture

```
src/
├── app/
│   ├── globals.css         # Custom design system tokens & glassmorphism utilities
│   ├── layout.tsx          # Google Fonts (Cinzel & Outfit), SEO metadata & OpenGraph
│   ├── page.tsx            # Main scroll-storytelling application
│   ├── robots.ts           # Search engine indexing directives
│   └── sitemap.ts          # XML Sitemap generator
├── components/
│   ├── Button.tsx          # Luxury CTA button with hover shimmer & variants
│   ├── ColorPicker.tsx     # Color swatch selector component
│   ├── CustomCursor.tsx    # Precision custom cursor ring
│   ├── Footer.tsx          # Brand footer with legal disclaimer
│   ├── GallerySection.tsx  # Showcase media grid & full-screen lightbox
│   ├── Hero.tsx            # Asymmetric 2-column hero layout
│   ├── InteriorSection.tsx # Cockpit ergonomics & carbon monocoque showcase
│   ├── Navbar.tsx          # Floating glassmorphic navigation header
│   ├── PerformanceSection.tsx # Speedometer gauge & powertrain tabs
│   ├── SpecsSection.tsx    # Technical specifications matrix
│   ├── ConfiguratorSection.tsx # Build customizer & live pricing engine
│   ├── StatsCard.tsx       # Reusable hypercar metrics cards
│   └── WheelConfigurator.tsx  # Wheel rim option selector
├── three/
│   ├── CameraRig.tsx       # GSAP camera view preset controller & mouse parallax
│   ├── Car.tsx             # 3D GLTF car mesh with headlight beams & custom paint
│   ├── Environment.tsx     # Drei studio HDR lighting environment
│   ├── Floor.tsx           # MeshReflectorMaterial polished concrete floor
│   ├── Lights.tsx          # Studio spotlight & warm/cool rim lighting
│   ├── Loader.tsx          # Preloader screen with useProgress bar
│   ├── Particles.tsx       # Atmospheric gold sparkle particles
│   └── Scene.tsx           # Master R3F canvas wrapper
├── hooks/
│   ├── useHeroAnimation.ts # Encapsulated GSAP hero timeline logic
│   ├── useMousePosition.ts # Screen coordinates & normalized mouse vector
│   ├── useScrollAnimation.ts # IntersectionObserver scroll reveal hook
│   └── useSoundEffect.ts   # Web Audio API sound synthesizer
└── utils/
    ├── constants.ts        # Vehicle data, colors, specs, and gallery items
    └── helpers.ts          # Currency formatter, lerp, clamp, and color helpers
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mukeshs-06/porsche-3d-showcase.git
   cd porsche-3d-showcase
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## ☁️ Deployment

### Live Vercel Deployment
This application is deployed live on Vercel at: **[https://porsche-3d-showcase.vercel.app](https://porsche-3d-showcase.vercel.app)**.

Continuous Deployment is active—any updates pushed to the `main` branch automatically build and deploy on Vercel.

---

## ⚖️ Educational Portfolio & Trademark Disclaimer

> **IMPORTANT**: This project is a **non-commercial fan concept portfolio demonstration** created solely for educational, design, and software engineering showcase purposes.  
> It is **not affiliated with, endorsed by, sponsored by, or associated with Dr. Ing. h.c. F. Porsche AG** or any of its subsidiaries. All trademarks, vehicle names, designations, logos, and emblems belong to their respective copyright and trademark owners.

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.
