import { Resolver } from './utils'

/**
 * Resolver composition based on the root argument.
 *
 * @param {[Function]} ...funcs Resolver implementations.
 * @return {Promise}.
 */
export const pipeResolvers = (...funcs: Resolver[]): Resolver => (...args) =>
  funcs.reduce(
    (prevPromise, resolver) =>
      prevPromise.then((root) => (root instanceof Error ? root : resolver(root, args[1], args[2], args[3]))),
    Promise.resolve(args[0]),
  )
