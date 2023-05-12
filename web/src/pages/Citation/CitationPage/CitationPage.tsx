import CitationCell from 'src/components/Citation/CitationCell'

type CitationPageProps = {
  id: number
}

const CitationPage = ({ id }: CitationPageProps) => {
  return <CitationCell id={id} />
}

export default CitationPage
