import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import type { ButtonProps } from '../Button'
import Button from '../Button'

export default {
  title: 'Components / Button',
  decorators: [
    (Story: any) => (
      <div className="flex flex-wrap items-center gap-4">
        <Story />
      </div>
    ),
  ],
} as Meta

interface StoryProps extends ButtonProps {}

export const basic: StoryFn<StoryProps> = (props) => <Button {...props} />
basic.argTypes = {
  children: { type: 'string' },
  color: {
    options: ['primary', 'success', 'info', 'warning', 'danger', 'dark'],
    control: { type: 'select' },
  },
  variant: {
    options: ['solid', 'outline'],
    control: { type: 'radio' },
  },
  isLoading: {
    control: { type: 'boolean' },
  },
  loadingText: { type: 'string' },
  spinnerPlacement: {
    options: ['start', 'end'],
    control: { type: 'radio' },
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg'],
    control: { type: 'select' },
  },
}

basic.args = {
  children: 'Button',
  color: 'primary',
  variant: 'solid',
  isLoading: false,
  loadingText: 'Loading...',
  spinnerPlacement: 'start',
  size: 'md',
}

export const Colors = () => (
  <>
    <Button color="primary">Primary</Button>
    <Button color="success">Success</Button>
    <Button color="info">Info</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
    <Button color="dark">Dark</Button>
  </>
)

export const Variants = () => (
  <>
    <Button>Solid</Button>
    <Button variant="outline">Outline</Button>
  </>
)

export const Sizes = () => (
  <>
    <Button size="xs">Button (xs)</Button>
    <Button size="sm">Button (sm)</Button>
    <Button size="md">Button (md)</Button>
    <Button size="lg">Button (lg)</Button>
  </>
)

export const Loading = () => (
  <>
    <Button isLoading>Email</Button>
    <Button isLoading loadingText="Submitting...">
      Email
    </Button>
    <Button isLoading loadingText="Submitting..." spinnerPlacement="end">
      Email
    </Button>
  </>
)
