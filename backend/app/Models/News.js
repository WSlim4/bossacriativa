'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class News extends Model {
    file(){
        return this.hasOne('App/Models/File')
    }
}

module.exports = News
