# Hafiz's Drone - Scrollytelling Landing Page

A high-end, Awwwards-level scrollytelling landing page for an industrial drone service business.

## Features

- 🎬 **Scroll-linked Animation**: Canvas-based image sequence (240 frames) that plays as you scroll
- 🎨 **Premium Design**: Deep slate background with gradient accents and smooth animations
- 📱 **Fully Responsive**: Optimized for all devices with mobile-first approach
- ✨ **Smooth Scrolling**: Lenis integration for buttery-smooth scroll experience
- 🎯 **Interactive Elements**: Magnetic buttons, text reveals, count-up stats, and more
- 🎭 **Fullscreen Menu**: Awwwards-style navigation with reveal effects

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animation**: Motion (Framer Motion)
- **Smooth Scroll**: Lenis
- **Typography**: Outfit (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Image sequence files in `public/sequence/` directory
  - Files are named: `ezgif-frame-001.jpg` to `ezgif-frame-180.jpg` ✅ (Already configured!)

### Installation

Already completed! Dependencies are installed and the dev server is running.

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Outfit font
│   ├── page.tsx            # Main page integrating all components
│   └── globals.css         # Global styles and animations
├── components/
│   ├── SequenceScroll.tsx  # Core scrollytelling component
│   ├── Navbar.tsx          # Navigation with fullscreen menu
│   ├── AboutSection.tsx    # Text reveal section
│   ├── BentoGrid.tsx       # Services showcase
│   ├── StatsSection.tsx    # Animated statistics
│   ├── TestimonialsSection.tsx  # Client testimonials slider
│   └── Footer.tsx          # Footer with animated background
├── hooks/
│   └── useLenis.ts         # Smooth scroll hook
└── public/
    └── sequence/           # Image sequence frames (240 images)
```

## Customization

### Image Sequence

- Place your image sequence in `public/sequence/`
- Update the `frameCount` and `framePrefix` props in `page.tsx` if using different naming

### Colors

- Background color is set to `#0f172a` (deep slate) in `globals.css`
- Update `--background` and `--foreground` CSS variables to match your brand

### Content

- Edit component files to update text, services, testimonials, and contact info
- All content is easily customizable in the respective component files

## Performance Tips

- Image sequence should be optimized (recommended: 1920x1080, JPEG quality 80-85%)
- Total sequence size should be under 50MB for optimal loading
- Consider using WebP format for better compression

## License

Private project for Hafiz's Drone

## Credits

Built with ❤️ using Next.js, Motion, and Lenis
