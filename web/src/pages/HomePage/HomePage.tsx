import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'
import { Form, TextField, Submit } from '@redwoodjs/forms'

const HomePage = () => {

//   const FETCH_CITATION = gql`
//   query CreateContactMutation($input: CreateContactInput!) {
//     createContact(input: $input) {
//       id
//     }
//   }
// `

  const VerifyUser = (data) => {

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
    </>
  )
}

export default HomePage
