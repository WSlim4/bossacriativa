import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../../services/api'
import { MdNoteAdd } from 'react-icons/md'
import { IconContext } from 'react-icons'

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  
  const [title, setTitle] = useState()
  const [description, setDesc] = useState()
  const [url, setUrl] = useState()
  const course_name = props.name

  async function handleLessonPost(e){
    e.preventDefault()

    const data = {
      title,
      course_name,
      description,
      url
    }
      try{
        await api.post(`/lessons/${props.id}`, data)
        alert("Aula adicionada")
        handleClose()
      }catch(err){
        alert("Erro ao adicionar aula")
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
      <IconContext.Provider value={{ size:"2em", className: "del" }}>
         <MdNoteAdd onClick={handleClickOpen}/>
      </IconContext.Provider>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Adicionar aula ao curso com id: {props.id}</DialogTitle>
        <DialogContent onSubmit={handleLessonPost}>
          <DialogContentText>
            Para adicionar uma aula, preencha os campos abaixo
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Título"
            type="text"
            fullWidth
            value={title}
            onChange={e => setTitle(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="Url"
            type="text"
            fullWidth
            value={url}
            onChange={e => setUrl(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Descrição"
            type="text"
            fullWidth
            value={description}
            onChange={e => setDesc(e.target.value) }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleLessonPost} color="primary" type="submit">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
