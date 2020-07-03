'use strict'
const User = use('App/Models/User')

class SessionController {
    async store({ request, auth }){
        const { email, password } = request.all()
        const user = await User.findBy('email', email)

        const token = await auth
            .withRefreshToken()
            .attempt(email,password)


        return { 'token': token, 'user': user }
    }
    
    async destroy({ auth, response }){
        const user = await auth.getUser()

        await auth
            .authenticator('jwt')
            .revokeTokensForUser(user)
        
        return response.removeHeader()
            
    }
}

module.exports = SessionController
