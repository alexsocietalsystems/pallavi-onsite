import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Form, TextField, Submit, useForm } from '@redwoodjs/forms'
import { useLazyQuery } from '@apollo/client'
import { navigate } from '@redwoodjs/router'

const getCitation = gql`
    query FetchCitationQuery($citation_number: String!, $driver_name: String!) {
      getCitationByNumberAndDriverName(citationNumber: $citation_number, driverName: $driver_name) {
        citation {
          id
          docket_time
        }
        citationExists
      }
    }
  `

const HomePage = () => {

  const [citation, { loading, error, data }] = useLazyQuery(getCitation)

  const VerifyUser = async (e) => {

    const citationNumber = e.citation
    const driverName = e.name
    await citation({ variables: { citation_number: citationNumber, driver_name: driverName } })

    const citationExists = data?.getCitationByNumberAndDriverName?.citationExists
    const citationObj = data?.getCitationByNumberAndDriverName?.citation

    if (citationExists && citation != null) {
      console.log("In herereee")
      navigate('/addInfo/'+citationObj.id,) 
    }
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <Form onSubmit={VerifyUser} config={{ mode: 'onBlur' }}>
        <label htmlFor="name">Enter your Citation Number</label>
        <TextField name="citation" required />
        <label htmlFor="name">Enter your Name</label>
        <TextField name="name" required />
        <Submit>Verify</Submit>

      </Form>
      {data && !data.getCitationByNumberAndDriverName?.citationExists && (
        <p>No citation found.</p>
      )}
      {data && data.getCitationByNumberAndDriverName?.citationExists &&
         !data.getCitationByNumberAndDriverName?.citation && (
        <p>Incorrect details.</p>
      )}
    </>
  )
}

export default HomePage
