import type { ComponentMeta } from '@storybook/react'

import AddInfoPage from './AddInfoPage'

export const generated = () => {
  return <AddInfoPage />
}

export default {
  title: 'Pages/AddInfoPage',
  component: AddInfoPage,
} as ComponentMeta<typeof AddInfoPage>
