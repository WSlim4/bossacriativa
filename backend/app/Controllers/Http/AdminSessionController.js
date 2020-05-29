'use strict'
const User = use('App/Models/User')

class AdminSessionController {
    async store({ request, auth, response }){
        const { email, password } = request.all()
        
        const user = await User.findByOrFail('email', email)
        if(user.is_admin === true){
            const token = await auth
            .withRefreshToken()
            .attempt(email,password)
            
            return token
        } else{
            return response.status(401).send({ error: { message: "Você não tem permissão"}})
        } 
    }
}

module.exports = AdminSessionController
