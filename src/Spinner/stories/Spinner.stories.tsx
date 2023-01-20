import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import type { SpinnerProps } from '../Spinner'
import Spinner from '../Spinner'

export default {
  title: 'Components / Spinner',
  decorators: [
    (Story: any) => (
      <div className="flex flex-wrap items-center gap-4">
        <Story />
      </div>
    ),
  ],
} as Meta

interface StoryProps extends SpinnerProps {}

export const basic: StoryFn<StoryProps> = (props) => <Spinner {...props} />
basic.argTypes = {
  color: {
    options: [
      'default',
      'primary',
      'success',
      'info',
      'warning',
      'danger',
      'dark',
    ],
    control: { type: 'select' },
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg'],
    control: { type: 'select' },
  },
}
basic.args = {
  color: 'default',
  size: 'sm',
}

export const Colors = () => (
  <>
    <Spinner />
    <Spinner color="primary" />
    <Spinner color="success" />
    <Spinner color="info" />
    <Spinner color="warning" />
    <Spinner color="danger" />
    <Spinner color="dark" />
  </>
)

export const Sizes = () => (
  <>
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
  </>
)
