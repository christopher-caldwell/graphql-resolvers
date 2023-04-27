export type NoArgs = Record<string, never>

export interface Context {
  authCache: Map<string, boolean>
}

export type Resolver<TReturnType, TVariables = Record<string, never>, TParent = undefined> = (
  parent: TParent,
  variables: TVariables,
  context: Context,
) => Promise<TReturnType> | TReturnType

export interface Team {
  id: number
  location: string
  name: string
}

export interface MutationResult {
  message: string
}