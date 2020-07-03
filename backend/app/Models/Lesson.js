'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Lesson extends Model {
    workshop(){
        return this.belongsTo('App/Models/Workshop')
    }

    lecture(){
        return this.belongsTo('App/Models/Lecture')
    }
    file(){
        return this.hasOne('App/Models/File')
    }
}


module.exports = Lesson
