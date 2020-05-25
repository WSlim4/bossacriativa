'use strict'

class SessionController {
    async store({ request, auth }){
        const { email, password } = request.all()

        const token = await auth
            .withRefreshToken()
            .attempt(email,password)

        return token
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
