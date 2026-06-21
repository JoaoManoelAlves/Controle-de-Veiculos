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
    'manutencaos.index': { paramsTuple?: []; params?: {} }
    'manutencaos.store': { paramsTuple: [ParamValue]; params: {'veiculoId': ParamValue} }
    'manutencaos.show': { paramsTuple: [ParamValue,ParamValue]; params: {'veiculoId': ParamValue,'id': ParamValue} }
    'manutencaos.update': { paramsTuple: [ParamValue,ParamValue]; params: {'veiculoId': ParamValue,'id': ParamValue} }
    'manutencaos.destroy': { paramsTuple: [ParamValue,ParamValue]; params: {'veiculoId': ParamValue,'id': ParamValue} }
  }
  POST: {
    'usuarios.store': { paramsTuple?: []; params?: {} }
    'access_tokens.store': { paramsTuple?: []; params?: {} }
    'veiculos.store': { paramsTuple?: []; params?: {} }
    'manutencaos.store': { paramsTuple: [ParamValue]; params: {'veiculoId': ParamValue} }
  }
  GET: {
    'usuarios.index': { paramsTuple?: []; params?: {} }
    'veiculos.index': { paramsTuple?: []; params?: {} }
    'veiculos.create': { paramsTuple?: []; params?: {} }
    'veiculos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'veiculos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'manutencaos.index': { paramsTuple?: []; params?: {} }
    'manutencaos.show': { paramsTuple: [ParamValue,ParamValue]; params: {'veiculoId': ParamValue,'id': ParamValue} }
  }
  HEAD: {
    'usuarios.index': { paramsTuple?: []; params?: {} }
    'veiculos.index': { paramsTuple?: []; params?: {} }
    'veiculos.create': { paramsTuple?: []; params?: {} }
    'veiculos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'veiculos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'manutencaos.index': { paramsTuple?: []; params?: {} }
    'manutencaos.show': { paramsTuple: [ParamValue,ParamValue]; params: {'veiculoId': ParamValue,'id': ParamValue} }
  }
  DELETE: {
    'usuarios.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'veiculos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'manutencaos.destroy': { paramsTuple: [ParamValue,ParamValue]; params: {'veiculoId': ParamValue,'id': ParamValue} }
  }
  PUT: {
    'veiculos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'manutencaos.update': { paramsTuple: [ParamValue,ParamValue]; params: {'veiculoId': ParamValue,'id': ParamValue} }
  }
  PATCH: {
    'veiculos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}