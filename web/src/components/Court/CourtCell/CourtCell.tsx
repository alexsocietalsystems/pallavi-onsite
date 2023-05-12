import type { FindCourtById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Court from 'src/components/Court/Court'

export const QUERY = gql`
  query FindCourtById($id: Int!) {
    court: court(id: $id) {
      id
      street_address
      court_name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Court not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ court }: CellSuccessProps<FindCourtById>) => {
  return <Court court={court} />
}
