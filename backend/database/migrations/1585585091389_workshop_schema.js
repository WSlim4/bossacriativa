'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WorkshopSchema extends Schema {
  up () {
    this.create('workshops', (table) => {
      table.increments()
      table.string('name')
      table.string('artist_name')
      table.string('about_artist')
      table.string('description')
      table.string('category')
      table.string('theme_color')
      table.string('img_url')
      
      table.integer('file_id').unsigned()
      table.foreign('file_id').references('id').inTable('files').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('workshops')
  }
}

module.exports = WorkshopSchema
