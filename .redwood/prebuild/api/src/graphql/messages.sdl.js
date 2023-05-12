import gql from "graphql-tag";
export const schema = gql`
  type Message {
    id: Int!
    messageTemplate: String!
    timeUnit: String!
    countBefore: Int!
    createdAt: DateTime!
  }

  type Query {
    messages: [Message!]! @requireAuth
    message(id: Int!): Message @requireAuth
  }

  input CreateMessageInput {
    messageTemplate: String!
    timeUnit: String!
    countBefore: Int!
  }

  input UpdateMessageInput {
    messageTemplate: String
    timeUnit: String
    countBefore: Int
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message! @requireAuth
    updateMessage(id: Int!, input: UpdateMessageInput!): Message! @requireAuth
    deleteMessage(id: Int!): Message! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvbWVzc2FnZXMuc2RsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgTWVzc2FnZSB7XG4gICAgaWQ6IEludCFcbiAgICBtZXNzYWdlVGVtcGxhdGU6IFN0cmluZyFcbiAgICB0aW1lVW5pdDogU3RyaW5nIVxuICAgIGNvdW50QmVmb3JlOiBJbnQhXG4gICAgY3JlYXRlZEF0OiBEYXRlVGltZSFcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIG1lc3NhZ2VzOiBbTWVzc2FnZSFdISBAcmVxdWlyZUF1dGhcbiAgICBtZXNzYWdlKGlkOiBJbnQhKTogTWVzc2FnZSBAcmVxdWlyZUF1dGhcbiAgfVxuXG4gIGlucHV0IENyZWF0ZU1lc3NhZ2VJbnB1dCB7XG4gICAgbWVzc2FnZVRlbXBsYXRlOiBTdHJpbmchXG4gICAgdGltZVVuaXQ6IFN0cmluZyFcbiAgICBjb3VudEJlZm9yZTogSW50IVxuICB9XG5cbiAgaW5wdXQgVXBkYXRlTWVzc2FnZUlucHV0IHtcbiAgICBtZXNzYWdlVGVtcGxhdGU6IFN0cmluZ1xuICAgIHRpbWVVbml0OiBTdHJpbmdcbiAgICBjb3VudEJlZm9yZTogSW50XG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBjcmVhdGVNZXNzYWdlKGlucHV0OiBDcmVhdGVNZXNzYWdlSW5wdXQhKTogTWVzc2FnZSEgQHJlcXVpcmVBdXRoXG4gICAgdXBkYXRlTWVzc2FnZShpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZU1lc3NhZ2VJbnB1dCEpOiBNZXNzYWdlISBAcmVxdWlyZUF1dGhcbiAgICBkZWxldGVNZXNzYWdlKGlkOiBJbnQhKTogTWVzc2FnZSEgQHJlcXVpcmVBdXRoXG4gIH1cbmBcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==