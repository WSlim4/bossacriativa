'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Workshop extends Model {
    lessons(){
        return this.hasMany('App/Models/Lesson')
    }
    file(){
        return this.hasOne('App/Models/File')
    }
}

module.exports = Workshop
