/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  usuarios: {
    store: typeof routes['usuarios.store']
    index: typeof routes['usuarios.index']
    destroy: typeof routes['usuarios.destroy']
  }
}
