import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Aulas.css'
import api from '../../services/api'
import LessonModal from '../lessonModal/modal'
import { IconContext } from "react-icons";
import { MdDelete } from 'react-icons/md'

export default function FormDialog(props) {
  const [open, setOpen] = useState(false)
  const [lessons, setLessons] = useState([])

  useEffect(()=>{
    async function getData(){
      const lessons = await api.get(`/workshopLessons/${props.id}`)
      setLessons(lessons.data)
    }
    getData()
  }, [])

  const handleOpen = () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false)
  }

  async function handleDelete(id){
    await api.delete(`/lesson/${id}`)
    return alert('Aula deletada')
  }
  
  return (
    <>
      <button onClick={handleOpen}> Mostrar aulas </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='lg' fullWidth={true}>
        <DialogTitle id="form-dialog-title">Aulas desta oficina</DialogTitle>
        <DialogContent>
        <LessonModal
        id={props.id}
        addLesson
        action="adicionar"
        />
        <table id="users">
                <tr>
                    <th>ID</th>
                    <th>Url</th>
                    <th>Título</th>
                    <th>Oficineiro</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
                {lessons.map(lesson=>
                  <tr key={lesson.id}>
                    <td>{lesson.id}</td>
                    <td>{lesson.url}</td>
                    <td>{lesson.title}</td>
                    <td>{lesson.course_name}</td>
                    <td>{lesson.description}</td>
                    <td>
                      <LessonModal
                      id={lesson.id}
                      action="editar"
                      />
                      <IconContext.Provider value={{ size:"2em", className: "del" }}>
                            <MdDelete onClick={()=>handleDelete(lesson.id)}/>
                        </IconContext.Provider>
                    </td>
                  </tr>
                  )}
        </table>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
