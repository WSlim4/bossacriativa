'use strict'

const Factory = use('Factory')

class ShowSeeder {
  async run () {
    const show = await Factory
      .model('App/Models/Show')
      .createMany(4)
  }
}

module.exports = ShowSeeder
