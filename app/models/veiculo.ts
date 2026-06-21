import { VeiculoSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany, BelongsTo } from '@adonisjs/lucid/types/relations'
import Manuntencao from './manuntencao.ts'
import User from './user.ts'
export default class Veiculo extends VeiculoSchema {
  @hasMany(() => Manuntencao, {
    foreignKey: 'veiculoId',
  })
  declare manuntencaos: HasMany<typeof Manuntencao>
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
