/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'usuarios.store': {
    methods: ["POST"]
    pattern: '/register'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').createUserValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').createUserValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'usuarios.index': {
    methods: ["GET","HEAD"]
    pattern: '/usuarios'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['index']>>>
    }
  }
  'usuarios.destroy': {
    methods: ["DELETE"]
    pattern: '/usuarios/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['destroy']>>>
    }
  }
  'access_tokens.store': {
    methods: ["POST"]
    pattern: '/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'access_tokens.destroy': {
    methods: ["DELETE"]
    pattern: '/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
    }
  }
  'veiculos.index': {
    methods: ["GET","HEAD"]
    pattern: '/veiculos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['index']>>>
    }
  }
  'veiculos.create': {
    methods: ["GET","HEAD"]
    pattern: '/veiculos/create'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['create']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['create']>>>
    }
  }
  'veiculos.store': {
    methods: ["POST"]
    pattern: '/veiculos'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/veiculo').createVeiculoValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/veiculo').createVeiculoValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'veiculos.show': {
    methods: ["GET","HEAD"]
    pattern: '/veiculos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['show']>>>
    }
  }
  'veiculos.edit': {
    methods: ["GET","HEAD"]
    pattern: '/veiculos/:id/edit'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['edit']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['edit']>>>
    }
  }
  'veiculos.update': {
    methods: ["PUT","PATCH"]
    pattern: '/veiculos/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/veiculo').updateVeiculoValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/veiculo').updateVeiculoValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'veiculos.destroy': {
    methods: ["DELETE"]
    pattern: '/veiculos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/veiculos_controller').default['destroy']>>>
    }
  }
  'manutencaos.index': {
    methods: ["GET","HEAD"]
    pattern: '/manutencoes'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/manutencaos_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/manutencaos_controller').default['index']>>>
    }
  }
  'manutencaos.store': {
    methods: ["POST"]
    pattern: '/veiculos/:veiculoId/manutencoes'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/manutencao').createManutencaoValidator)>>
      paramsTuple: [ParamValue]
      params: { veiculoId: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/manutencao').createManutencaoValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/manutencaos_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/manutencaos_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'manutencaos.show': {
    methods: ["GET","HEAD"]
    pattern: '/veiculos/:veiculoId/manutencoes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue, ParamValue]
      params: { veiculoId: ParamValue; id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/manutencaos_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/manutencaos_controller').default['show']>>>
    }
  }
  'manutencaos.update': {
    methods: ["PUT"]
    pattern: '/veiculos/:veiculoId/manutencoes/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/manutencao').updateManutencaoValidator)>>
      paramsTuple: [ParamValue, ParamValue]
      params: { veiculoId: ParamValue; id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/manutencao').updateManutencaoValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/manutencaos_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/manutencaos_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'manutencaos.destroy': {
    methods: ["DELETE"]
    pattern: '/veiculos/:veiculoId/manutencoes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue, ParamValue]
      params: { veiculoId: ParamValue; id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/manutencaos_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/manutencaos_controller').default['destroy']>>>
    }
  }
}
