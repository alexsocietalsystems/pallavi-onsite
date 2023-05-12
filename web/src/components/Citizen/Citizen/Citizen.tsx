import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

import type {
  DeleteCitizenMutationVariables,
  FindCitizenById,
} from 'types/graphql'

const DELETE_CITIZEN_MUTATION = gql`
  mutation DeleteCitizenMutation($id: Int!) {
    deleteCitizen(id: $id) {
      id
    }
  }
`

interface Props {
  citizen: NonNullable<FindCitizenById['citizen']>
}

const Citizen = ({ citizen }: Props) => {
  const [deleteCitizen] = useMutation(DELETE_CITIZEN_MUTATION, {
    onCompleted: () => {
      toast.success('Citizen deleted')
      navigate(routes.citizens())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCitizenMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete citizen ' + id + '?')) {
      deleteCitizen({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Citizen {citizen.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{citizen.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{citizen.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{citizen.email}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{citizen.phoneNumber}</td>
            </tr>
            <tr>
              <th>Citation id</th>
              <td>{citizen.citation_id}</td>
            </tr>
            <tr>
              <th>Notifications</th>
              <td>{checkboxInputTag(citizen.notifications)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCitizen({ id: citizen.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(citizen.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Citizen
