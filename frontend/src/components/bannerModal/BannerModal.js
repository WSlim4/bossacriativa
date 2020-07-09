import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../../services/api'
import { IoMdAddCircle } from 'react-icons/io'
import { FaEdit } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import CKEditor from 'ckeditor4-react';
import './BannerModal.css'

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  
  const [title, setTitle] = useState()
  const [introduction, setIntro] = useState()
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

  function onEditorChange( evt ){
    return setIntro(evt.editor.getData())
  }

  async function handleBannerPost(e){
    e.preventDefault()

    const data = {
      title,
      introduction,
      img_url,
      file_id
    }
      try{
        await api.post('/banners', data)
        alert("Banner adicionado")
        handleClose()
      }catch(err){
        alert("Erro ao adicionar banner")
      }
  }

  async function handleBannerEdit(e){
    e.preventDefault()

    const data = {
        title,
        introduction,
        img_url,
        file_id
    }

    try{
      await api.put(`/banner/${props.id}`, data)
      alert("Banner editado com sucesso")
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
        {props.addBanner ? 
          <IconContext.Provider value={{ size:"2em", className: "del" }}>
            <IoMdAddCircle onClick={handleClickOpen}/>
          </IconContext.Provider> : 
          <IconContext.Provider value={{ size:"2em", className: "del" }}>
            <FaEdit onClick={handleClickOpen}/>
          </IconContext.Provider>
        }
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Oficina</DialogTitle>
        <DialogContent onSubmit={handleBannerPost}>
          <DialogContentText>
            Para {props.action} um Banner à home, preencha os campos abaixo
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
            id="title"
            label="Título do Banner"
            type="text"
            fullWidth
            value={title}
            onChange={e => setTitle(e.target.value) }
          />
          
          <div className="App">
                <h2>Insira aqui o texto do Banner</h2>
                {props.action == "adicionar" ?
                <CKEditor
                    data={introduction}
                    type="classic"
                    onChange={onEditorChange}
                />
                : <CKEditor
                data={props.description}
                type="classic"
                onChange={onEditorChange}
              />}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={props.action == "adicionar" ? handleBannerPost : handleBannerEdit} color="primary" type="submit">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
