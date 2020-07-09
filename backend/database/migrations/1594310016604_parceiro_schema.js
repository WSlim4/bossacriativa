'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ParceiroSchema extends Schema {
  up () {
    this.create('parceiros', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('parceiros')
  }
}

module.exports = ParceiroSchema
