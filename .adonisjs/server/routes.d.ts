import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'usuarios.store': { paramsTuple?: []; params?: {} }
    'usuarios.index': { paramsTuple?: []; params?: {} }
    'usuarios.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'access_tokens.store': { paramsTuple?: []; params?: {} }
    'access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'veiculos.index': { paramsTuple?: []; params?: {} }
    'veiculos.create': { paramsTuple?: []; params?: {} }
    'veiculos.store': { paramsTuple?: []; params?: {} }
    'veiculos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'veiculos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'veiculos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'veiculos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'usuarios.store': { paramsTuple?: []; params?: {} }
    'access_tokens.store': { paramsTuple?: []; params?: {} }
    'veiculos.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'usuarios.index': { paramsTuple?: []; params?: {} }
    'veiculos.index': { paramsTuple?: []; params?: {} }
    'veiculos.create': { paramsTuple?: []; params?: {} }
    'veiculos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'veiculos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'usuarios.index': { paramsTuple?: []; params?: {} }
    'veiculos.index': { paramsTuple?: []; params?: {} }
    'veiculos.create': { paramsTuple?: []; params?: {} }
    'veiculos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'veiculos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'usuarios.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'veiculos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'veiculos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'veiculos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}