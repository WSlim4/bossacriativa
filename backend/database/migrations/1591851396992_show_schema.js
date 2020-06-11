'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShowSchema extends Schema {
  up () {
    this.create('shows', (table) => {
      table.increments()
      table.string('title')
      table.string('artist')
      table.string('url')
      table.timestamps()
    })
  }

  down () {
    this.drop('shows')
  }
}

module.exports = ShowSchema
