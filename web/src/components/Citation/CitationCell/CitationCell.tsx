import type { FindCitationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Citation from 'src/components/Citation/Citation'

export const QUERY = gql`
  query FindCitationById($id: Int!) {
    citation: citation(id: $id) {
      id
      court_id
      citation_number
      driver_name
      docket_time
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Citation not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ citation }: CellSuccessProps<FindCitationById>) => {
  return <Citation citation={citation} />
}
