import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CitationForm from 'src/components/Citation/CitationForm'

import type { CreateCitationInput } from 'types/graphql'

const CREATE_CITATION_MUTATION = gql`
  mutation CreateCitationMutation($input: CreateCitationInput!) {
    createCitation(input: $input) {
      id
    }
  }
`

const NewCitation = () => {
  const [createCitation, { loading, error }] = useMutation(
    CREATE_CITATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Citation created')
        navigate(routes.citations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCitationInput) => {
    createCitation({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Citation</h2>
      </header>
      <div className="rw-segment-main">
        <CitationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCitation
