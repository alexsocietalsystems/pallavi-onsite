import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Form, TextField, Submit, useForm, CheckboxField } from '@redwoodjs/forms'
import { useQuery } from '@apollo/client'
import { navigate } from '@redwoodjs/router'
import { useState, useEffect } from 'react'

const getCitation = gql`
    query FetchCitationQuery($id: Int!) {
      citation(id: $id) {
          id
          docket_time
        }
    }
  `

const AddInfoPage = ( {id} ) => {

  console.log(id)
  const  {loading, error, data } = useQuery(getCitation, { variables: {id: parseInt(id, 10)}})
  const [docketTime, setDocketTime] = useState("");

  // useEffect(() => {
  //   const fetchCitation = async () => {
  //     await citation({ variables: { id: parseInt(id, 10) } })
  //     const docketTime = data?.citation?.docket_time
  //     setDocketTime(docketTime)
  //   }
  //   fetchCitation();
  // }, []);

  

  const VerifyUser = (e) => {
    console.log(e)
    // const citationNumber = e.citation
    // const driverName = e.name
    // citation({ variables: { id: id } })

    // const citationObj = data?.citation?.citation
    // console.log(citationObj)

    // if (citation != null) {
    //   console.log("In herereee")
    //   navigate('/addInfo', {})
    // }
  }

  return (
    <>
      <MetaTags title="AddInfo" description="AddInfo page" />
      <h1>AddInfoPage</h1>
      {data && data.citation && (
        <p>Scheduled Court Date: + {data.citation.docket_time}</p>
      )}
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
