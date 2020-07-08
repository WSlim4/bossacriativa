'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LectureSchema extends Schema {
  up () {
    this.create('lectures', (table) => {
      table.increments()
      table.string('name')
      table.string('speaker')
      table.text('about_speaker')
      table.text('description')
      table.string('category')
      table.string('theme_color')
      table.text('introduction')
      table.string('img_url')

      table.integer('file_id').unsigned()
      table.foreign('file_id').references('id').inTable('files').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('lectures')
  }
}

module.exports = LectureSchema
