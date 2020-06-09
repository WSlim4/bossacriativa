import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../../services/api'
import { RiSlideshow3Line } from 'react-icons/ri'
import { FaEdit } from 'react-icons/fa'
import { IconContext } from 'react-icons'

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState()
  const [artist, setArtist] = useState()
  const [address, setAddress] = useState()
  const [url, setUrl] = useState()


  async function handleEventPost(e){
    e.preventDefault()

    const data = {
        title,
        artist,
        address,
        url
    }
      try{
        await api.post('/events', data)
        alert("Evento adicionado")
        handleClose()
      }catch(err){
        alert("Erro ao adicionar evento")
      }
  }
  async function handleEventEdit(e){
    e.preventDefault()

    const data = {
        title,
        artist,
        address,
        url
    }

    try{
      await api.put(`/event/${props.id}`, data)
      alert("Evento editado com sucesso")
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
        {props.addEvent ? 
          <IconContext.Provider value={{ size:"2em", className: "del" }}>
            <RiSlideshow3Line onClick={handleClickOpen}/>
          </IconContext.Provider> : 
          <IconContext.Provider value={{ size:"2em", className: "del" }}>
            <FaEdit onClick={handleClickOpen}/>
          </IconContext.Provider>
        }
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Evento</DialogTitle>
        <DialogContent onSubmit={handleEventPost}>
          <DialogContentText>
            Para {props.action} um evento, preencha os campos abaixo
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
            id="artist"
            label="Artista"
            type="text"
            fullWidth
            value={artist}
            onChange={e => setArtist(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Local"
            type="text"
            fullWidth
            value={address}
            onChange={e => setAddress(e.target.value) }
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
