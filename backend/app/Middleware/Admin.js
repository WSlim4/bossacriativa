'use strict'


class Admin {
  async handle ({ request, auth}, next, response ) {
    const user = await auth.getUser()
    
    if(user.role != "admin"){
      throw new Error('Você não tem permissão')
    }
    await next()
  }
}

module.exports = Admin
