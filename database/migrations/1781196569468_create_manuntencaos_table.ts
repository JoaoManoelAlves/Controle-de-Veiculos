import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'manuntencaos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('descricao').notNullable()
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
