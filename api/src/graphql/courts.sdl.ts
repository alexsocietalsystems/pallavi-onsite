export const schema = gql`
  type Court {
    id: Int!
    street_address: String!
    court_name: String!
    citations: [Citation]!
    createdAt: DateTime!
  }

  type Query {
    courts: [Court!]! @requireAuth
    court(id: Int!): Court @requireAuth
  }

  input CreateCourtInput {
    street_address: String!
    court_name: String!
  }

  input UpdateCourtInput {
    street_address: String
    court_name: String
  }

  type Mutation {
    createCourt(input: CreateCourtInput!): Court! @requireAuth
    updateCourt(id: Int!, input: UpdateCourtInput!): Court! @requireAuth
    deleteCourt(id: Int!): Court! @requireAuth
  }
`
