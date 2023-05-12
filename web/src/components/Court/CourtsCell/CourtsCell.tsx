import type { FindCourts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Courts from 'src/components/Court/Courts'

export const QUERY = gql`
  query FindCourts {
    courts {
      id
      street_address
      court_name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No courts yet. '}
      <Link to={routes.newCourt()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ courts }: CellSuccessProps<FindCourts>) => {
  return <Courts courts={courts} />
}
