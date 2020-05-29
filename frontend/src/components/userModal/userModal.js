import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import square from '../../assets/adminAssets/plus-square.svg'
import './userModal.css'
import api from '../../services/api'

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [username, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPass] = useState()
  const [is_artist, setArtist] = useState(false)

  async function handleUserPost(e){
    e.preventDefault()

    const data = {
      username,
      email,
      password,
      is_artist
    }
      try{
        const response = await api.post('/users', data)
        console.log(response.data)
        handleClose()
      }catch(err){
        return err
      }
  }
  async function handleUserEdit(e){
    e.preventDefault()

    const data = {
      username,
      password,
      email,
      is_artist
    }

    try{
      const response = await api.put(`/user/${props.id}`, data)
      console.log(response)
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
      <button id="btn" onClick={handleClickOpen}>
        {props.addUser ? <img src={square} /> : "Editar Usuário"}
        </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Adicionar usuário</DialogTitle>
        <DialogContent onSubmit={handleUserPost}>
          <DialogContentText>
            Para criar um usuário, preencha os campos abaixo
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            value={username}
            onChange={e => setName(e.target.value) }
          />

          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Email"
            type="text"
            fullWidth
            value={email}
            onChange={e => setEmail(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Senha"
            type="text"
            fullWidth
            value={password}
            onChange={e => setPass(e.target.value) }
          />
          <div className="radio-group">
          <DialogContentText>
            Artista?
          </DialogContentText>
            <input 
            type="radio" 
            name="artist" 
            value={is_artist}
            onChange={e => setArtist(true)}
            />
            <label htmlFor="artist">Sim</label>
            <input 
            type="radio" 
            name="artist"
            value={is_artist}
            onChange={e => setArtist(false)}
            />
            <label htmlFor="artist">Não</label>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={props.action == "adicionar" ? handleUserPost : handleUserEdit} color="primary" type="submit">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
