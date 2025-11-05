export type AspectRatio = '16:9' | '3:4' | '1:1' | '21:9' | 'auto'
export type ObjectFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'

export interface BaseAsset {
  id: string
  path: string // preview
  alt: string
  title?: string
  description?: string
  date?: string | Date
  tags?: string[]
  region?: string
  location?: string
}

export interface ImageAsset extends BaseAsset {
  type: 'image'
  width?: number
  height?: number
  aspectRatio?: AspectRatio
  full?: string
}

export interface PhotoSeries {
  id: string
  coverImage: ImageAsset
  images: ImageAsset[]
  title?: string
  description?: string
  tags?: string[]
  date?: string | Date
}
