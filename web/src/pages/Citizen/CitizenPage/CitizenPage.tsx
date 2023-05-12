import CitizenCell from 'src/components/Citizen/CitizenCell'

type CitizenPageProps = {
  id: number
}

const CitizenPage = ({ id }: CitizenPageProps) => {
  return <CitizenCell id={id} />
}

export default CitizenPage
