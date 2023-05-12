import CourtCell from 'src/components/Court/CourtCell'

type CourtPageProps = {
  id: number
}

const CourtPage = ({ id }: CourtPageProps) => {
  return <CourtCell id={id} />
}

export default CourtPage
