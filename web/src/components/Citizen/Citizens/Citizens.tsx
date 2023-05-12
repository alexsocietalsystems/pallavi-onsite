import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Citizen/CitizensCell'
import { checkboxInputTag, truncate } from 'src/lib/formatters'

import type {
  DeleteCitizenMutationVariables,
  FindCitizens,
} from 'types/graphql'

const DELETE_CITIZEN_MUTATION = gql`
  mutation DeleteCitizenMutation($id: Int!) {
    deleteCitizen(id: $id) {
      id
    }
  }
`

const CitizensList = ({ citizens }: FindCitizens) => {
  const [deleteCitizen] = useMutation(DELETE_CITIZEN_MUTATION, {
    onCompleted: () => {
      toast.success('Citizen deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteCitizenMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete citizen ' + id + '?')) {
      deleteCitizen({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Citation id</th>
            <th>Notifications</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {citizens.map((citizen) => (
            <tr key={citizen.id}>
              <td>{truncate(citizen.id)}</td>
              <td>{truncate(citizen.name)}</td>
              <td>{truncate(citizen.email)}</td>
              <td>{truncate(citizen.phoneNumber)}</td>
              <td>{truncate(citizen.citation_id)}</td>
              <td>{checkboxInputTag(citizen.notifications)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.citizen({ id: citizen.id })}
                    title={'Show citizen ' + citizen.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCitizen({ id: citizen.id })}
                    title={'Edit citizen ' + citizen.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete citizen ' + citizen.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(citizen.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CitizensList
