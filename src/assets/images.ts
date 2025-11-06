import type { ImageAsset, PhotoSeries } from '@/types/assets'

/**
 * Helper function to generate image asset from filename
 * 
 * @param group - Asset group name (community, fab, testing, training)
 * @param filename - Image filename (e.g., 'IMG_0976.webp')
 * @param index - Index in array (for generating default IDs)
 * @param overrides - Optional metadata (title, description, date, alt)
 * 
 * @example
 * // Simple usage (no metadata)
 * createImageAsset('community', 'IMG_0976.webp', 0)
 * 
 * @example
 * // With metadata
 * createImageAsset('community', 'IMG_0976.webp', 0, {
 *   title: 'Bridge Inspection',
 *   description: 'Structural steel weld inspection on downtown bridge project',
 *   date: '2024-03-15'
 * })
 */
function createImageAsset(
  group: string,
  filename: string,
  index?: number,
  overrides?: Partial<Pick<ImageAsset, 'title' | 'description' | 'date' | 'alt'>>
): ImageAsset {
  const id = `${group}-${filename.replace('.webp', '')}`
  
  return {
    id,
    type: 'image',
    path: `/${group}/prev/${filename}`,
    full: `/${group}/full/${filename}`,
    alt: overrides?.description || overrides?.alt || '',
    // aspectRatio: '16:9',
    ...overrides,
  }
}

// ============================================================================
// HERO IMAGE
// ============================================================================

export const HERO_IMAGE: ImageAsset = createImageAsset('testing', 'IMG_3604.webp')


// ============================================================================
// RECENT ASSETS
// ============================================================================

export const RECENT_IMAGES: ImageAsset[] = [
  createImageAsset('testing', 'IMG_9992.webp', 0),
  createImageAsset('testing', 'IMG_0388.webp', 1),
  createImageAsset('testing', 'IMG_9156.webp', 4),
  createImageAsset('testing', 'TC_00012.webp', 5),
  createImageAsset('fab', 'IMG_3615.webp', 2),
  createImageAsset('fab', 'IMG_2448.webp', 3),
]

// ============================================================================
// COMMUNITY ASSETS
// ============================================================================

export const COMMUNITY_IMAGES: ImageAsset[] = [
  createImageAsset('community', 'IMG_0976.webp', 0),
  createImageAsset('community', 'IMG_0977.webp', 1),
  createImageAsset('community', 'IMG_1392.webp', 2),
  createImageAsset('community', 'IMG_1399.webp', 3),
  createImageAsset('community', 'IMG_1526.webp', 4),
  createImageAsset('community', 'IMG_3198.webp', 5),
  createImageAsset('community', 'IMG_3586.webp', 6),
  createImageAsset('community', 'IMG_3854.webp', 7),
  
  // To add metadata to a specific image, replace the line above with:
  // createImageAsset('community', 'IMG_0976.webp', 0, {
  //   title: 'Your Title Here',
  //   description: 'Your description here',
  //   date: '2024-03-15'
  // }),
]

export const COMMUNITY_SERIES: PhotoSeries = {
  id: 'community-series',
  title: 'Community Projects',
  description: 'Welding inspection and testing projects for community infrastructure',
  coverImage: COMMUNITY_IMAGES[0],
  images: COMMUNITY_IMAGES,
  tags: ['community', 'infrastructure'],
}

// ============================================================================
// FAB ASSETS
// ============================================================================

export const FAB_IMAGES: ImageAsset[] = [
  createImageAsset('fab', 'IMG_0305.webp', 0),
  createImageAsset('fab', 'IMG_0907.webp', 1),
  createImageAsset('fab', 'IMG_2448.webp', 2),
  createImageAsset('fab', 'IMG_3462.webp', 3),
  createImageAsset('fab', 'IMG_3615.webp', 4),
  createImageAsset('fab', 'IMG_3622.webp', 5),
  createImageAsset('fab', 'IMG_6133.webp', 6),
]

export const FAB_SERIES: PhotoSeries = {
  id: 'fab-series',
  title: 'Fabrication Projects',
  description: 'Custom fabrication and welding inspection services',
  coverImage: FAB_IMAGES[0],
  images: FAB_IMAGES,
  tags: ['fabrication', 'custom'],
}

// ============================================================================
// TESTING ASSETS
// ============================================================================

export const TESTING_IMAGES: ImageAsset[] = [
  createImageAsset('testing', 'IMG_0213.webp', 0),
  createImageAsset('testing', 'IMG_0336.webp', 1),
  createImageAsset('testing', 'IMG_0388.webp', 2),
  createImageAsset('testing', 'IMG_0402.webp', 3),
  createImageAsset('testing', 'IMG_0698.webp', 4),
  createImageAsset('testing', 'IMG_0827.webp', 5),
  createImageAsset('testing', 'IMG_0999.webp', 6),
  createImageAsset('testing', 'IMG_1592.webp', 7),
  createImageAsset('testing', 'IMG_1709.webp', 8),
  createImageAsset('testing', 'IMG_1710.webp', 9),
  createImageAsset('testing', 'IMG_1964.webp', 10),
  createImageAsset('testing', 'IMG_1979.webp', 11),
  createImageAsset('testing', 'IMG_1982.webp', 12),
  createImageAsset('testing', 'IMG_2615.webp', 13),
  createImageAsset('testing', 'IMG_3012.webp', 14),
  createImageAsset('testing', 'IMG_3013.webp', 15),
  createImageAsset('testing', 'IMG_3376.webp', 16),
  createImageAsset('testing', 'IMG_3449.webp', 17),
  createImageAsset('testing', 'IMG_3604.webp', 18), // HERO
  createImageAsset('testing', 'IMG_3612.webp', 19),
  createImageAsset('testing', 'IMG_3626.webp', 20),
  createImageAsset('testing', 'IMG_3753.webp', 21),
  createImageAsset('testing', 'IMG_7999.webp', 22),
  createImageAsset('testing', 'IMG_9156.webp', 23),
  createImageAsset('testing', 'IMG_9992.webp', 24),
  createImageAsset('testing', 'TC_00012.webp', 25),
]

export const TESTING_SERIES: PhotoSeries = {
  id: 'testing-series',
  title: 'Testing & Inspection',
  description: 'Non-destructive testing and comprehensive weld inspection services',
  coverImage: TESTING_IMAGES[0],
  images: TESTING_IMAGES,
  tags: ['testing', 'inspection', 'ndt'],
}

// ============================================================================
// TRAINING ASSETS
// ============================================================================

export const TRAINING_IMAGES: ImageAsset[] = [
  createImageAsset('training', 'IMG_1638.webp', 0),
  createImageAsset('training', 'IMG_1646.webp', 1),
  createImageAsset('training', 'IMG_3030.webp', 2),
  createImageAsset('training', 'IMG_3623.webp', 3),
  createImageAsset('training', 'IMG_3666.webp', 4),
  createImageAsset('training', 'IMG_8954.webp', 5),
  createImageAsset('training', 'IMG_9637.webp', 6),
]

export const TRAINING_SERIES: PhotoSeries = {
  id: 'training-series',
  title: 'Training & Education',
  description: 'Welding certification training and educational programs',
  coverImage: TRAINING_IMAGES[0],
  images: TRAINING_IMAGES,
  tags: ['training', 'education', 'certification'],
}

// ============================================================================
// AGGREGATED EXPORTS
// ============================================================================

/**
 * All photo series for grouped view
 */
export const ALL_SERIES: PhotoSeries[] = [
  COMMUNITY_SERIES,
  FAB_SERIES,
  TESTING_SERIES,
  TRAINING_SERIES,
]

/**
 * All images flattened for individual view
 */
export const ALL_IMAGES: ImageAsset[] = [
  ...COMMUNITY_IMAGES,
  ...FAB_IMAGES,
  ...TESTING_IMAGES,
  ...TRAINING_IMAGES,
]