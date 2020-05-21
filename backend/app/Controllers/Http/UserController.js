'use strict'
const User = use('App/Models/User')

class UserController {
    async store({ request }){
        const userData = await request.only([
            'username', 
            'password', 
            'email' 
        ])
    
        const user = await User.create(userData)
               
        return user
    }
    async edit({ request, params, auth }){

        if(auth.user.id == Number(params.id)){
            user.username = request.input('username')
            user.email = request.input('email')

            await user.save()
            return user

        } else{
            return "User not found"
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
    async show ({ auth, params }){
        const user = await auth.getUser()
        
        if(user){
            if(user.id !== Number(params.id)){
                return "Você não pode ver outro perfil"
            }
            return user
        } else{
            return "Você precisa estar logado"
        }
    }
        
    async index (){
        const users = await User.all()
        return users
    }
}

module.exports = UserController
