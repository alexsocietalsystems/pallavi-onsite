import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CourtForm from 'src/components/Court/CourtForm'

import type { CreateCourtInput } from 'types/graphql'

const CREATE_COURT_MUTATION = gql`
  mutation CreateCourtMutation($input: CreateCourtInput!) {
    createCourt(input: $input) {
      id
    }
  }
`

const NewCourt = () => {
  const [createCourt, { loading, error }] = useMutation(CREATE_COURT_MUTATION, {
    onCompleted: () => {
      toast.success('Court created')
      navigate(routes.courts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateCourtInput) => {
    createCourt({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Court</h2>
      </header>
      <div className="rw-segment-main">
        <CourtForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCourt
