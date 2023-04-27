export const typeDefs = `#graphql

  type Team {
    id: Int!
    name: String!
    location: String!
  }

  type MutationResult {
    message: String!
  }

  type Query {
    teams: [Team!]!
  }
  type Mutation {
    login: MutationResult!
    logout: MutationResult!
  }

`
