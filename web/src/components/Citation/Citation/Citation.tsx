import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteCitationMutationVariables,
  FindCitationById,
} from 'types/graphql'

const DELETE_CITATION_MUTATION = gql`
  mutation DeleteCitationMutation($id: Int!) {
    deleteCitation(id: $id) {
      id
    }
  }
`

interface Props {
  citation: NonNullable<FindCitationById['citation']>
}

const Citation = ({ citation }: Props) => {
  const [deleteCitation] = useMutation(DELETE_CITATION_MUTATION, {
    onCompleted: () => {
      toast.success('Citation deleted')
      navigate(routes.citations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCitationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete citation ' + id + '?')) {
      deleteCitation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Citation {citation.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{citation.id}</td>
            </tr>
            <tr>
              <th>Court id</th>
              <td>{citation.court_id}</td>
            </tr>
            <tr>
              <th>Citation number</th>
              <td>{citation.citation_number}</td>
            </tr>
            <tr>
              <th>Driver name</th>
              <td>{citation.driver_name}</td>
            </tr>
            <tr>
              <th>Docket time</th>
              <td>{timeTag(citation.docket_time)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(citation.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCitation({ id: citation.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(citation.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Citation
