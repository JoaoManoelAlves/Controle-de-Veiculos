import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'usuarios.store': { paramsTuple?: []; params?: {} }
    'usuarios.index': { paramsTuple?: []; params?: {} }
    'usuarios.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'usuarios.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'usuarios.index': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'usuarios.index': { paramsTuple?: []; params?: {} }
  }
  DELETE: {
    'usuarios.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}