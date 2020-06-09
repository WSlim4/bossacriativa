'use strict'

const Route = use('Route')

Route.group(()=>{
    Route.post('/profile', 'ProfileController.store')
    Route.get('/logout', 'SessionController.destroy')
}).middleware(['auth'])

Route.post('/users', 'UserController.store')
Route.get('/users', 'UserController.index')
Route.put('/user/:id', 'UserController.edit')
Route.delete('/user/:id', 'UserController.destroy')

Route.post('/courses', 'CourseController.store')
Route.put('/course/:id', 'CourseController.edit')
Route.delete('/course/:id', 'CourseController.destroy')
Route.get('/courses', 'CourseController.index')
    
Route.post('/events', 'EventController.store')
Route.put('/event/:id', 'EventController.edit')
Route.delete('/event/:id', 'EventController.destroy')
Route.get('/events', 'EventController.index')
Route.get('/lastEvents', 'EventController.show')

Route.post('/sessions', 'SessionController.store')

Route.post('/lessons/:id', 'LessonController.store')
Route.get('/lastLessons', 'LessonController.show')
Route.get('/lessons', 'LessonController.index')

Route.post('/forgotPassword', 'ForgotPasswordController.store')
Route.put('/resetPassword', 'ForgotPasswordController.update')






