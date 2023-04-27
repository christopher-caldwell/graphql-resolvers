import express from 'express'
import { createSchema, createYoga } from 'graphql-yoga'

import { typeDefs } from './schema'
import { resolvers } from './resolvers'

export const schema = createSchema({
  typeDefs,
  resolvers,
})

const app = express()

const authCache = new Map<string, boolean>()
authCache.set('isAuthenticated', false)

const yoga = createYoga({
  schema,
  context: {
    authCache,
  },
})

app.use('/graphql', yoga)

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql')
})
