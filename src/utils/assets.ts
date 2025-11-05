export const getAssetUrl = (path: string): string => {
  const baseUrl = import.meta.env.VITE_ASSET_BASE_URL || 'assets'
  
  return `${baseUrl}/${path}`
}