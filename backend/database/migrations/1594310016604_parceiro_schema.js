'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ParceiroSchema extends Schema {
  up () {
    this.create('parceiros', (table) => {
      table.increments()
      table.string('img_url')

      table.integer('file_id').unsigned()
      table.foreign('file_id').references('id').inTable('files').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('parceiros')
  }
}

module.exports = ParceiroSchema
