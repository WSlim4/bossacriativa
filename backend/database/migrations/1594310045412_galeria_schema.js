'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GaleriaSchema extends Schema {
  up () {
    this.create('galerias', (table) => {
      table.increments()
      table.string('img_url')

      table.integer('file_id').unsigned()
      table.foreign('file_id').references('id').inTable('files').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('galerias')
  }
}

module.exports = GaleriaSchema
