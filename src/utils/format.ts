// ! TEXT
export const clipString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str
  }
  
  return str.slice(0, maxLength) + '...'
}

// ! DATE
export const formatAssetDate = (date: string | Date | undefined): string => {
  if (!date) {
    return ''
  }
  
  const d = typeof date === 'string' ? new Date(date) : date
  
  return d.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}