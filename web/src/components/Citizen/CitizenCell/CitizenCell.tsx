import type { FindCitizenById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Citizen from 'src/components/Citizen/Citizen'

export const QUERY = gql`
  query FindCitizenById($id: Int!) {
    citizen: citizen(id: $id) {
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

export const Empty = () => <div>Citizen not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ citizen }: CellSuccessProps<FindCitizenById>) => {
  return <Citizen citizen={citizen} />
}
