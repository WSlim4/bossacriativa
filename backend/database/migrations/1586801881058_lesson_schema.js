'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LessonSchema extends Schema {
  up () {
    this.create('lessons', (table) => {
      table.increments()
      table.string('title')
      table.string('description')
      table.string('course_name')
      table.string('url')
      table.integer('course_id').notNullable().unsigned()
      table.foreign('course_id').references('id').inTable('courses').onDelete('cascade')

      table.timestamps()
    })
  }

  down () {
    this.drop('lessons')
  }
}

module.exports = LessonSchema
