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
}

module.exports = UserController
