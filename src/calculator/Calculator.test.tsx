import React from 'react'
import { render, screen, fireEvent, within } from '@testing-library/react'
import Calculator from './Calculator'

describe('Calculator Component', () => {

  it('renders the calculator', () => {
    render(<Calculator />)
    expect(screen.getByTestId('calculator')).toBeInTheDocument()
    expect(screen.getByTestId('display')).toBeInTheDocument()
    expect(screen.getByTestId('pad')).toBeInTheDocument()
  })

  it('displays the correct value when digits are clicked', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('1'))
    fireEvent.click(within(pad).getByText('1'))
    expect(screen.getByTestId('display').textContent).toContain('11')
  })

  it('displays the correct value when . are clicked', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('2'))
    fireEvent.click(within(pad).getByText('.'))
    fireEvent.click(within(pad).getByText('3'))
    expect(screen.getByTestId('display').textContent).toContain('2.3')
  })

  it('displays the correct value when -/+ are clicked', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('2'))
    fireEvent.click(within(pad).getByText('-/+'))
    expect(screen.getByTestId('display').textContent).toContain('-2')
  })

  it('displays the correct expression', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('6'))
    fireEvent.click(within(pad).getByText('+'))
    fireEvent.click(within(pad).getByText('8'))
    fireEvent.click(within(pad).getByText('.'))
    fireEvent.click(within(pad).getByText('7'))
    expect(screen.getByTestId('display').textContent).toContain('6+8.7')
  })

  it('performs addition correctly (+)', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('2'))
    fireEvent.click(within(pad).getByText('.'))
    fireEvent.click(within(pad).getByText('2'))
    fireEvent.click(within(pad).getByText('+'))
    fireEvent.click(within(pad).getByText('3'))
    fireEvent.click(within(pad).getByText('='))
    expect(screen.getByTestId('display').textContent).toContain('5.2')
  })

  it('performs addition correctly (-)', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('5'))
    fireEvent.click(within(pad).getByText('-'))
    fireEvent.click(within(pad).getByText('9'))
    fireEvent.click(within(pad).getByText('='))
    expect(screen.getByTestId('display').textContent).toContain('-4')
  })

  it('performs addition correctly (×)', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('1'))
    fireEvent.click(within(pad).getByText('0'))
    fireEvent.click(within(pad).getByText('.'))
    fireEvent.click(within(pad).getByText('6'))
    fireEvent.click(within(pad).getByText('×'))
    fireEvent.click(within(pad).getByText('4'))
    fireEvent.click(within(pad).getByText('='))
    expect(screen.getByTestId('display').textContent).toContain('42.4')
  })

  it('performs addition correctly (÷)', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('2'))
    fireEvent.click(within(pad).getByText('1'))
    fireEvent.click(within(pad).getByText('÷'))
    fireEvent.click(within(pad).getByText('6'))
    fireEvent.click(within(pad).getByText('='))
    expect(screen.getByTestId('display').textContent).toContain('3.5')
  })

  it('performs addition correctly (÷)', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('2'))
    fireEvent.click(within(pad).getByText('1'))
    fireEvent.click(within(pad).getByText('÷'))
    fireEvent.click(within(pad).getByText('6'))
    fireEvent.click(within(pad).getByText('='))
    expect(screen.getByTestId('display').textContent).toContain('3.5')
  })

  it('performs M+ function correctly', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('1'))
    fireEvent.click(within(pad).getByText('M+'))
    fireEvent.click(within(pad).getByText('C'))
    expect(screen.getByTestId('display').textContent).toContain('M')
  })

  it('performs M- function correctly', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('1'))
    fireEvent.click(within(pad).getByText('M-'))
    fireEvent.click(within(pad).getByText('C'))
    expect(screen.getByTestId('display').textContent).toContain('M')
  })

  it('performs MR function correctly', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('2'))
    fireEvent.click(within(pad).getByText('M+'))
    fireEvent.click(within(pad).getByText('9'))
    fireEvent.click(within(pad).getByText('M-'))
    fireEvent.click(within(pad).getByText('C'))
    fireEvent.click(within(pad).getByText('MR'))
    expect(screen.getByTestId('display').textContent).toContain('M')
    expect(screen.getByTestId('display').textContent).toContain('-7')
  })

  it('performs MC function correctly', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('9'))
    fireEvent.click(within(pad).getByText('M+'))
    fireEvent.click(within(pad).getByText('8'))
    fireEvent.click(within(pad).getByText('MC'))
    expect(screen.getByTestId('display').textContent).not.toContain('M')
    expect(screen.getByTestId('display').textContent).toContain('8')
  })

  it('clears display on C (Clear) button click', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('2'))
    fireEvent.click(within(pad).getByText('M+'))
    fireEvent.click(within(pad).getByText('C'))
    expect(screen.getByTestId('display').textContent).toContain('0')
    expect(screen.getByTestId('display').textContent).toContain('M')
  })

  it('clears display on AC (All Clear) button click', () => {
    render(<Calculator />)
    const pad = screen.getByTestId('pad')
    fireEvent.click(within(pad).getByText('2'))
    fireEvent.click(within(pad).getByText('M+'))
    fireEvent.click(within(pad).getByText('AC'))
    expect(screen.getByTestId('display').textContent).toContain('0')
    expect(screen.getByTestId('display').textContent).not.toContain('M')
  })

})