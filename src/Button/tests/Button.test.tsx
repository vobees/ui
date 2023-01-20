import { fireEvent, render, screen } from '@testing-library/react'
import React, { useState } from 'react'

import type { Color, Size, Variant } from '../../theme'
import Button from '../Button'

const variants: Array<Variant> = ['solid', 'outline']
const colors: Array<Color> = [
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'dark',
]
const sizes: Array<Size> = ['xs', 'sm', 'md', 'lg']

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  it('should render different text', () => {
    const { rerender } = render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
    rerender(<Button>Foo Bar</Button>)
    expect(screen.getByText('Foo Bar')).toBeInTheDocument()
  })

  it('should ignore events when disabled', () => {
    const WrapperButton = () => {
      const [state, setState] = useState('initializeState')
      return (
        <Button disabled onClick={() => setState('updatedState')}>
          {state}
        </Button>
      )
    }

    render(<WrapperButton />)
    expect(screen.getByText('initializeState')).toBeInTheDocument()
    fireEvent.click(screen.getByText('initializeState'))
    expect(screen.getByText('initializeState')).toBeInTheDocument()
    expect(screen.queryByText('updatedState')).not.toBeInTheDocument()
  })

  it('should ignore events when isLoading', () => {
    const WrapperButton = () => {
      const [state, setState] = useState('initializeState')
      return (
        <Button isLoading onClick={() => setState('updatedState')}>
          {state}
        </Button>
      )
    }

    render(<WrapperButton />)
    expect(screen.getByText('initializeState')).toBeInTheDocument()
    fireEvent.click(screen.getByText('initializeState'))
    expect(screen.getByText('initializeState')).toBeInTheDocument()
    expect(screen.queryByText('updatedState')).not.toBeInTheDocument()
  })

  it.each(variants)('should have correct variant %s class', (variant) => {
    render(<Button variant={variant}>{`Button ${variant}`}</Button>)
    expect(screen.getByText(`Button ${variant}`)).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass(`button--${variant}`)
  })

  it.each(colors)('should have correct color %s class', (color) => {
    render(<Button color={color}>{`Button ${color}`}</Button>)
    expect(screen.queryByRole('button')).toHaveClass(`button--${color}`)
  })

  it.each(sizes)('should have correct size %s class', (size) => {
    render(<Button size={size}>Button</Button>)
    expect(screen.getByRole('button')).toHaveClass(`button--${size}`)
  })

  it('should render loadingText correctly', () => {
    render(
      <Button isLoading loadingText="Submitting...">
        Current Children
      </Button>,
    )
    expect(screen.getByText('Submitting...')).toBeInTheDocument()
    expect(screen.queryByText('Current Children')).not.toBeInTheDocument()
  })

  it('should render spinner placement end', () => {
    render(
      <Button isLoading loadingText="Submitting..." spinnerPlacement="end">
        Current Children
      </Button>,
    )
    expect(screen.getByText('Submitting...')).toBeInTheDocument()
    expect(screen.queryByText('Current Children')).not.toBeInTheDocument()
  })
})
