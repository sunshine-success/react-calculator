import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Screen from './Display'

describe('Screen', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Screen value="0" hasMemory={false} expression="" />)
    expect(getByText('0')).toBeInTheDocument()
  })

  it('displays memory indicator when hasMemory is true', () => {
    const { getByText } = render(<Screen value="0" hasMemory={true} expression="" />)
    expect(getByText('M')).toBeInTheDocument()
  })

  it('does not display memory indicator when hasMemory is false', () => {
    const { queryByText } = render(<Screen value="0" hasMemory={false} expression="" />)
    expect(queryByText('M')).not.toBeInTheDocument()
  })

  it('displays the expression', () => {
    const expression = "1+2"
    const { getByText } = render(<Screen value="3" hasMemory={false} expression={expression} />)
    expect(getByText(expression)).toBeInTheDocument()
  })

  it('displays the value', () => {
    const value = "3"
    const { getByText } = render(<Screen value={value} hasMemory={false} expression="1+2" />)
    expect(getByText(value)).toBeInTheDocument()
  })

})
