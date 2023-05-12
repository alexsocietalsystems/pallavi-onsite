export const schema = gql`
  type Citation {
    id: Int!
    court_id: Int!
    court: Court!
    citation_number: String!
    driver_name: String!
    docket_time: DateTime!
    createdAt: DateTime!
  }

  type CitationResponse {
    citation: Citation
    citationExists: Boolean!
  }

  type Query {
    citations: [Citation!]! @requireAuth
    citation(id: Int!): Citation @requireAuth
    getCitationByNumberAndDriverName(citationNumber: String!, driverName: String!): CitationResponse @skipAuth
  }

  input CreateCitationInput {
    court_id: Int!
    citation_number: String!
    driver_name: String!
    docket_time: DateTime!
  }

  input UpdateCitationInput {
    court_id: Int
    citation_number: String
    driver_name: String
    docket_time: DateTime
  }

  type Mutation {
    createCitation(input: CreateCitationInput!): Citation! @requireAuth
    updateCitation(id: Int!, input: UpdateCitationInput!): Citation!
      @requireAuth
    deleteCitation(id: Int!): Citation! @requireAuth
  }
`
