'use strict'
const Show = use('App/Models/Show')
const Database = use('Database')

class ShowController {
    async store({ request }){
        const showData = request.all()
        const show = await Show.create(showData)
        
        return show
    }
    async edit({ request, params }){
        const { name, artist, introduction, description, theme_color, category, img_url, file_id, show_url } = request.all()
        const show = await Show.findOrFail(params.id)
            show.name = name,
            show.artist = artist,
            show.show_url = show_url,
            show.introduction = introduction,
            show.description = description,
            show.category = category,
            show.theme_color = theme_color,
            show.img_url = img_url,
            show.file_id = file_id
            show.save()
        
        return show
    }
    async destroy({ params }){
        const show = await Show.findOrFail(params.id)
        show.delete()
        
        return "Show deletado"
    }
    /*Essa função é para a rota da página /apresentações */

    async index ({ request }){
        let { page } = request.all()
        page = page ? page : 1
        const shows = Database.table('shows')
        
        return await shows.paginate(page ? page : 1, 30)
    }
    /*Essa função é para o carrossel */

    async show({ request }){
        let { page } = request.all()
        page = page ? page : 1
        const shows  = Database.table('shows')

        return await shows.orderBy('id', 'desc').limit(24).paginate(page ? page : 1, 8)
    }
    async showOne({ params }){
        const show = await Show.findOrFail(params.id)
        
        return show
    }
    async showAll(){
        const shows = await Database.table('shows')
        var artists = []

        for(const show of shows){
            artists.push(show.artist)
        }
        return artists
    }
    async searchShows({ request }){
        const { value } = request.all()
        const shows  = await Database.table('shows').where('artist', '=', value).orWhere('category', '=', value)
        
        return await shows
    }
}

module.exports = ShowController
