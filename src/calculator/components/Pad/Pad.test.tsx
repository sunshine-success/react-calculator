import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pad from './Pad'

describe('Pad', () => {
    // Mock functions for each of the button click handlers
    const mockHandlers = {
        onDigitButtonClick: jest.fn(),
        onPointButtonClick: jest.fn(),
        onOperatorButtonClick: jest.fn(),
        onChangeSignButtonClick: jest.fn(),
        onEqualButtonClick: jest.fn(),
        onAllClearButtonClick: jest.fn(),
        onClearEntryButtonClick: jest.fn(),
        onMemoryRecallButtonClick: jest.fn(),
        onMemoryClearButtonClick: jest.fn(),
        onMemoryPlusButtonClick: jest.fn(),
        onMemoryMinusButtonClick: jest.fn(),
    }

    // Helper function to render the Pad with all the mock handlers
    const renderPad = () =>
        render(
            <Pad
                onDigitButtonClick={mockHandlers.onDigitButtonClick}
                onPointButtonClick={mockHandlers.onPointButtonClick}
                onOperatorButtonClick={mockHandlers.onOperatorButtonClick}
                onChangeSignButtonClick={mockHandlers.onChangeSignButtonClick}
                onEqualButtonClick={mockHandlers.onEqualButtonClick}
                onAllClearButtonClick={mockHandlers.onAllClearButtonClick}
                onClearEntryButtonClick={mockHandlers.onClearEntryButtonClick}
                onMemoryRecallButtonClick={mockHandlers.onMemoryRecallButtonClick}
                onMemoryClearButtonClick={mockHandlers.onMemoryClearButtonClick}
                onMemoryPlusButtonClick={mockHandlers.onMemoryPlusButtonClick}
                onMemoryMinusButtonClick={mockHandlers.onMemoryMinusButtonClick}
            />
        )

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders the Pad components', () => {
        renderPad();
        expect(screen.getByTestId('pad')).toBeInTheDocument()
        expect(screen.getByText('MC')).toBeInTheDocument()
        expect(screen.getByText('MR')).toBeInTheDocument()
        expect(screen.getByText('M+')).toBeInTheDocument()
        expect(screen.getByText('M-')).toBeInTheDocument()
        expect(screen.getByText('AC')).toBeInTheDocument()
        expect(screen.getByText('C')).toBeInTheDocument()
        expect(screen.getByText('-/+')).toBeInTheDocument()
        expect(screen.getByText('÷')).toBeInTheDocument()
        expect(screen.getByText('×')).toBeInTheDocument()
        expect(screen.getByText('-')).toBeInTheDocument()
        expect(screen.getByText('+')).toBeInTheDocument()
        expect(screen.getByText('=')).toBeInTheDocument()
        expect(screen.getByText('.')).toBeInTheDocument()
        for (let i = 0; i <= 9; i++) {
            expect(screen.getByText(i.toString())).toBeInTheDocument()
        }
    })

    // Test for button click
    it('calls onDigitButtonClick when a digit button is clicked', () => {
        const { getByText } = renderPad()
        for (let i = 0; i < 10; i++) {
            fireEvent.click(getByText(String(i)))
            expect(mockHandlers.onDigitButtonClick).toHaveBeenCalledWith(i)
        }
    })

    it('calls onOperatorButtonClick when an operator button is clicked', () => {
        const { getByText } = renderPad()
        const operators = ['+', '-', '×', '÷']
        operators.map(operator => {
            fireEvent.click(getByText(operator))
            expect(mockHandlers.onOperatorButtonClick).toHaveBeenCalledWith(operator)
        })
    })

    it('calls onEqualButtonClick when the Point button is clicked', () => {
        const { getByText } = renderPad()
        fireEvent.click(getByText('.'))
        expect(mockHandlers.onPointButtonClick).toHaveBeenCalledTimes(1)
    })

    it('calls onEqualButtonClick when the Equal button is clicked', () => {
        const { getByText } = renderPad()
        fireEvent.click(getByText('='))
        expect(mockHandlers.onEqualButtonClick).toHaveBeenCalledTimes(1)
    })

    it('calls onAllClearButtonClick when the "AC" button is clicked', () => {
        const { getByText } = renderPad()
        fireEvent.click(getByText('AC'))
        expect(mockHandlers.onAllClearButtonClick).toHaveBeenCalledTimes(1)
    })

    it('calls onAllClearButtonClick when the "C" button is clicked', () => {
        const { getByText } = renderPad()
        fireEvent.click(getByText('C'))
        expect(mockHandlers.onClearEntryButtonClick).toHaveBeenCalledTimes(1)
    })

    it('calls onAllClearButtonClick when the "-/+" button is clicked', () => {
        const { getByText } = renderPad()
        fireEvent.click(getByText('-/+'))
        expect(mockHandlers.onChangeSignButtonClick).toHaveBeenCalledTimes(1)
    })

    it('calls onMemoryRecallButtonClick when the "MR" button is clicked', () => {
        const { getByText } = renderPad()
        fireEvent.click(getByText('MR'))
        expect(mockHandlers.onMemoryRecallButtonClick).toHaveBeenCalledTimes(1)
    })

    it('calls onMemoryClearButtonClick when the "MC" button is clicked', () => {
        const { getByText } = renderPad()
        fireEvent.click(getByText('MC'))
        expect(mockHandlers.onMemoryClearButtonClick).toHaveBeenCalledTimes(1)
    })

    it('calls onMemoryPlusButtonClick when the "M+" button is clicked', () => {
        const { getByText } = renderPad()
        fireEvent.click(getByText('M+'))
        expect(mockHandlers.onMemoryPlusButtonClick).toHaveBeenCalledTimes(1)
    })

    it('calls onMemoryMinusButtonClick when the "M-" button is clicked', () => {
        const { getByText } = renderPad()
        fireEvent.click(getByText('M-'))
        expect(mockHandlers.onMemoryMinusButtonClick).toHaveBeenCalledTimes(1)
    })


    // Test for keyboard event handling
    it('handles keyboard events for digits', () => {
        renderPad()
        const keyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
        keyCodes.map((keyCode, index) => {
            fireEvent.keyDown(document.body, { keyCode: keyCode, shiftKey: false })
            expect(mockHandlers.onDigitButtonClick).toHaveBeenCalledWith(index)
        })
    })

    it('handles keyboard events for digits on number pad', () => {
        renderPad()
        const keyCodes = [96, 97, 98, 99, 100, 101, 102, 103, 104, 105]
        keyCodes.map((keyCode, index) => {
            fireEvent.keyDown(document.body, { keyCode: keyCode, shiftKey: false })
            expect(mockHandlers.onDigitButtonClick).toHaveBeenCalledWith(index)
        })
    })

    it('handles keyboard events for operators on number pad', () => {
        renderPad()
        fireEvent.keyDown(document.body, { keyCode: 107 }) // Key code for "+"
        fireEvent.keyDown(document.body, { keyCode: 109 }) // Key code for "-"
        fireEvent.keyDown(document.body, { keyCode: 106 }) // Key code for "×"
        fireEvent.keyDown(document.body, { keyCode: 111 }) // Key code for "÷"
        expect(mockHandlers.onOperatorButtonClick).toHaveBeenCalledWith('+')
        expect(mockHandlers.onOperatorButtonClick).toHaveBeenCalledWith('-')
        expect(mockHandlers.onOperatorButtonClick).toHaveBeenCalledWith('×')
        expect(mockHandlers.onOperatorButtonClick).toHaveBeenCalledWith('÷')
    })

    it('handles keyboard events for operators', () => {
        renderPad()
        fireEvent.keyDown(document.body, { keyCode: 187, shiftKey: true }) // Key code for "+"
        fireEvent.keyDown(document.body, { keyCode: 189 }) // Key code for "-"
        fireEvent.keyDown(document.body, { keyCode: 56, shiftKey: true }) // Key code for "×"
        fireEvent.keyDown(document.body, { keyCode: 191 }) // Key code for "÷"
        expect(mockHandlers.onOperatorButtonClick).toHaveBeenCalledWith('+')
        expect(mockHandlers.onOperatorButtonClick).toHaveBeenCalledWith('-')
        expect(mockHandlers.onOperatorButtonClick).toHaveBeenCalledWith('×')
        expect(mockHandlers.onOperatorButtonClick).toHaveBeenCalledWith('÷')
    })

    it('handles keyboard events for Equal button', () => {
        renderPad()
        fireEvent.keyDown(document.body, { keyCode: 13 }) // Key code for Enter
        expect(mockHandlers.onEqualButtonClick).toHaveBeenCalledTimes(1)
    })

    it('handles keyboard events for Equal button', () => {
        renderPad()
        fireEvent.keyDown(document.body, { keyCode: 187, shiftKey: false }) // Key code for Enter
        expect(mockHandlers.onEqualButtonClick).toHaveBeenCalledTimes(1)
    })

    it('handles keyboard events for clearing all', () => {
        renderPad()
        fireEvent.keyDown(document.body, { keyCode: 27 }) // Key code for Esc
        expect(mockHandlers.onAllClearButtonClick).toHaveBeenCalledTimes(1)
    })

    it('handles keyboard events for clearing', () => {
        renderPad()
        fireEvent.keyDown(document.body, { keyCode: 46 }) // Key code for Del
        expect(mockHandlers.onClearEntryButtonClick).toHaveBeenCalledTimes(1)
    })

    it('handles keyboard events for memory plus', () => {
        renderPad()
        fireEvent.keyDown(document.body, { keyCode: 80 }) // Key code for p
        expect(mockHandlers.onMemoryPlusButtonClick).toHaveBeenCalledTimes(1)
    })

    it('handles keyboard events for memory minus', () => {
        renderPad()
        fireEvent.keyDown(document.body, { keyCode: 77 }) // Key code for m
        expect(mockHandlers.onMemoryMinusButtonClick).toHaveBeenCalledTimes(1)
    })

    it('handles keyboard events for memory recall', () => {
        renderPad()
        fireEvent.keyDown(document.body, { keyCode: 82 }) // Key code for r
        expect(mockHandlers.onMemoryRecallButtonClick).toHaveBeenCalledTimes(1)
    })

    it('handles keyboard events for memory cleaning', () => {
        renderPad()
        fireEvent.keyDown(document.body, { keyCode: 67 }) // Key code for c
        expect(mockHandlers.onMemoryClearButtonClick).toHaveBeenCalledTimes(1)
    })

    it('handles keyboard events for changing sign', () => {
        renderPad()
        fireEvent.keyDown(document.body, { keyCode: 78 }) // Key code for n
        expect(mockHandlers.onChangeSignButtonClick).toHaveBeenCalledTimes(1)
    })

    it('handles keyboard events for point click', () => {
        renderPad()
        fireEvent.keyDown(document.body, { keyCode: 190, shiftKey: false }) // Key code for .
        expect(mockHandlers.onPointButtonClick).toHaveBeenCalledTimes(1)
    })

    it('handles keyboard events for point click on number pad', () => {
        renderPad()
        fireEvent.keyDown(document.body, { keyCode: 110 }) // Key code for .
        expect(mockHandlers.onPointButtonClick).toHaveBeenCalledTimes(1)
    })
})
