import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Users from '../Users/index'
import Cursos from '../Cursos/index'
import Lessons from '../VideoAulas/videoaulas'
import './style.css'
import Modal from '../../../components/userModal/userModal'
import CourseModal from '../../../components/courseModal/courseModal'
import { FiPower } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { MdKeyboardArrowRight } from 'react-icons/md'
import banner from '../../../assets/banner-1.jpg'
import admin_img from '../../../assets/adminAssets/admin.png'
import { store } from '../../../store'
import { signOut } from '../../../store/modules/auth/actions'
import Shows from '../Shows/Shows'
import Events from '../Eventos/Events'
import ShowsModal from '../../../components/showsModal/Modal'
import EventsModal from '../../../components/eventModal/Modal'

function AdminPanel(props){
   const [page, setPage] = useState()
   const [display, setDisplay] = useState('')
   const profile = store.getState().user.profile

   useEffect(()=>{
       setPage(props.match.params.page ? props.match.params.page : 1)
   }, [])
   
   function checkDisplay(){
       if(display === "users"){
           return <Modal 
                    addUser
                    action="adicionar"
                    />
       }else if(display==="courses"){
           return <CourseModal
                    addCourse
                    action="adicionar"
                   />
       }else if(display==="shows"){
            return <ShowsModal
                    addShow
                    action="adicionar"
                    />
       }
       else if(display==="events"){
            return <EventsModal
                    addEvent
                    action="adicionar"
                    />
        }
       else{
           return null
       }
   }

   const dispatch = useDispatch()

    function logout (){
        dispatch(signOut())
    }
    return(
        <div className="admin-container">
            <section className="admin-section1">
                <div>
                    <Link to="/"><img src={banner} className="adm-icon"/>
                    </Link>
                </div>
                <ul className="options">
                    <li onClick={()=>setDisplay('users')}>Usuários <MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={()=>setDisplay('courses')}>Cursos <MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={()=>setDisplay('lessons')}>Vídeo aulas <MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={()=>setDisplay('shows')}>Shows <MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={()=>setDisplay('events')}>Eventos <MdKeyboardArrowRight size="1.2em"/></li>
                </ul>
                <br/>
            </section>
            <section className="admin-section2">
                <header className="panel">
                    <h3>Bem vindo a versão beta do mini sistema de administração</h3>
                    {checkDisplay()}
                    <IconContext.Provider value={{ size:"2em", className: "del" }}>
                            <FiPower onClick={logout}/>
                        </IconContext.Provider>
                </header>
                    <div className="display">
                        {display === "users" ? <Users page={page}/> : null }
                        {display === "courses" ? <Cursos page={page}/> : null}
                        {display === "lessons" ? <Lessons page={page}/> : null}
                        {display === "shows" ? <Shows page={page}/>: null}
                        {display === "events" ? <Events page={page}/>: null}
                    </div>
            </section>
        </div>
    )
}
export default connect(state => ({
    user: state.user
}))(AdminPanel)