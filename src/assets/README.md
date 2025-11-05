# Image Assets Configuration

## Overview
`images.ts` contains all gallery image definitions organized by category.

## Quick Reference

### Adding Metadata to an Image
Replace a simple image line:
```typescript
createImageAsset('community', 'IMG_0976.webp', 0)
```

With metadata:
```typescript
createImageAsset('community', 'IMG_0976.webp', 0, {
  title: 'Bridge Inspection Project',
  description: 'Structural steel weld inspection on downtown bridge',
  date: '2024-03-15'
})
```

All metadata fields are optional:
- `title` - Display title
- `description` - Longer text (also used for alt text)
- `date` - ISO date string (YYYY-MM-DD)
- `alt` - Custom alt text (defaults to description)

### Adding New Images
1. Add files to `/public/assets/<group>/{prev,full}/<filename>.webp`
2. Add line to appropriate array in `images.ts`:
```typescript
createImageAsset('testing', 'IMG_NEW.webp', 26), // increment index
```

### Image Groups
- **COMMUNITY_IMAGES** - Community infrastructure (8 images)
- **FAB_IMAGES** - Fabrication projects (7 images)
- **TESTING_IMAGES** - Testing and inspection (26 images)
- **TRAINING_IMAGES** - Training and education (7 images)

### Series Info
Update series metadata by editing the corresponding `*_SERIES` object:
```typescript
export const COMMUNITY_SERIES: PhotoSeries = {
  id: 'community-series',
  title: 'Community Projects',           // Update this
  description: 'Your description here',  // Update this
  coverImage: COMMUNITY_IMAGES[0],
  images: COMMUNITY_IMAGES,
  tags: ['community', 'infrastructure'],
}
```

## File Structure
```
public/assets/
├── community/prev/  →  Preview images
├── community/full/  →  Full resolution
├── fab/
├── testing/
└── training/
```

Preview images are displayed in gallery grid.
Full resolution shown when expanded.