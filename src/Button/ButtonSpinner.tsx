import classnames from 'classnames'
import React from 'react'

import Spinner from '../Spinner'

export type SpinnerPlacement = 'start' | 'end'

export interface ButtonSpinnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  placement?: SpinnerPlacement
}

const ButtonSpinner = ({
  label,
  placement = 'start',
  children = <Spinner />,
  className,
  ...props
}: ButtonSpinnerProps) => {
  const baseStyle = 'flex items-center leading-normal text-base'
  const positionStyle = label ? 'relative' : 'absolute'
  const placementStartStyle = label ? 'placement-start mr-2' : 'm-0'
  const placementEndStyle = label ? 'placement-end ml-2' : 'm-0'

  const spacingStyle =
    placement === 'start' ? placementStartStyle : placementEndStyle

  return (
    <div
      className={classnames(
        'button-spinner',
        baseStyle,
        positionStyle,
        spacingStyle,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default ButtonSpinner
