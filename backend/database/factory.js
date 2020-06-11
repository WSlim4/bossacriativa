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

    Factory.blueprint('App/Models/Course', () => {
        return {
            type: 'Cordas',
            name: 'Curso de violão',
            duration: '12:00'
        }
    
    })
    Factory.blueprint('App/Models/Lesson', () => {
        return {
            title: 'Aula de introdução',
            description: 'Aula introdutória do curso de violão',
            course_name: 'Curso de violão',
            course_id: 1,
            url: 'https://www.youtube.com/watch?v=9kcK778qbcM'
        }
    })
    Factory.blueprint('App/Models/Show', () => {
        return {
            title: 'Djonga ao vivo',
            artist: 'Djonga',
            url: 'www.youtube.com/watch?v=q2RBdzw0sN8'
        }
    })
    Factory.blueprint('App/Models/Event', () => {
        return {
            data: '05/08/2020',
            artist: 'The Maine',
            address: 'Circo Voador',
            img: 'https://1.bp.blogspot.com/-LHYY4Rk1Zso/WW4_tFj50iI/AAAAAAAAAkg/MYWxo6YSKcQQut6rhhVNcRdVsLHZ3eH4ACLcBGAs/s1600/The%2BMaine%2B%25282%2529.jpg'
        }
    })

