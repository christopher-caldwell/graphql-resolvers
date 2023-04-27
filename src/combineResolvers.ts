import { Resolver, skip } from './utils'

/**
 * Left-first composition for methods of any type.
 *
 * @param {[Function]} ...funcs Resolver implementations.
 * @return {Promise}.
 */
export const combineResolvers = (...funcs: Resolver[]): Resolver => (...args) =>
  funcs.reduce(
    (prevPromise, resolver) => prevPromise.then((prev) => (prev === skip ? resolver(...args) : prev)),
    Promise.resolve<unknown>(undefined),
  )
