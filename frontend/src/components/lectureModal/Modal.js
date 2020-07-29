import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../../services/api'
import { FaEdit } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { BsPlusSquareFill } from 'react-icons/bs'

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState()
  const [speaker, setSpeaker] = useState()
  const [description, setDescription] = useState()
  const [introduction, setIntro] = useState()
  const [category, setCategory] = useState()
  const [theme_color, setTheme] = useState()
  const [about_speaker, setAbout] = useState()
  const [img_url, setImg] = useState()
  const [file_id, setFile] = useState()

  const ref = useRef()

  async function handleChange(e){
    const data = new FormData()

    data.append('file', e.target.files[0])

    const response = await api.post('files', data)

    const { id, url } = response.data

    setFile(id)
    setImg(url)
    }

  async function handleEventPost(e){
    e.preventDefault()

    const lectureData = {
        name,
        speaker,
        description,
        introduction,
        theme_color,
        about_speaker,
        img_url,
        file_id
    }
      try{
        await api.post('/lectures', lectureData)
        alert("Palestra adicionada")
        handleClose()
      }catch(err){
        alert("Erro ao adicionar palestra")
      }
  }
  async function handleEventEdit(e){
    e.preventDefault()

    const lectureData = {
      name,
      speaker,
      description,
      introduction,
      category,
      theme_color,
      about_speaker,
      img_url,
      file_id
    }

    try{
      await api.put(`/lecture/${props.id}`, lectureData)
      alert("Palestra editada com sucesso")
      handleClose()
    } catch(err){
      return alert("Algo deu errado")
    }
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        {props.addLecture ? 
          <IconContext.Provider value={{ size:"2em", className: "del" }}>
            <BsPlusSquareFill onClick={handleClickOpen}/>
          </IconContext.Provider> : 
          <IconContext.Provider value={{ size:"2em", className: "del" }}>
            <FaEdit onClick={handleClickOpen}/>
          </IconContext.Provider>
        }
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Palestra</DialogTitle>
        <DialogContent onSubmit={handleEventPost}>
          <DialogContentText>
            Para {props.action} uma Palestra, preencha os campos abaixo
          </DialogContentText>
          {/*<div>
            <label htmlFor="file">
                <img id="preview" src={img_url || "https://www.hanselman.com/blog/content/binary/Windows-Live-Writer/There-is-only-one-Cloud-Icon-in-the-Enti_137BD/image_d64843a5-92db-44cd-98ec-cc1f74c05526.png"} alt=""/>
                <input 
                    type="file"
                    id="file"
                    data-file={file_id}
                    accept="image/*"
                    ref={ref}
                    onChange={handleChange}
                />
            </label>
      
        </div>*/}
        <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Url da imagem"
            type="text"
            fullWidth
            value={img_url}
            onChange={e => setImg(e.target.value) }
            />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome da palestra"
            type="text"
            fullWidth
            value={name}
            onChange={e => setName(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="about"
            label="Sobre o palestrante"
            type="text"
            fullWidth
            value={about_speaker}
            onChange={e => setAbout(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="speaker"
            label="Palestrante"
            type="text"
            fullWidth
            value={speaker}
            onChange={e => setSpeaker(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="introduction"
            label="Introdução"
            type="text"
            fullWidth
            value={introduction}
            onChange={e => setIntro(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Descrição da palestra"
            type="text"
            fullWidth
            value={description}
            onChange={e => setDescription(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Categoria"
            type="text"
            fullWidth
            value={category}
            onChange={e => setCategory(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="theme"
            label="Cor do Tema | Ex: black, purple, etc..."
            type="text"
            fullWidth
            value={theme_color}
            onChange={e => setTheme(e.target.value) }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={props.action == "adicionar" ? handleEventPost : handleEventEdit} color="primary" type="submit">
            Cadastrar/Editar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
