import gql from "graphql-tag";
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
    createCitizen(input: CreateCitizenInput!): Citizen! @requireAuth
    updateCitizen(id: Int!, input: UpdateCitizenInput!): Citizen! @requireAuth
    deleteCitizen(id: Int!): Citizen! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvY2l0aXplbnMuc2RsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgQ2l0aXplbiB7XG4gICAgaWQ6IEludCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBwaG9uZU51bWJlcjogU3RyaW5nIVxuICAgIGNpdGF0aW9uX2lkOiBJbnQhXG4gICAgY2l0YXRpb246IENpdGF0aW9uIVxuICAgIG5vdGlmaWNhdGlvbnM6IEJvb2xlYW4hXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBjaXRpemVuczogW0NpdGl6ZW4hXSEgQHJlcXVpcmVBdXRoXG4gICAgY2l0aXplbihpZDogSW50ISk6IENpdGl6ZW4gQHJlcXVpcmVBdXRoXG4gIH1cblxuICBpbnB1dCBDcmVhdGVDaXRpemVuSW5wdXQge1xuICAgIG5hbWU6IFN0cmluZyFcbiAgICBlbWFpbDogU3RyaW5nIVxuICAgIHBob25lTnVtYmVyOiBTdHJpbmchXG4gICAgY2l0YXRpb25faWQ6IEludCFcbiAgICBub3RpZmljYXRpb25zOiBCb29sZWFuIVxuICB9XG5cbiAgaW5wdXQgVXBkYXRlQ2l0aXplbklucHV0IHtcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBlbWFpbDogU3RyaW5nXG4gICAgcGhvbmVOdW1iZXI6IFN0cmluZ1xuICAgIGNpdGF0aW9uX2lkOiBJbnRcbiAgICBub3RpZmljYXRpb25zOiBCb29sZWFuXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBjcmVhdGVDaXRpemVuKGlucHV0OiBDcmVhdGVDaXRpemVuSW5wdXQhKTogQ2l0aXplbiEgQHJlcXVpcmVBdXRoXG4gICAgdXBkYXRlQ2l0aXplbihpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZUNpdGl6ZW5JbnB1dCEpOiBDaXRpemVuISBAcmVxdWlyZUF1dGhcbiAgICBkZWxldGVDaXRpemVuKGlkOiBJbnQhKTogQ2l0aXplbiEgQHJlcXVpcmVBdXRoXG4gIH1cbmBcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==