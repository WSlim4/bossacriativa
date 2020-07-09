'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GaleriaSchema extends Schema {
  up () {
    this.create('galerias', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('galerias')
  }
}

module.exports = GaleriaSchema
