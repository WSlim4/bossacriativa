'use strict'

const Workshop = use('App/Models/Workshop')
const Lesson = use('App/Models/Lesson')
const Lecture = use('App/Models/Lecture')
const Database = use('Database')

class LessonController {
   async workshopLessonStore ({ request, params }){
        const workshop = await Workshop.find(params.id)
        let data = request.all()
       
        if(workshop){
            data["course_name"] = workshop["name"]
            data["workshop_id"] = workshop["id"]
            const lesson = Lesson.create(data)
            return lesson
        } else{
            return "Erro ao criar aula"
        }
   }

   async lectureLessonStore ({ request, params }){
    const lecture = await Lecture.find(params.id)
    let data = request.all()
   
    if(lecture){
        data["course_name"] = lecture["name"]
        data["lecture_id"] = lecture["id"]
        const lesson = await Lesson.create(data)
        return lesson
    } else{
        return "Erro ao criar aula"
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
   async destroy ({ params }){
        const lesson = await Lesson.findOrFail(params.id)

        return lesson.delete()
    }
}

module.exports = LessonController
