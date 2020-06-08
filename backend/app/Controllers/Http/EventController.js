'use strict'
const Event = use('App/Models/Event')
const Database = use('Database')

class EventController {
    
    async store({ request }){
        const eventData = request.only([
            'name',
            'title',
            'description',
            'url',
            'artist'
        ])
        const event = await Event.create(eventData)
        
        return event
    }
    async edit({ request, params }){
        const { name, title, description, url, artist } = request.all()
        const event = Event.FindOrFail(params.id)
            event.name = name
            event.title = title,
            event.description = description,
            event.url = url,
            event.artist = artist
            event.save()
        
        return event
        
    }
    async destroy({ params }){
        const event = await Event.FindOrFail(params.id)
        event.delete()
        
        return "Evento deletado"
    }
}

module.exports = EventController
