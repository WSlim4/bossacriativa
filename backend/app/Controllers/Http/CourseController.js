'use strict'
const Course = use('App/Models/Course')

class CourseController {
    async store({ request }){
        const data = request.all()
        const course = Course.create(data)
        return course
    }
    async edit({ request, params, response }){
        const { type, name, duration } = request.all()

        try{
            let course = await Course.findOrFail(params.id)
            course.type = type
            course.name = name
            course.duration = duration
            course.save()
            return course
        } catch(err){
            return response.status(err.status).send({ error: { message: "Curso não encontrado"}})
        }

    }

    async index(){
        const courses = await Course.all()
        return courses
    }
    async destroy({ params, response }){
        const course = await Course.find(params.id)
        try{
            course.delete()
            return response.status(200).send({ message: "Curso deletado"})
        } catch(err){
            return response.status(err.status).send({ error : { message: "Curso não encontrado" }})
        }
    }
}

module.exports = CourseController
