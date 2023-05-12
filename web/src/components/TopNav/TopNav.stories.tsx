// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TopNav> = (args) => {
//   return <TopNav {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TopNav from './TopNav'

export const generated = () => {
  return <TopNav />
}

export default {
  title: 'Components/TopNav',
  component: TopNav,
} as ComponentMeta<typeof TopNav>
