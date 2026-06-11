import { ManuntencaoSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import Veiculos from './veiculo.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
export default class Manuntencao extends ManuntencaoSchema {
  @belongsTo(() => Veiculos)
  declare veiculo: BelongsTo<typeof Veiculos>
}
