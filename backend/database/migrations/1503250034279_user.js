'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('fullname', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('age').notNullable()
      table.string('city').notNullable()
      table.string('uf').notNullable()
      table.string('password', 60).notNullable()
      table.string('how').notNullable()
      table.text('description').nullable()
      
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
