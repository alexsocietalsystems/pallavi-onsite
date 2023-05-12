import type { FindCitizens } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Citizens from 'src/components/Citizen/Citizens'

export const QUERY = gql`
  query FindCitizens {
    citizens {
      id
      name
      email
      phoneNumber
      citation_id
      notifications
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No citizens yet. '}
      <Link to={routes.newCitizen()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ citizens }: CellSuccessProps<FindCitizens>) => {
  return <Citizens citizens={citizens} />
}
