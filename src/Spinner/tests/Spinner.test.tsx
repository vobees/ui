import { render, screen } from '@testing-library/react'
import React from 'react'

import type { Color, Size } from '../../theme'
import Spinner from '../Spinner'

const sizes: Array<Size> = ['xs', 'sm', 'md', 'lg']
const colors: Array<Color | 'default'> = [
  'default',
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'dark',
]

describe('Spinner', () => {
  it('should render correctly', () => {
    render(<Spinner />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it.each(colors)('should have correct color %s class', (color) => {
    render(<Spinner color={color} data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).toHaveClass(`spinner--${color}`)
  })

  it.each(sizes)('should have correct size %s class', (size) => {
    render(<Spinner size={size} data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).toHaveClass(`spinner--${size}`)
  })
})
