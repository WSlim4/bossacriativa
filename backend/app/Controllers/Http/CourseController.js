'use strict'
const Course = use('App/Models/Course')

class CourseController {
    async store({ request }){
        const data = request.all()
        const course = Course.create(data)
        return course
    }
    async index(){
        const courses = await Course.all()
        return courses
    }
}

module.exports = CourseController
