'use strict'

const Factory = use('Factory')

class CourseSeeder {
  async run () {
    const course = await Factory
      .model('App/Models/Course')
      .create()
  }
}

module.exports = CourseSeeder
