import type { EditCitationById, UpdateCitationInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CitationForm from 'src/components/Citation/CitationForm'

export const QUERY = gql`
  query EditCitationById($id: Int!) {
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
const UPDATE_CITATION_MUTATION = gql`
  mutation UpdateCitationMutation($id: Int!, $input: UpdateCitationInput!) {
    updateCitation(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ citation }: CellSuccessProps<EditCitationById>) => {
  const [updateCitation, { loading, error }] = useMutation(
    UPDATE_CITATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Citation updated')
        navigate(routes.citations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCitationInput,
    id: EditCitationById['citation']['id']
  ) => {
    updateCitation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Citation {citation?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CitationForm
          citation={citation}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
