import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Form, TextField, Submit, useForm, CheckboxField } from '@redwoodjs/forms'
import { useQuery, useLazyQuery } from '@apollo/client'
import { navigate } from '@redwoodjs/router'
import { useState, useEffect } from 'react'
import { toast, Toaster } from '@redwoodjs/web/toast'

const getCitation = gql`
    query FetchCitationQuery1($id: Int!) {
      citation(id: $id) {
          id
          docket_time
          driver_name
        }
    }
  `

  const addUserInformation = gql`
  mutation createUser($input: CreateCitizenInput!) {
    createCitizen(input: $input) {
        id
        name
      }
  }
`

const AddInfoPage = ( {id} ) => {

  console.log(id)
  const  {loading, error, data } = useQuery(getCitation, { variables: {id: parseInt(id, 10)}})
  const  [create, {loading: mutationLoading, error: mutationError, data: mutationData }] = useMutation(addUserInformation,{
    onCompleted: () => {
      toast.success('Thank you for your submission!')
    },
  })
  const [docketTime, setDocketTime] = useState("");

  // useEffect(() => {
  //   const fetchCitation = async () => {
  //     await citation({ variables: { id: parseInt(id, 10) } })
  //     const docketTime = data?.citation?.docket_time
  //     setDocketTime(docketTime)
  //   }
  //   fetchCitation();
  // }, []);

  

  const VerifyUser = (dataObj) => {
    console.log(dataObj)
    dataObj.name = data.citation.driver_name 
    dataObj.citation_id = parseInt(id, 10)
    console.log(dataObj)
    create({ variables: { input: dataObj } })
    
  }

  return (
    <>
      <MetaTags title="AddInfo" description="AddInfo page" />
      <h1>AddInfoPage</h1>
      {data && data.citation && (
        <p>Scheduled Court Date: {data.citation.docket_time}</p>
      )}
      <Form onSubmit={VerifyUser} config={{ mode: 'onBlur' }}>
        <label htmlFor="email">Enter your Email ID</label>
        <TextField name="email" required />
        <button>Verify Email</button>
        <label htmlFor="phoneNumber">Enter your Phone Number</label>
        <TextField name="phoneNumber" required />
        <button>Verify Phone</button>
        <CheckboxField name="notifications"></CheckboxField>
        <button type="submit">Verify</button>
      </Form>
    </>
  )
}

export default AddInfoPage
