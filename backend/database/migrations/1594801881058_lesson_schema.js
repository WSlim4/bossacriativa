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
      table.integer('workshop_id').unsigned()
      table.foreign('workshop_id').references('id').inTable('workshops').onDelete('cascade')

      table.integer('lecture_id').unsigned()
      table.foreign('lecture_id').references('id').inTable('lectures').onDelete('cascade')

      table.timestamps()
    })
  }

  down () {
    this.drop('lessons')
  }
}

module.exports = LessonSchema
