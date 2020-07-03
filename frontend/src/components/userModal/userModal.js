import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { signUpRequest } from '../../store/modules/auth/actions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './userModal.css'
import api from '../../services/api'
import { FaUserEdit, FaUserPlus } from 'react-icons/fa'
import { IconContext } from "react-icons"

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [username, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPass] = useState()
  const [role, setRole] = useState()

  const dispatch = useDispatch()

  async function handleUserPost(e){
    e.preventDefault()

    dispatch(signUpRequest(username, email, password, role))
  }
  async function handleUserEdit(e){
    e.preventDefault()

    const data = {
      username,
      password,
      email,
      role
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
        {props.addUser ? 
          <IconContext.Provider value={{ size:"2em", className: "del" }}>
              <FaUserPlus onClick={handleClickOpen}/>
            </IconContext.Provider>
        : <IconContext.Provider value={{ size:"2em", className: "del" }}>
              <FaUserEdit onClick={handleClickOpen}/>
          </IconContext.Provider>
        }
        
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Usuário</DialogTitle>
        <DialogContent onSubmit={handleUserPost}>
          <DialogContentText>
            Para {props.action} um usuário, preencha os campos abaixo
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
            value={role}
            onChange={e => setRole('artista')}
            />
            <label htmlFor="artist">Sim</label>
            <input 
            type="radio" 
            name="artist"
            value={role}
            onChange={e => setRole('null')}
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
