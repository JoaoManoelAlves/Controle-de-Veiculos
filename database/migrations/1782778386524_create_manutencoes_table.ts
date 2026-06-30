import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'manuntencaos'
  protected newTableName = 'manutencoes'

  async up() {
    this.schema.createTable(this.newTableName, (table) => {
      table.increments('id').notNullable()
      table.text('descricao').notNullable()
      table.date('data').notNullable()
      table.float('custo').notNullable()
      table
        .integer('veiculo_id')
        .unsigned()
        .references('id')
        .inTable('veiculos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
