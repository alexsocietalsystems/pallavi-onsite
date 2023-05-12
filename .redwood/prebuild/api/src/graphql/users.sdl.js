import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvdXNlcnMuc2RsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgVXNlciB7XG4gICAgaWQ6IEludCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBwaG9uZU51bWJlcjogU3RyaW5nIVxuICAgIGNpdGF0aW9uX2lkOiBJbnQhXG4gICAgY2l0YXRpb246IENpdGF0aW9uIVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgdXNlcnM6IFtVc2VyIV0hIEByZXF1aXJlQXV0aFxuICAgIHVzZXIoaWQ6IEludCEpOiBVc2VyIEByZXF1aXJlQXV0aFxuICB9XG5cbiAgaW5wdXQgQ3JlYXRlVXNlcklucHV0IHtcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBwaG9uZU51bWJlcjogU3RyaW5nIVxuICAgIGNpdGF0aW9uX2lkOiBJbnQhXG4gIH1cblxuICBpbnB1dCBVcGRhdGVVc2VySW5wdXQge1xuICAgIG5hbWU6IFN0cmluZ1xuICAgIGVtYWlsOiBTdHJpbmdcbiAgICBwaG9uZU51bWJlcjogU3RyaW5nXG4gICAgY2l0YXRpb25faWQ6IEludFxuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlVXNlcihpbnB1dDogQ3JlYXRlVXNlcklucHV0ISk6IFVzZXIhIEByZXF1aXJlQXV0aFxuICAgIHVwZGF0ZVVzZXIoaWQ6IEludCEsIGlucHV0OiBVcGRhdGVVc2VySW5wdXQhKTogVXNlciEgQHJlcXVpcmVBdXRoXG4gICAgZGVsZXRlVXNlcihpZDogSW50ISk6IFVzZXIhIEByZXF1aXJlQXV0aFxuICB9XG5gXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=