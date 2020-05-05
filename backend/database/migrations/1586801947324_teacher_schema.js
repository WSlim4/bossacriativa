'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeacherSchema extends Schema {
  up () {
    this.create('teachers', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('institution').nullable()
      table.string('discipline').nullable()
      
      table.timestamps()
    })
  }

  down () {
    this.drop('teachers')
  }
}

module.exports = TeacherSchema
