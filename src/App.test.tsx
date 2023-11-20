import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
    it('renders Calculator component', () => {
        render(<App />)
        const calculatorElement = screen.getByTestId('app')
        expect(calculatorElement).toBeInTheDocument()
    })
})