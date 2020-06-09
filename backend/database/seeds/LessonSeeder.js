'use strict'

const Factory = use('Factory')

class LessonSeeder {
  async run () {
    const lesson = await Factory
      .model('App/Models/Lesson')
      .createMany(24)
  }
}


module.exports = LessonSeeder
