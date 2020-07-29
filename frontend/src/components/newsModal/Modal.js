import React, { useState, useRef } from 'react';
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
import CKEditor from 'ckeditor4-react';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  
  const [title, setTitle] = useState()
  const [introduction, setIntro] = useState()
  const [description, setDesc] = useState()
  const [img_url, setImg] = useState()
  const [file_id, setFile] = useState()

  function onEditorChange( evt ){
    return setDesc(evt.editor.getData())
  }
    
  const ref = useRef()

  /*async function handleChange(e){
    const data = new FormData()

    data.append('file', e.target.files[0])

    const response = await api.post('files', data)

    const { id, url } = response.data

    setFile(id)
    setImg(url)
    }
    */

  async function handleBannerPost(news_id){

    const data = {
      title,
      introduction,
      img_url,
      news_id
    }
    const banner = await api.post('/banners', data)

    return banner.data
  }

  async function handleNewsPost(e){
    e.preventDefault()

    const data = {
      title,
      introduction,
      description,
      img_url
    }
      try{
        const news = await api.post(`/news`, data)
        
        const addBanner = window.confirm("Deseja adicionar a notícia ao Banner?")
        
        if(addBanner == true){
          handleBannerPost(news.data.id)
        }
        
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
          
            {
              /*<div><label htmlFor="file">
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
            </div>*/
            }
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
            id="introduction"
            label="Chamada para a notícia"
            type="text"
            fullWidth
            value={introduction}
            onChange={e => setIntro(e.target.value) }
          />
          <div className="App">
                <h2>Insira aqui o corpo da notícia</h2>
                { props.action == "adicionar" ?
                <CKEditor
                    data={description}
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
          <Button onClick={props.action == "adicionar" ? handleNewsPost : handleNewsEdit} color="primary" type="submit">
            Cadastrar/Editar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
