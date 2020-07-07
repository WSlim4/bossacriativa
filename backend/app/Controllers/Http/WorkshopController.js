'use strict'
const Workshop = use('App/Models/Workshop')
const Database = use('Database')

class WorkshopController {
    
    async store({ request }){
        const data = request.all()
        const workshop = await Workshop.create(data)
        return workshop
    }

    async edit({ request, params, response }){
        const { category, name, artist_name, description, about_artist, theme_color, img_url } = request.all()

        try{
            let workshop = await Workshop.findOrFail(params.id)
            workshop.category = category
            workshop.name = name
            workshop.artist_name = artist_name
            workshop.description = description
            workshop.about_artist = about_artist
            workshop.theme_color = theme_color 
            workshop.img_url = img_url
            workshop.save()
            return workshop
        } catch(err){
            return response.err
        }
    }
    
    async index ({ request }){
        const { page } = request.all()
        const workshops = Database.table('workshops')
        return await workshops.orderBy('id', 'asc').paginate(page ? page: 1, 30)
    }

    async destroy({ params, response }){
        const workshop = await Workshop.find(params.id)
        try{
            workshop.delete()
            return response.status(200).send({ message: "Oficina deletada"})
        } catch(err){
            return response.status(err.status).send({ error : { message: "Oficina não encontrada" }})
        }
    }

    async showWorkshops ({ request }){
        const { artist_name } = request.all()
        const workshops = await Database.from('workshops').where('artist_name', '=', artist_name )
        return workshops
    }

    async showInfos ({ params }){
        const workshop = await Workshop.findOrFail(params.id)

        return workshop
    }

    async show({ params }){
        const workshop = await Workshop.findOrFail(params.id)

        return workshop.lessons().fetch()

    }
    
    async lastWorkshops({ request }){
        let { page } = request.all()
        page = page ? page : 1
        const lectures  = Database.table('workshops')

        return await lectures.orderBy('id', 'desc').limit(12).paginate(page ? page : 1, 4)
    }

    async searchWorkshops({ request }){
        const { value } = request.all()
        const workshops  = await Database.table('workshops').where('artist_name', '=', value).orWhere('category', '=', value)
        
        return await workshops
    }
}

module.exports = WorkshopController
