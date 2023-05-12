import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Citation/CitationsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteCitationMutationVariables,
  FindCitations,
} from 'types/graphql'

const DELETE_CITATION_MUTATION = gql`
  mutation DeleteCitationMutation($id: Int!) {
    deleteCitation(id: $id) {
      id
    }
  }
`

const CitationsList = ({ citations }: FindCitations) => {
  const [deleteCitation] = useMutation(DELETE_CITATION_MUTATION, {
    onCompleted: () => {
      toast.success('Citation deleted')
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

  const onDeleteClick = (id: DeleteCitationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete citation ' + id + '?')) {
      deleteCitation({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Court id</th>
            <th>Citation number</th>
            <th>Driver name</th>
            <th>Docket time</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {citations.map((citation) => (
            <tr key={citation.id}>
              <td>{truncate(citation.id)}</td>
              <td>{truncate(citation.court_id)}</td>
              <td>{truncate(citation.citation_number)}</td>
              <td>{truncate(citation.driver_name)}</td>
              <td>{timeTag(citation.docket_time)}</td>
              <td>{timeTag(citation.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.citation({ id: citation.id })}
                    title={'Show citation ' + citation.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCitation({ id: citation.id })}
                    title={'Edit citation ' + citation.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete citation ' + citation.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(citation.id)}
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

export default CitationsList
