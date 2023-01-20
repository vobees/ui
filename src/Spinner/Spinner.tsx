import classnames from 'classnames'
import React, { forwardRef } from 'react'

import type { Color, Size } from '../theme'

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  color?: Color | 'default'
  size?: Size
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      label = 'Loading...',
      color = 'default',
      size = 'sm',
      className,
      ...props
    }: SpinnerProps,
    ref,
  ) => {
    const colors = {
      default: 'spinner--default text-current',
      primary: 'spinner--primary text-primary-500',
      success: 'spinner--success text-success-500',
      info: 'spinner--info text-info-500',
      warning: 'spinner--warning text-warning-500',
      danger: 'spinner--danger text-danger-500',
      dark: 'spinner--dark text-gray-800',
    }

    const sizes = {
      xs: 'spinner--xs w-3 h-3',
      sm: 'spinner--sm w-4 h-4',
      md: 'spinner--md w-6 h-6',
      lg: 'spinner--lg w-8 h-8',
    }

    const baseStyle =
      'spinner inline-block border-t-2 border-t-current border-r-2 border-r-current border-solid border-b-2 border-l-2 rounded-full border-b-transparent border-l-transparent animate-spin'
    const colorStyle = colors[color]
    const sizeStyle = sizes[size]

    return (
      <div
        className={classnames(baseStyle, sizeStyle, colorStyle, className)}
        ref={ref}
        {...props}
      >
        {label && <span className="sr-only">{label}</span>}
      </div>
    )
  },
)

export default Spinner
