'use strict'
const News = use('App/Models/News')
const Database = use('Database')

class NewsController {
    async store({ request }){
        const newsData = request.only([
            'title',
            'introduction',
            'description',
            'img_url'
        ])

        const news = await News.create(newsData)
        
        return news
    }
    async edit({ request, params }){
        const { title, description, img_url } = request.all()
        const news = await News.findOrFail(params.id)
            news.title = title,
            news.description = description,
            news.img_url = img_url
            news.save()
        
        return news
        
    }
    async destroy({ params }){
        const news = await News.findOrFail(params.id)
        news.delete()
        
        return "Notícia deletada"
    }
    async index ({ request }){
        let { page } = request.all()
        page = page ? page : 1
        const news = Database.table('news')
        
        return await news.paginate(page ? page : 1, 6)
    }

    async show ({ params }){
        const news = await News.findOrFail(params.id)
        return news
    }

    async lastNews({ request }){
        let { page } = request.all()
        page = page ? page : 1
        const news = Database.table('news').limit(2).orderBy('id', 'desc')
        
        return await news
    }
    async searchNews({ request }){
        const { value } = request.all()
        const news  = await Database.table('news').where('title', '=', value)
        
        return await news
    }
}

module.exports = NewsController
