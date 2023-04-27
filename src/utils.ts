/**
 * undefined wrap-up. Useful for opt-out of resolvers
 * with a function style.
 */
export const skip = undefined

/**
 * Composable next tick simulation.
 */
export const nextTick = <TValue>(value: TValue) => new Promise((resolve) => setTimeout(() => resolve(value), 0))

// export interface Info {
//   fieldName: string
//   parentType: {
//     _fields: Record<string, any>
//     name: string
//   }
// }
export type StrictResolver<TRoot, TArgs, TContext, TReturn> = (
  root: TRoot,
  args: TArgs,
  context: TContext,
) => TReturn | Promise<TReturn>

export type Resolver = (root: any, args: any, context: any, info: any) => unknown | Promise<unknown> | undefined | void
