import { Resolver } from './utils'

/**
 * Resolver implementation to resolve and array of resolvers into an array of results.
 *
 * @param {[Function]} resolvers Array of resolvers.
 * @return {Function} resolver.
 */
export const allResolvers =
  (resolvers: Resolver[]): Resolver =>
  (...args) =>
    Promise.all(resolvers.map((resolver) => resolver(...args)))
