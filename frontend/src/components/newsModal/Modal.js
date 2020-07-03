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
import { FaEdit } from 'react-icons/fa'

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  
  const [title, setTitle] = useState()
  const [introduction, setIntro] = useState()
  const [description, setDesc] = useState()
  const [img_url, setImg] = useState()

  async function handleNewsPost(e){
    e.preventDefault()

    console.log(img_url)
    const data = {
      title,
      introduction,
      description,
      img_url
    }
      try{
        await api.post(`/news`, data)
        alert("Notícia adicionada")
        handleClose()
      }catch(err){
        alert("Erro ao adicionar notícia")
      }
  }
  async function handleNewsEdit(e){
    e.preventDefault()

    const data = {
      title,
      introduction,
      description,
      img_url
    }
      try{
        await api.put(`/news/${props.id}`, data)
        alert("Notícia editada")
        handleClose()
      }catch(err){
        alert("Erro ao editar notícia")
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
    {props.addNews ?
      <IconContext.Provider value={{ size:"2em", className: "del" }}>
         <MdNoteAdd onClick={handleClickOpen}/>
      </IconContext.Provider> : 
      <IconContext.Provider value={{ size:"2em", className: "del" }}>
        <FaEdit onClick={handleClickOpen}/>
    </IconContext.Provider>
    }
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Adicionar notícia</DialogTitle>
        <DialogContent onSubmit={handleNewsPost}>
          <DialogContentText>
            Para adicionar uma notícia, preencha os campos abaixo
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
            id="img"
            label="Img_url"
            type="text"
            fullWidth
            value={img_url}
            onChange={e => setImg(e.target.value) }
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
            label="Corpo da notícia"
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
          <Button onClick={props.action == "adicionar" ? handleNewsPost : handleNewsEdit} color="primary" type="submit">
            Cadastrar/Editar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
