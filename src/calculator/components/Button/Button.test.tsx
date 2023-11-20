import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import Button from './Button'

describe('Button', () => {
    it('renders with children', () => {
        const { getByRole } = render(<Button>Test Button</Button>)
        expect(getByRole('button')).toHaveTextContent('Test Button')
    })
    
    it('handles click events', () => {
        const handleClick = jest.fn()
        const { getByRole } = render(<Button onClick={handleClick}>Test Button</Button>)
        fireEvent.click(getByRole('button'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('applies styles for isLarge prop', () => {
        const { getByRole } = render(<Button isLarge>Test Button</Button>)
        const button = getByRole('button')
        expect(button).toHaveStyle('grid-column-end: span 2')
    })

    it('applies styles for red color', () => {
        const { getByRole } = render(<Button color="red">Test Button</Button>)
        const button = getByRole('button')
        expect(button).toHaveStyleRule('background-color', '#c04444')
        expect(button).toHaveStyleRule('color', '#ffffff')
        expect(button).toHaveStyleRule('background-color', '#af3b3b', {
            modifier: ':hover'
        })
        expect(button).toHaveStyleRule('background-color', '#af3b3b', {
            modifier: ':focus'
        })
    })

    it('applies styles for green color', () => {
        const { getByRole } = render(<Button color="green">Test Button</Button>)
        const button = getByRole('button')
        expect(button).toHaveStyleRule('background-color', '#018645')
        expect(button).toHaveStyleRule('color', '#ffffff')
        expect(button).toHaveStyleRule('background-color', '#016d38', {
            modifier: ':hover'
        })
        expect(button).toHaveStyleRule('background-color', '#016d38', {
            modifier: ':focus'
        })
    })

    it('applies styles for dark color', () => {
        const { getByRole } = render(<Button color="dark">Test Button</Button>)
        const button = getByRole('button')
        expect(button).toHaveStyleRule('background-color', '#272727')
        expect(button).toHaveStyleRule('color', '#c5830d')
        expect(button).toHaveStyleRule('background-color', '#1a1a1a', {
            modifier: ':hover'
        })
        expect(button).toHaveStyleRule('background-color', '#1a1a1a', {
            modifier: ':focus'
        })
    })

    it('applies styles for default color', () => {
        const { getByRole } = render(<Button>Test Button</Button>)
        const button = getByRole('button')
        expect(button).toHaveStyleRule('background-color', '#2e2e2e')
        expect(button).toHaveStyleRule('color', '#ffffff')
        expect(button).toHaveStyleRule('background-color', '#212121', {
            modifier: ':hover'
        })
        expect(button).toHaveStyleRule('background-color', '#212121', {
            modifier: ':focus'
        })
    })

})
