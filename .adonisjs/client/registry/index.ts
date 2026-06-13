/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'usuarios.store': {
    methods: ["POST"],
    pattern: '/register',
    tokens: [{"old":"/register","type":0,"val":"register","end":""}],
    types: placeholder as Registry['usuarios.store']['types'],
  },
  'usuarios.index': {
    methods: ["GET","HEAD"],
    pattern: '/usuarios',
    tokens: [{"old":"/usuarios","type":0,"val":"usuarios","end":""}],
    types: placeholder as Registry['usuarios.index']['types'],
  },
  'usuarios.destroy': {
    methods: ["DELETE"],
    pattern: '/usuarios/:id',
    tokens: [{"old":"/usuarios/:id","type":0,"val":"usuarios","end":""},{"old":"/usuarios/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['usuarios.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
