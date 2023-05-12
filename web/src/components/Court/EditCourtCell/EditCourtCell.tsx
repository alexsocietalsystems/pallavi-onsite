import type { EditCourtById, UpdateCourtInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CourtForm from 'src/components/Court/CourtForm'

export const QUERY = gql`
  query EditCourtById($id: Int!) {
    court: court(id: $id) {
      id
      street_address
      court_name
      createdAt
    }
  }
`
const UPDATE_COURT_MUTATION = gql`
  mutation UpdateCourtMutation($id: Int!, $input: UpdateCourtInput!) {
    updateCourt(id: $id, input: $input) {
      id
      street_address
      court_name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ court }: CellSuccessProps<EditCourtById>) => {
  const [updateCourt, { loading, error }] = useMutation(UPDATE_COURT_MUTATION, {
    onCompleted: () => {
      toast.success('Court updated')
      navigate(routes.courts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdateCourtInput,
    id: EditCourtById['court']['id']
  ) => {
    updateCourt({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Court {court?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CourtForm
          court={court}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
