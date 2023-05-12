import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
//import { Form, TextField, Submit, useForm } from '@redwoodjs/forms'
import { useLazyQuery } from '@apollo/client'
import { navigate } from '@redwoodjs/router'
import { Form, TextInput, Button, Grid, Column, FormGroup } from '@carbon/react';

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
      navigate('/addInfo/' + citationObj.id,)
    }
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Grid fullWidth style={{ marginTop: "10%" }}>
        <Column lg={5} md={8} sm={4}>
        </Column>
        <Column lg={6} md={8} sm={4}>
          <div>
            <Form onSubmit={VerifyUser}>
            <FormGroup legendText="">
              <TextInput name="citation" labelText="Enter Citation Number" required />
              <TextInput name="name" labelText="Enter Driver Name" required /> <br></br>
              <Button type="submit">Verify</Button>
              </FormGroup>
            </Form>
          </div>


        </Column>
        <Column lg={5} style={{ marginRight: "5%" }} disabled={true}>
          <div   >
            
          </div>
        </Column>
      </Grid>

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
