export const schema = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    phoneNumber: String!
    citation_id: Int!
    citation: Citation!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String!
    email: String!
    phoneNumber: String!
    citation_id: Int!
  }

  input UpdateUserInput {
    name: String
    email: String
    phoneNumber: String
    citation_id: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
