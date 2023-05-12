import gql from "graphql-tag";
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
    getCitationByNumberAndDriverName(citationNumber: String!, driverName: String!): CitationResponse @requireAuth
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvY2l0YXRpb25zLnNkbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICB0eXBlIENpdGF0aW9uIHtcbiAgICBpZDogSW50IVxuICAgIGNvdXJ0X2lkOiBJbnQhXG4gICAgY291cnQ6IENvdXJ0IVxuICAgIGNpdGF0aW9uX251bWJlcjogU3RyaW5nIVxuICAgIGRyaXZlcl9uYW1lOiBTdHJpbmchXG4gICAgZG9ja2V0X3RpbWU6IERhdGVUaW1lIVxuICAgIGNyZWF0ZWRBdDogRGF0ZVRpbWUhXG4gIH1cblxuICB0eXBlIENpdGF0aW9uUmVzcG9uc2UgeyBcbiAgICBjaXRhdGlvbjogQ2l0YXRpb25cbiAgICBjaXRhdGlvbkV4aXN0czogQm9vbGVhbiFcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIGNpdGF0aW9uczogW0NpdGF0aW9uIV0hIEByZXF1aXJlQXV0aFxuICAgIGNpdGF0aW9uKGlkOiBJbnQhKTogQ2l0YXRpb24gQHJlcXVpcmVBdXRoXG4gICAgZ2V0Q2l0YXRpb25CeU51bWJlckFuZERyaXZlck5hbWUoY2l0YXRpb25OdW1iZXI6IFN0cmluZyEsIGRyaXZlck5hbWU6IFN0cmluZyEpOiBDaXRhdGlvblJlc3BvbnNlIEByZXF1aXJlQXV0aFxuICB9XG5cbiAgaW5wdXQgQ3JlYXRlQ2l0YXRpb25JbnB1dCB7XG4gICAgY291cnRfaWQ6IEludCFcbiAgICBjaXRhdGlvbl9udW1iZXI6IFN0cmluZyFcbiAgICBkcml2ZXJfbmFtZTogU3RyaW5nIVxuICAgIGRvY2tldF90aW1lOiBEYXRlVGltZSFcbiAgfVxuXG4gIGlucHV0IFVwZGF0ZUNpdGF0aW9uSW5wdXQge1xuICAgIGNvdXJ0X2lkOiBJbnRcbiAgICBjaXRhdGlvbl9udW1iZXI6IFN0cmluZ1xuICAgIGRyaXZlcl9uYW1lOiBTdHJpbmdcbiAgICBkb2NrZXRfdGltZTogRGF0ZVRpbWVcbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIGNyZWF0ZUNpdGF0aW9uKGlucHV0OiBDcmVhdGVDaXRhdGlvbklucHV0ISk6IENpdGF0aW9uISBAcmVxdWlyZUF1dGhcbiAgICB1cGRhdGVDaXRhdGlvbihpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZUNpdGF0aW9uSW5wdXQhKTogQ2l0YXRpb24hXG4gICAgICBAcmVxdWlyZUF1dGhcbiAgICBkZWxldGVDaXRhdGlvbihpZDogSW50ISk6IENpdGF0aW9uISBAcmVxdWlyZUF1dGhcbiAgfVxuYFxuIl0sIm1hcHBpbmdzIjoiT0FBc0JBLEdBQUc7QUFBekIsT0FBTyxNQUFNQyxNQUFNLEdBQUdELEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==