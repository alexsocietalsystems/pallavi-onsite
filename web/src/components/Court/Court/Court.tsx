import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type { DeleteCourtMutationVariables, FindCourtById } from 'types/graphql'

const DELETE_COURT_MUTATION = gql`
  mutation DeleteCourtMutation($id: Int!) {
    deleteCourt(id: $id) {
      id
    }
  }
`

interface Props {
  court: NonNullable<FindCourtById['court']>
}

const Court = ({ court }: Props) => {
  const [deleteCourt] = useMutation(DELETE_COURT_MUTATION, {
    onCompleted: () => {
      toast.success('Court deleted')
      navigate(routes.courts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCourtMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete court ' + id + '?')) {
      deleteCourt({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Court {court.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{court.id}</td>
            </tr>
            <tr>
              <th>Street address</th>
              <td>{court.street_address}</td>
            </tr>
            <tr>
              <th>Court name</th>
              <td>{court.court_name}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(court.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCourt({ id: court.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(court.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Court
