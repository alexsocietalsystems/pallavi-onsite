export const schema = gql`
  type Citizen {
    id: Int!
    name: String!
    email: String!
    phoneNumber: String!
    citation_id: Int!
    citation: Citation!
    notifications: Boolean!
  }

  type Query {
    citizens: [Citizen!]! @requireAuth
    citizen(id: Int!): Citizen @requireAuth
  }

  input CreateCitizenInput {
    name: String!
    email: String!
    phoneNumber: String!
    citation_id: Int!
    notifications: Boolean!
  }

  input UpdateCitizenInput {
    name: String
    email: String
    phoneNumber: String
    citation_id: Int
    notifications: Boolean
  }

  type Mutation {
    createCitizen(input: CreateCitizenInput!): Citizen! @skipAuth
    updateCitizen(id: Int!, input: UpdateCitizenInput!): Citizen! @requireAuth
    deleteCitizen(id: Int!): Citizen! @requireAuth
  }
`
