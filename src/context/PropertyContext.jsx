import { PropertyContextValue } from './PropertyContextValue'
import { properties as propertyData } from '../data/properties'

export function PropertyProvider({ children }) {
  return (
    <PropertyContextValue.Provider value={{ properties: propertyData }}>
      {children}
    </PropertyContextValue.Provider>
  )
}
