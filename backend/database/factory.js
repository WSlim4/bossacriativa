'use strict'

const Factory = use('Factory')

    Factory.blueprint('App/Models/User', () => {
        return {
            username: 'bossacriativa',
            email: 'criativabossa@gmail.com',
            password: 'CRIAtiva20#',
            role: 'admin'
        }
    })
