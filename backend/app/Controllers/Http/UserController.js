'use strict'
const User = use('App/Models/User')
const Student = use('App/Models/Student')
const Teacher = use('App/Models/Teacher')
const Musician = use('App/Models/Teacher')

class UserController {
    async store({ request }){
        const userData = await request.only([
            'fullname', 
            'password', 
            'email',
            'age',
            'city',
            'uf',
            'password',
            'how',
            'description'
        ])

        const user = await User.create(userData)
        
        const student = await request.input('student')
        if(student){
            await user.student().create(student)
        }
        
        const musician = await request.input('musician')
        if(musician){
            await user.musician().create(musician)
        }
        
        const teacher = await request.input('teacher')
        if(teacher){
            await user.teacher().create(teacher)
        }
        
        return user
    }
}

module.exports = UserController
