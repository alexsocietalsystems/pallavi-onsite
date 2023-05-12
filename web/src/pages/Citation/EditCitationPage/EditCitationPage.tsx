import EditCitationCell from 'src/components/Citation/EditCitationCell'

type CitationPageProps = {
  id: number
}

const EditCitationPage = ({ id }: CitationPageProps) => {
  return <EditCitationCell id={id} />
}

export default EditCitationPage
