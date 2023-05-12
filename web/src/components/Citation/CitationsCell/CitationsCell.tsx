import type { FindCitations } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Citations from 'src/components/Citation/Citations'

export const QUERY = gql`
  query FindCitations {
    citations {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No citations yet. '}
      <Link to={routes.newCitation()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ citations }: CellSuccessProps<FindCitations>) => {
  return <Citations citations={citations} />
}
