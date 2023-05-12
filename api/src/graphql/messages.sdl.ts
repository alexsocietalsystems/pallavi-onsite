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
`
