import React, { useState, useRef } from 'react';
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
  const [name, setName] = useState()
  const [artist, setArtist] = useState()
  const [introduction, setIntroduction] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const [theme_color, setTheme] = useState()
  const [show_url, setShow] = useState()

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


  async function handleShowPost(e){
    e.preventDefault()

    const data = {
        name,
        artist,
        introduction,
        description,
        category,
        theme_color,
        img_url,
        show_url
    }
      try{
        await api.post('/shows', data)
        alert("Show adicionado")
        handleClose()
      }catch(err){
        alert("Erro ao adicionar show")
      }
  }
  async function handleShowEdit(e){
    e.preventDefault()

    const data = {
        name,
        artist,
        introduction,
        description,
        category,
        theme_color,
        img_url,
        show_url
    }

    try{
      await api.put(`/show/${props.id}`, data)
      alert("Show editado com sucesso")
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
        {props.addShow ? 
          <IconContext.Provider value={{ size:"2em", className: "del" }}>
            <RiSlideshow3Line onClick={handleClickOpen}/>
          </IconContext.Provider> : 
          <IconContext.Provider value={{ size:"2em", className: "del" }}>
            <FaEdit onClick={handleClickOpen}/>
          </IconContext.Provider>
        }
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Show</DialogTitle>
        <DialogContent onSubmit={handleShowPost}>
          <DialogContentText>
            Para {props.action} um show, preencha os campos abaixo
          </DialogContentText>
          <div>
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
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Título"
            type="text"
            fullWidth
            value={name}
            onChange={e => setName(e.target.value) }
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
            id="url"
            label="Url do show no YouTube"
            type="text"
            fullWidth
            value={show_url}
            onChange={e => setShow(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="introduction"
            label="Introdução"
            type="text"
            fullWidth
            value={introduction}
            onChange={e => setIntroduction(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="introduction"
            label="Descrição"
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
          <Button onClick={props.action == "adicionar" ? handleShowPost : handleShowEdit} color="primary" type="submit">
            Cadastrar/Editar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
