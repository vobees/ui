import classnames from 'classnames'
import React, { forwardRef } from 'react'

import type { Color, Size, Variant } from '../theme'
import type { SpinnerPlacement } from './ButtonSpinner'
import ButtonSpinner from './ButtonSpinner'

export type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  color?: Color
  size?: Size
  disabled?: boolean
  htmlType?: ButtonType
  isLoading?: boolean
  loadingText?: string
  spinnerPlacement?: SpinnerPlacement
}

type ButtonContentProps = Pick<ButtonProps, 'children'>

const ButtonContent = ({ children }: ButtonContentProps) =>
  children as JSX.Element

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      color = 'primary',
      size = 'md',
      disabled,
      htmlType = 'button',
      isLoading,
      loadingText,
      spinnerPlacement = 'start',
      className,
      children,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const styles = {
      base: 'button inline-flex appearance-none items-center justify-center select-none relative whitespace-nowrap align-middle outline-none outline-offset-2 leading-tight rounded-md font-semibold transition-common duration-normal h-10 min-w-10 text-base px-4',
      themes: {
        primary: {
          variant: {
            solid:
              'button--solid button--primary bg-primary-500 hover:[&:not(:disabled)]:bg-primary-600 text-white',
            outline:
              'button--outline button--primary bg-transparent border border-primary-500 text-primary-500 hover:[&:not(:disabled)]:bg-primary-500 hover:[&:not(:disabled)]:text-white outline',
          },
        },
        success: {
          variant: {
            solid:
              'button--solid button--success bg-success-500 hover:[&:not(:disabled)]:bg-success-600 text-white',
            outline:
              'button--outline button--success bg-transparent border border-success-500 text-success-500 hover:[&:not(:disabled)]:bg-success-500 hover:[&:not(:disabled)]:text-white outline',
          },
        },
        info: {
          variant: {
            solid:
              'button--solid button--info bg-info-500 hover:[&:not(:disabled)]:bg-info-600 text-white',
            outline:
              'button--outline button--info bg-transparent border border-info-500 text-info-500 hover:[&:not(:disabled)]:bg-info-500 hover:[&:not(:disabled)]:text-white outline',
          },
        },
        warning: {
          variant: {
            solid:
              'button--solid button--warning bg-warning-500 hover:[&:not(:disabled)]:bg-warning-600 text-white',
            outline:
              'button--outline button--warning bg-transparent border border-warning-500 text-warning-500 hover:[&:not(:disabled)]:bg-warning-500 hover:[&:not(:disabled)]:text-white outline',
          },
        },
        danger: {
          variant: {
            solid:
              'button--solid button--danger bg-danger-500 hover:[&:not(:disabled)]:bg-danger-600 text-white',
            outline:
              'button--outline button--danger bg-transparent border border-danger-500 text-danger-500 hover:[&:not(:disabled)]:bg-danger-500 hover:[&:not(:disabled)]:text-white outline',
          },
        },
        dark: {
          variant: {
            solid:
              'button--solid button--dark bg-gray-800 hover:[&:not(:disabled)]:bg-gray-900 text-white',
            outline:
              'button--outline button--dark bg-transparent border border-gray-800 text-gray-800 hover:[&:not(:disabled)]:bg-gray-800 hover:[&:not(:disabled)]:text-white outline',
          },
        },
      },
      sizes: {
        xs: 'button--xs h-6 min-w-6 text-xs px-2',
        sm: 'button--sm h-8 min-w-8 text-sm px-3',
        md: 'button--md h-10 min-w-10 text-md px-4',
        lg: 'button--lg h-12 min-w-12 text-lg px-6',
      },
    }

    const { base, themes, sizes } = styles
    const themeStyle = themes[color].variant[variant]
    const disabledStyle =
      disabled || isLoading ? 'opacity-60 cursor-not-allowed' : ''
    const sizeStyle = sizes[size]

    const contentProps = { children }

    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={htmlType}
        ref={ref}
        disabled={disabled || isLoading}
        className={classnames(
          base,
          sizeStyle,
          themeStyle,
          disabledStyle,
          className,
        )}
        data-loading={isLoading}
        {...props}
      >
        {isLoading && spinnerPlacement === 'start' && (
          <ButtonSpinner label={loadingText} placement="start" />
        )}

        {isLoading ? (
          loadingText || (
            <span className="opacity-0">
              <ButtonContent {...contentProps} />
            </span>
          )
        ) : (
          <ButtonContent {...contentProps} />
        )}

        {isLoading && spinnerPlacement === 'end' && (
          <ButtonSpinner label={loadingText} placement="end" />
        )}
      </button>
    )
  },
)

export default Button
