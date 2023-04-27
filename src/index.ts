import { allResolvers } from './allResolvers'
import { combineResolvers } from './combineResolvers'
import { pipeResolvers } from './pipeResolvers'

export { skip } from './utils'
export { allResolvers } from './allResolvers'
export { pipeResolvers } from './pipeResolvers'
export { combineResolvers } from './combineResolvers'

export { resolveDependees, resolveDependee, isDependee } from './dependingResolvers'

export const all = allResolvers
export const pipe = pipeResolvers
export const combine = combineResolvers
