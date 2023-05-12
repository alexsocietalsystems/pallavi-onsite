import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvY291cnRzLnNkbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICB0eXBlIENvdXJ0IHtcbiAgICBpZDogSW50IVxuICAgIHN0cmVldF9hZGRyZXNzOiBTdHJpbmchXG4gICAgY291cnRfbmFtZTogU3RyaW5nIVxuICAgIGNpdGF0aW9uczogW0NpdGF0aW9uXSFcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgY291cnRzOiBbQ291cnQhXSEgQHJlcXVpcmVBdXRoXG4gICAgY291cnQoaWQ6IEludCEpOiBDb3VydCBAcmVxdWlyZUF1dGhcbiAgfVxuXG4gIGlucHV0IENyZWF0ZUNvdXJ0SW5wdXQge1xuICAgIHN0cmVldF9hZGRyZXNzOiBTdHJpbmchXG4gICAgY291cnRfbmFtZTogU3RyaW5nIVxuICB9XG5cbiAgaW5wdXQgVXBkYXRlQ291cnRJbnB1dCB7XG4gICAgc3RyZWV0X2FkZHJlc3M6IFN0cmluZ1xuICAgIGNvdXJ0X25hbWU6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlQ291cnQoaW5wdXQ6IENyZWF0ZUNvdXJ0SW5wdXQhKTogQ291cnQhIEByZXF1aXJlQXV0aFxuICAgIHVwZGF0ZUNvdXJ0KGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlQ291cnRJbnB1dCEpOiBDb3VydCEgQHJlcXVpcmVBdXRoXG4gICAgZGVsZXRlQ291cnQoaWQ6IEludCEpOiBDb3VydCEgQHJlcXVpcmVBdXRoXG4gIH1cbmBcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyJ9