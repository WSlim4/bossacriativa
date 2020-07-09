'use strict'
const Helpers = use('Helpers')
const File = use('App/Models/File')

class FileController {

  async store ({ request, response }) {
    try{
      if(!request.file('file')) return

      const upload = request.file('file', { size: '5mb' })

      const fileName = `${Date.now()}.${upload.subtype}`

      await upload.move(Helpers.tmpPath('uploads'), { 
        name: fileName
      })

      if(!upload.move()){
        throw upload.error()
      }

      const file = await File.create({
        file: fileName,
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype
      })
      return file
    
    } catch(err){
      return response.status(err.status).send({ error: { message: "Erro no upload"} })
    }
  }

  async show ({ params, response}) {
    const file = await File.findOrFail(params.id)

    return response.attachment(Helpers.tmpPath(`uploads/${file.file}`))
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = FileController
