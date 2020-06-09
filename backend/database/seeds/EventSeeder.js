'use strict'

const Factory = use('Factory')

class EventSeeder {
  async run () {
    const event = await Factory
      .model('App/Models/Event')
      .createMany(4)
  }
}

module.exports = EventSeeder
