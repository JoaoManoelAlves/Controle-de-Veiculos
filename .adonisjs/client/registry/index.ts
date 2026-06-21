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
  'access_tokens.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['access_tokens.store']['types'],
  },
  'access_tokens.destroy': {
    methods: ["DELETE"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['access_tokens.destroy']['types'],
  },
  'veiculos.index': {
    methods: ["GET","HEAD"],
    pattern: '/veiculos',
    tokens: [{"old":"/veiculos","type":0,"val":"veiculos","end":""}],
    types: placeholder as Registry['veiculos.index']['types'],
  },
  'veiculos.create': {
    methods: ["GET","HEAD"],
    pattern: '/veiculos/create',
    tokens: [{"old":"/veiculos/create","type":0,"val":"veiculos","end":""},{"old":"/veiculos/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['veiculos.create']['types'],
  },
  'veiculos.store': {
    methods: ["POST"],
    pattern: '/veiculos',
    tokens: [{"old":"/veiculos","type":0,"val":"veiculos","end":""}],
    types: placeholder as Registry['veiculos.store']['types'],
  },
  'veiculos.show': {
    methods: ["GET","HEAD"],
    pattern: '/veiculos/:id',
    tokens: [{"old":"/veiculos/:id","type":0,"val":"veiculos","end":""},{"old":"/veiculos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['veiculos.show']['types'],
  },
  'veiculos.edit': {
    methods: ["GET","HEAD"],
    pattern: '/veiculos/:id/edit',
    tokens: [{"old":"/veiculos/:id/edit","type":0,"val":"veiculos","end":""},{"old":"/veiculos/:id/edit","type":1,"val":"id","end":""},{"old":"/veiculos/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['veiculos.edit']['types'],
  },
  'veiculos.update': {
    methods: ["PUT","PATCH"],
    pattern: '/veiculos/:id',
    tokens: [{"old":"/veiculos/:id","type":0,"val":"veiculos","end":""},{"old":"/veiculos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['veiculos.update']['types'],
  },
  'veiculos.destroy': {
    methods: ["DELETE"],
    pattern: '/veiculos/:id',
    tokens: [{"old":"/veiculos/:id","type":0,"val":"veiculos","end":""},{"old":"/veiculos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['veiculos.destroy']['types'],
  },
  'manutencaos.index': {
    methods: ["GET","HEAD"],
    pattern: '/manutencoes',
    tokens: [{"old":"/manutencoes","type":0,"val":"manutencoes","end":""}],
    types: placeholder as Registry['manutencaos.index']['types'],
  },
  'manutencaos.store': {
    methods: ["POST"],
    pattern: '/veiculos/:veiculoId/manutencoes',
    tokens: [{"old":"/veiculos/:veiculoId/manutencoes","type":0,"val":"veiculos","end":""},{"old":"/veiculos/:veiculoId/manutencoes","type":1,"val":"veiculoId","end":""},{"old":"/veiculos/:veiculoId/manutencoes","type":0,"val":"manutencoes","end":""}],
    types: placeholder as Registry['manutencaos.store']['types'],
  },
  'manutencaos.show': {
    methods: ["GET","HEAD"],
    pattern: '/veiculos/:veiculoId/manutencoes/:id',
    tokens: [{"old":"/veiculos/:veiculoId/manutencoes/:id","type":0,"val":"veiculos","end":""},{"old":"/veiculos/:veiculoId/manutencoes/:id","type":1,"val":"veiculoId","end":""},{"old":"/veiculos/:veiculoId/manutencoes/:id","type":0,"val":"manutencoes","end":""},{"old":"/veiculos/:veiculoId/manutencoes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['manutencaos.show']['types'],
  },
  'manutencaos.update': {
    methods: ["PUT"],
    pattern: '/veiculos/:veiculoId/manutencoes/:id',
    tokens: [{"old":"/veiculos/:veiculoId/manutencoes/:id","type":0,"val":"veiculos","end":""},{"old":"/veiculos/:veiculoId/manutencoes/:id","type":1,"val":"veiculoId","end":""},{"old":"/veiculos/:veiculoId/manutencoes/:id","type":0,"val":"manutencoes","end":""},{"old":"/veiculos/:veiculoId/manutencoes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['manutencaos.update']['types'],
  },
  'manutencaos.destroy': {
    methods: ["DELETE"],
    pattern: '/veiculos/:veiculoId/manutencoes/:id',
    tokens: [{"old":"/veiculos/:veiculoId/manutencoes/:id","type":0,"val":"veiculos","end":""},{"old":"/veiculos/:veiculoId/manutencoes/:id","type":1,"val":"veiculoId","end":""},{"old":"/veiculos/:veiculoId/manutencoes/:id","type":0,"val":"manutencoes","end":""},{"old":"/veiculos/:veiculoId/manutencoes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['manutencaos.destroy']['types'],
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
