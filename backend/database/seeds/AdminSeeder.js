'use strict'

const Factory = use('Factory')

class AdminSeeder {
  async run () {
    const user = await Factory
      .model('App/Models/User')
      .create()
  }
}

module.exports = AdminSeeder
