import { useContext } from 'react'
import { PropertyContextValue } from './PropertyContextValue'

export function useProperties() {
  const context = useContext(PropertyContextValue)
  if (!context) {
    throw new Error('useProperties must be used within a PropertyProvider')
  }
  return context
}
