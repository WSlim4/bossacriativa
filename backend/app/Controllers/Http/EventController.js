'use strict'
const Event = use('App/Models/Event')
const Database = use('Database')

class EventController {
    
    async store({ request }){
        const eventData = request.only([
            'artist',
            'data',
            'address',
            'img'
        ])
        const event = await Event.create(eventData)
        
        return event
    }
    async edit({ request, params }){
        const { data, address, img, artist } = request.all()
        const event = await Event.findOrFail(params.id)
            event.address = address,
            event.data = data,
            event.img = img,
            event.artist = artist
            event.save()
        
        return event
        
    }
    async destroy({ params }){
        const event = await Event.findOrFail(params.id)
        event.delete()
        
        return "Evento deletado"
    }
    async index ({ request }){
        let { page } = request.all()
        page = page ? page : 1
        const events = Database.table('events')
        
        return await events.paginate(page ? page : 1, 8)
    }
    async show(){
        const events = await Database.table('events')
                         .orderBy('id', 'desc')
                         .limit(4)
         return events
    }
}

module.exports = EventController
