'use strict'
const Banner = use('App/Models/Banner')
const Database = use('Database')

class BannerController {
  
  async index () {
    const banners = Database.table('banners')

    return await banners.limit(4).orderBy('id', 'desc')
  }

  async paginateBanners ({ request }){
    let { page } = request.all()
    page = page ? page : 1
    const banners = Database.table('banners')
    
    return await banners.paginate(page ? page : 1, 10)
  }

  async store ({ request }) {
    const data = request.all()
    const banner = await Banner.create(data)

    return banner
  }
  
  async show ({ params }) {
  }

  async edit ({ params, request }) {
    const { title, introduction, img_url, file_id, news_id } = request.all()
    const banner = await Banner.findOrFail(params.id)
      banner.title = title,
      banner.introduction = introduction,
      banner.img_url = img_url,
      banner.file_id = file_id,
      banner.news_id = news_id
      banner.save()

    return banner

  }

  async destroy ({ params }) {
    const banner = await Banner.findOrFail(params.id)
    return banner.delete()
  }
}

module.exports = BannerController
