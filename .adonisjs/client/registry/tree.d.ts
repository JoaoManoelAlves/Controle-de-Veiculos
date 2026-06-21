/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  usuarios: {
    store: typeof routes['usuarios.store']
    index: typeof routes['usuarios.index']
    destroy: typeof routes['usuarios.destroy']
  }
  accessTokens: {
    store: typeof routes['access_tokens.store']
    destroy: typeof routes['access_tokens.destroy']
  }
  veiculos: {
    index: typeof routes['veiculos.index']
    create: typeof routes['veiculos.create']
    store: typeof routes['veiculos.store']
    show: typeof routes['veiculos.show']
    edit: typeof routes['veiculos.edit']
    update: typeof routes['veiculos.update']
    destroy: typeof routes['veiculos.destroy']
  }
  manutencaos: {
    index: typeof routes['manutencaos.index']
    store: typeof routes['manutencaos.store']
    show: typeof routes['manutencaos.show']
    update: typeof routes['manutencaos.update']
    destroy: typeof routes['manutencaos.destroy']
  }
}
