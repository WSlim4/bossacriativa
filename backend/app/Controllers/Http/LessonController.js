'use strict'
const Course = use('App/Models/Course')
const Lesson = use('App/Models/Lesson')
const Database = use('Database')

class LessonController {
   async store ({ request, params }){
        const course = await Course.find(params.id)
        let data = request.all()
       
        if(course){
            data["course_name"] = course["name"]
            data["course_id"] = course["id"]
            const lesson = Lesson.create(data)
            return lesson
        } else{
            return "Course not found"
        }
   }
   async show({ request, params }){
       let { page } = request.all()
       page = page ? page : 1
        const course = await Course.find(params.id)
        return await course.lessons().paginate(page ? page : 1, 4)
   }
   async index ({ request }){
       let { page } = request.all()
       page = page ? page : 1
        const lessons = Database.table('lessons')
        return await lessons.paginate(page ? page : 1, 4)
   }
}

module.exports = LessonController
