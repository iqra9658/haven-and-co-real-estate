// Runtime validation coverage for property detail routes and inquiry context.
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { PropertyProvider } from '../context/PropertyContext'
import PropertyDetails from './PropertyDetails'

function renderPropertyPath(path) {
  return renderToStaticMarkup(
    <MemoryRouter initialEntries={[path]}>
      <PropertyProvider>
        <Routes>
          <Route path="/properties/:id" element={<PropertyDetails />} />
        </Routes>
      </PropertyProvider>
    </MemoryRouter>,
  )
}

describe('property details', () => {
  it('renders the property information and inquiry link for one listing', () => {
    const markup = renderPropertyPath('/properties/willow-creek-estate')

    expect(markup).toContain('Willow Creek Estate')
    expect(markup).toContain('Beverly Hills, California')
    expect(markup).toContain('Private garden')
    expect(markup).toContain('/contact?property=Willow%20Creek%20Estate')
    expect(markup).toContain('Back to Properties')
  })

  it('renders the correct details for a different listing', () => {
    const markup = renderPropertyPath('/properties/the-parkview-residence')

    expect(markup).toContain('The Parkview Residence')
    expect(markup).toContain('West Village, New York')
    expect(markup).toContain('Park views')
  })

  it('shows a friendly not-found state for an unknown listing', () => {
    const markup = renderPropertyPath('/properties/not-a-real-listing')

    expect(markup).toContain('This page isn’t at this address.')
    expect(markup).toContain('href="/"')
  })
})
