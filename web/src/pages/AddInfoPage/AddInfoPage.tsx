import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Form, TextField, Submit, useForm, CheckboxField } from '@redwoodjs/forms'
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

const AddInfoPage = () => {

  const [citation, { loading, error, data }] = useLazyQuery(getCitation)

  const VerifyUser = (e) => {
    console.log(e)
    const citationNumber = e.citation
    const driverName = e.name
    citation({ variables: { citation_number: citationNumber, driver_name: driverName } })

    const citationExists = data?.getCitationByNumberAndDriverName?.citationExists
    const citationObj = data?.getCitationByNumberAndDriverName?.citation

    if (citationExists && citation != null) {
      console.log("In herereee")
      navigate('/addInfo') 
    }
    }

  return (
    <>
      <MetaTags title="AddInfo" description="AddInfo page" />

      <h1>AddInfoPage</h1>
      <Form onSubmit={VerifyUser} config={{ mode: 'onBlur' }}>
        <label htmlFor="name">Enter your Email ID</label>
        <TextField name="email" required />
        <button>Verify Email</button>
        <label htmlFor="name">Enter your Phone Number</label>
        <TextField name="phone" required />
        <button>Verify Phone</button>
        <CheckboxField name="notifications"></CheckboxField>
        <button type="submit">Verify</button>
      </Form>
    </>
  )
}

export default AddInfoPage
