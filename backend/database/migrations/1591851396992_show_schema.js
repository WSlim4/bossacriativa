'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShowSchema extends Schema {
  up () {
    this.create('shows', (table) => {
      table.increments()
      table.string('name')
      table.string('artist')
      table.text('introduction')
      table.string('category')
      table.text('description')
      table.string('theme_color')
      table.string('img_url')
      table.string('show_url')

      table.integer('file_id').unsigned()
      table.foreign('file_id').references('id').inTable('files').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('shows')
  }
}

module.exports = ShowSchema
