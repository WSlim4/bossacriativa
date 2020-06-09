'use strict'
const User = use('App/Models/User')
const Database = use('Database')

class UserController {
    async store({ request }){
        const userData = request.only([
            'username', 
            'password', 
            'email',
            'role'
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
            user.role= request.input('role')
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
        
    async index ({ request }){
        const { page } = request.all()
        const users = Database.table('users')
        return users.paginate( page ? page : 1, 8)
    }
    async storeUser({ request }){
        const userData = request.only([
            'username', 
            'password', 
            'email'
        ]) 
        try{
            const user = await User.create(userData)
            return user
        } catch(err){
            return "Não foi possível criar usuário"
        }
    }
}

module.exports = UserController
