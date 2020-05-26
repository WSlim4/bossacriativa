'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users', 'UserController.store')
Route.put('/user/:id', 'UserController.edit')
Route.delete('/user/:id', 'UserController.destroy')
Route.get('/user/:id', 'UserController.show').middleware(['auth'])
Route.get('/users', 'UserController.index')


Route.post('/profile', 'ProfileController.store').middleware(['auth'])

Route.post('/sessions', 'SessionController.store')
Route.get('/logout', 'SessionController.destroy').middleware(['auth'])

Route.post('/courses', 'CourseController.store')
Route.put('/course/:id', 'CourseController.edit')
Route.get('/courses', 'CourseController.index')

Route.post('/lessons/:id', 'LessonController.store')
Route.get('/lessons/:id', 'LessonController.index')

Route.post('/forgotPassword', 'ForgotPasswordController.store')
Route.put('/resetPassword', 'ForgotPasswordController.update')


