import { GraphQLError } from 'graphql'

import { combineResolvers, skip } from '../../../src'

import { Resolver, Team, MutationResult } from './types'
import { teams } from './data'

const hasAccess: Resolver<null | boolean | undefined> = async (_, __, { authCache }) => {
  const isAuthenticated = authCache.get('isAuthenticated')
  // return undefined to `skip` or to allow the next resolver to resolve
  if (isAuthenticated) return skip
  // no access
  return new GraphQLError('Not authenticated')
}

const loginResolver: Resolver<MutationResult> = (_, __, { authCache }) => {
  authCache.set('isAuthenticated', true)
  return {
    message: 'Done',
  }
}

const logoutResolver: Resolver<MutationResult> = (_, __, { authCache }) => {
  authCache.set('isAuthenticated', false)
  return {
    message: 'Done',
  }
}

const teamsResolver: Resolver<Team[]> = () => {
  return teams
}

export const resolvers = {
  Query: {
    // teams is protected, and shouldn't be accessed unless authenticated
    teams: combineResolvers(hasAccess, teamsResolver),
  },
  Mutation: {
    login: loginResolver,
    logout: logoutResolver,
  },
}

export * from './types'
