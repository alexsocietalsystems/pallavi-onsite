import EditCitizenCell from 'src/components/Citizen/EditCitizenCell'

type CitizenPageProps = {
  id: number
}

const EditCitizenPage = ({ id }: CitizenPageProps) => {
  return <EditCitizenCell id={id} />
}

export default EditCitizenPage
