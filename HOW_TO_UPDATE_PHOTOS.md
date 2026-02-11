# How to Update Service Photos

## Quick Steps:

### 1. Add Your Photos

Place your 4 service photos in the `public/images/` folder with these exact names:

- `photography.jpg` - For Aerial Photography service
- `mapping.jpg` - For Mapping service  
- `inspection.jpg` - For Inspection service
- `monitoring.jpg` - For Monitoring service
- `3d_modelling_service.png` - For 3D Modelling & Rendering service

### 2. Add Featured Project Photos

Place your project photos in the `public/projects/` folder:
- `project1.jpg` - First project (e.g., Real Estate)
- `project2.jpg` - Second project (e.g., Infrastructure)
- `project3.jpg` - Third project (e.g., Agriculture)
- `project4.jpg` - Fourth project (e.g., Security)

**Recommended specs for all photos:**
- Format: JPG or PNG
- Size: 1200x800px or larger
- File size: Under 500KB each for fast loading

### 3. That's It!

The page will automatically hot-reload and show your new images! The component is already configured to:
- Display images as backgrounds
- Add a dark gradient overlay for text readability
- Show hover effects
- Maintain responsive sizing

---

## Alternative: Generate Placeholder Images

If you don't have photos yet, I can generate professional-looking placeholder images for you. Just let me know!

---

## File Locations:

```
HAFIZ DRONE/
└── public/
    └── images/
        ├── photography.jpg  ← Add your photo here
        ├── mapping.jpg      ← Add your photo here
        ├── inspection.jpg   ← Add your photo here
        ├── monitoring.jpg      ← Add your photo here
        └── 3d_modelling_service.png  ← Add your photo here
    └── projects/
        ├── project1.jpg        ← Add your photo here
        ├── project2.jpg        ← Add your photo here
        ├── project3.jpg        ← Add your photo here
        └── project4.jpg        ← Add your photo here
```

---

## To Change Service Details:

Edit `components/BentoGrid.tsx` and update the `services` array (lines 6-31):

```tsx
const services = [
  {
    title: "Your Service Name",
    description: "Your service description",
    image: "/images/your-image.jpg",
    span: "col-span-2 row-span-2", // Controls card size
  },
  // ... more services
];
```

## To Change Project Details:

Edit `components/ProjectsSection.tsx` and update the `projects` array (lines 6-30):

```tsx
const projects = [
  {
    title: "Project Name",
    location: "Location",
    image: "/projects/project-image.jpg",
    category: "Category",
  },
  // ... more projects
];
```

**Card size options:**
- `col-span-2 row-span-2` - Large (2x2 grid)
- `col-span-1 row-span-1` - Small (1x1 grid)
- `col-span-2 row-span-1` - Wide (2x1 grid)
