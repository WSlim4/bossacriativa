'use strict'
const Lecture = use('App/Models/Lecture')
const Database = use('Database')

class LectureController {
  
  async store ({ request }) {
      const data = request.all()
      const lecture = await Lecture.create(data)
      
      return lecture
  }
  async index({ request }){
    const { page } = request.all()
    const lectures = Database.table('lectures')
    return await lectures.orderBy('id', 'asc').paginate(page ? page: 1, 30)
  }
  async edit({ request, params }){
    const { name, speaker, description, theme_color, introduction, category, about_speaker } = request.all()
    const lecture = await Lecture.findOrFail(params.id)
        lecture.name = name,
        lecture.speaker = speaker,
        lecture.description = description,
        lecture.theme_color = theme_color,
        lecture.category = category,
        lecture.about_speaker = about_speaker,
        lecture.introduction = introduction
        lecture.save()

    return lecture
    
  }
  async showLectures ({ request }){
    const { speaker } = request.all()
    const lectures = await Database.from('lectures').where('speaker', '=', speaker )
    return lectures
  }
  async show ({ params }){
    const lecture = await Lecture.findOrFail(params.id)

    return lecture.lessons().fetch()
  }

  async showLecture ({ params }){
    const lecture = await Lecture.findOrFail(params.id)
    return lecture
  }
  async lastLectures({ request }){
    let { page } = request.all()
    page = page ? page : 1
    const lectures  = Database.table('lectures')

    return await lectures.orderBy('id', 'desc').limit(12).paginate(page ? page : 1, 4)
  }
  async destroy({ params }){
    const lecture = await Lecture.findOrFail(params.id)
    lecture.delete()
    
    return "Palestra deletada"
  }
  async searchLectures({ request }){
    const { value } = request.all()
    const lectures  = await Database.table('lectures').where('speaker', '=', value).orWhere('category', '=', value)
    
    return await lectures
  }
}

module.exports = LectureController
