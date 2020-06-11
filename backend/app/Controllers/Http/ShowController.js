'use strict'
const Show = use('App/Models/Show')
const Database = use('Database')

class ShowController {
    async store({ request }){
        const showData = request.only([
            'title',
            'artist',
            'url'
        ])
        const show = await Show.create(showData)
        
        return show
    }
    async edit({ request, params }){
        const { title, url, artist } = request.all()
        const event = await Show.findOrFail(params.id)
            event.title = title,
            event.url = url,
            event.artist = artist
            event.save()
        
        return event
        
    }
    async destroy({ params }){
        const show = await Show.findOrFail(params.id)
        show.delete()
        
        return "Show deletado"
    }
    async index ({ request }){
        let { page } = request.all()
        page = page ? page : 1
        const shows = Database.table('shows')
        
        return await shows.paginate(page ? page : 1, 8)
    }
    async show(){
        const shows = await Database.table('shows')
                         .orderBy('id', 'desc')
                         .limit(4)
         return shows
    }
}

module.exports = ShowController
