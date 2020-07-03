'use strict'
const User = use('App/Models/User')
const Profile = use('App/Models/Profile')

class ProfileController {
    async store ({ request, auth }){
        const user = await auth.getUser()
        if(user){
            let data = await request.only(['fullname', 'birthday'])
            data["user_id"] = user.id
            data["user_email"] = user.email
            const profile = await Profile.create(data)
            
            return user.profile().fetch()
        } else{
            return "Você precisa estar logado"
        }
    }
}

module.exports = ProfileController
