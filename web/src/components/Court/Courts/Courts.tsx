import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Court/CourtsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteCourtMutationVariables, FindCourts } from 'types/graphql'

const DELETE_COURT_MUTATION = gql`
  mutation DeleteCourtMutation($id: Int!) {
    deleteCourt(id: $id) {
      id
    }
  }
`

const CourtsList = ({ courts }: FindCourts) => {
  const [deleteCourt] = useMutation(DELETE_COURT_MUTATION, {
    onCompleted: () => {
      toast.success('Court deleted')
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

  const onDeleteClick = (id: DeleteCourtMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete court ' + id + '?')) {
      deleteCourt({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Street address</th>
            <th>Court name</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {courts.map((court) => (
            <tr key={court.id}>
              <td>{truncate(court.id)}</td>
              <td>{truncate(court.street_address)}</td>
              <td>{truncate(court.court_name)}</td>
              <td>{timeTag(court.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.court({ id: court.id })}
                    title={'Show court ' + court.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCourt({ id: court.id })}
                    title={'Edit court ' + court.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete court ' + court.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(court.id)}
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

export default CourtsList
