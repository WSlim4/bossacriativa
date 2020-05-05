'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CourseSchema extends Schema {
  up () {
    this.create('courses', (table) => {
      table.increments()
      table.string('type')
      table.string('name')
      table.string('duration')
      
      table.timestamps()
    })
  }

  down () {
    this.drop('courses')
  }
}

module.exports = CourseSchema
