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
   async show(){
       const lessons = await Database.table('lessons')
                        .orderBy('id', 'desc')
                        .limit(4)
        return lessons
   }
   async index ({ request }){
       let { page } = request.all()
       page = page ? page : 1
       const lessons = Database.table('lessons')
       
       return await lessons.paginate(page ? page : 1, 8)
   }
}

module.exports = LessonController
