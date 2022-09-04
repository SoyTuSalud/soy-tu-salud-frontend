import { resolversUsuario } from './user/resolvers'
import { typesUsuario } from './user/types'
import { resolversFilantropos } from './domain/filantropos/resolvers'
import { typesFilantropo } from './domain/filantropos/types'
import { typesServicios } from './servicios/types'
import { resolversServicios } from './servicios/resolvers'
import { resolversServiciosCodes } from './servicesCodes/resolvers'
import { typesServiciosCodes } from './servicesCodes/types'

export const resolvers = [
  resolversUsuario,
  resolversFilantropos,
  resolversServicios,
  resolversServiciosCodes,
]
export const typeDefs = [
  typesUsuario,
  typesFilantropo,
  typesServicios,
  typesServiciosCodes,
]
