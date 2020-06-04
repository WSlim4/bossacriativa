'use strict'
const User = use('App/Models/User')

class UserController {
    async store({ request, response }){
        const userData = request.only([
            'username', 
            'password', 
            'email',
            'is_artist'
        ]) 
        try{
            const user = await User.create(userData)
            return user
        } catch(err){
            return "Não foi possível criar usuário"
        }
        
    }
    
    async edit({ request, params }){
        try{
            const user = await User.findOrFail(params.id)
            user.username = request.input('username')
            user.email = request.input('email')
            user.is_artist = request.input('is_artist')
            user.save()
            return user
        } catch(err){
            return "Algo deu errado"
        }
    }
    async destroy( { params, response } ){
        const user = await User.find(params.id)
        
        if(user){
            user.delete()

            return response.status(200).send({ error: { message: "Usuário deletado"}})

        } else{
            return response.status(404).send({ error: { message: "Usuário não encontrado"}})
        }
    }
    async show ({ auth }){
        try{
            const user = await auth.getUser()
            return user
        } catch(err){
            return response.status(err.status).send({ error: { message: "Você precisa ser um administrador"}})
        }
    }
        
    async index (){
        const users = await User.all()
        return users
    }
}

module.exports = UserController
