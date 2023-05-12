import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CitizenForm from 'src/components/Citizen/CitizenForm'

import type { CreateCitizenInput } from 'types/graphql'

const CREATE_CITIZEN_MUTATION = gql`
  mutation CreateCitizenMutation($input: CreateCitizenInput!) {
    createCitizen(input: $input) {
      id
    }
  }
`

const NewCitizen = () => {
  const [createCitizen, { loading, error }] = useMutation(
    CREATE_CITIZEN_MUTATION,
    {
      onCompleted: () => {
        toast.success('Citizen created')
        navigate(routes.citizens())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCitizenInput) => {
    createCitizen({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Citizen</h2>
      </header>
      <div className="rw-segment-main">
        <CitizenForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCitizen
