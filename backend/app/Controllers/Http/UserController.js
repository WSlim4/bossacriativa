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
    async edit({ request, params }){
        const user = await User.find(params.id)

        if(user){
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

            return response.status(200).send({ error: { message: "User successfully deleted!"}})

        } else{
            return response.status(404).send({ error: { message: "Cannot find user"}})
        }
    }
}

module.exports = UserController
