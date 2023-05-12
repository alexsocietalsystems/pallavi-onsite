import { render } from '@redwoodjs/testing/web'

import AddInfoPage from './AddInfoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AddInfoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddInfoPage />)
    }).not.toThrow()
  })
})
