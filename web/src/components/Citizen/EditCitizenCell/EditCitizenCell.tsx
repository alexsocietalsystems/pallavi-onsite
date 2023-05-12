import type { EditCitizenById, UpdateCitizenInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CitizenForm from 'src/components/Citizen/CitizenForm'

export const QUERY = gql`
  query EditCitizenById($id: Int!) {
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
const UPDATE_CITIZEN_MUTATION = gql`
  mutation UpdateCitizenMutation($id: Int!, $input: UpdateCitizenInput!) {
    updateCitizen(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ citizen }: CellSuccessProps<EditCitizenById>) => {
  const [updateCitizen, { loading, error }] = useMutation(
    UPDATE_CITIZEN_MUTATION,
    {
      onCompleted: () => {
        toast.success('Citizen updated')
        navigate(routes.citizens())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCitizenInput,
    id: EditCitizenById['citizen']['id']
  ) => {
    updateCitizen({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Citizen {citizen?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CitizenForm
          citizen={citizen}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
