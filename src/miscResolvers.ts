import { Resolver, skip } from './utils'

/**
 * Logging resolver. Useful for debugging.
 */
export const loggingResolver: Resolver = (...args) => (console.log(args, 'Logging resolver'), skip)

/**
 * Combining resolver to error when context is no object.
 */
export const contextMustBeObject: Resolver = (_, __, context) =>
  context instanceof Object ? skip : new Error('Some functionality requires context to be an object.')
