import EditCourtCell from 'src/components/Court/EditCourtCell'

type CourtPageProps = {
  id: number
}

const EditCourtPage = ({ id }: CourtPageProps) => {
  return <EditCourtCell id={id} />
}

export default EditCourtPage
