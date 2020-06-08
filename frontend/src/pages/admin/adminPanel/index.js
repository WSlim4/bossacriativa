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

function AdminPanel(props){
   const [users, setUser] = useState(false)
   const [courses, setCourse] = useState(false)
   const [lessons, setLesson] = useState(false)
   const [page, setPage] = useState()
   
   const profile = store.getState().user.profile

   useEffect(()=>{
       setPage(props.match.params.page ? props.match.params.page : 1)
   }, [])
   
   const dispatch = useDispatch()

    function onUserClick(){
        setUser(true)
        setCourse(false)
        setLesson(false)
    }
    function onCourseClick(){
        setCourse(true)
        setUser(false)
        setLesson(false)
    }
    function onLessonClick(){
        setLesson(true)
        setCourse(false)
        setUser(false)
    }
    function logout (){
        dispatch(signOut())
    }
    return(
        <div className="admin-container">
            <section className="admin-section1">
                <img src={admin_img} className="admin-img"/>
                <ul className="options">
                    <li onClick={onUserClick}>Usuários <MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={onCourseClick}>Cursos <MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={onLessonClick}>Vídeo aulas <MdKeyboardArrowRight size="1.2em"/></li>
                </ul>
                <br/>
                <Link to="/"><img src={banner} className="adm-icon"/>
                </Link>
            </section>
            <section className="admin-section2">
                <header className="panel">
                    <h3>Bem vindo: {profile.username},
                        Seu e-mail: {profile.email}
                    </h3>
                    {
                        users ?
                        <Modal
                            addUser
                            action="adicionar"
                        /> :
                        <CourseModal 
                        addCourse
                        action="adicionar"
                        />
                    }
                    <IconContext.Provider value={{ size:"2em", className: "del" }}>
                            <FiPower onClick={logout}/>
                        </IconContext.Provider>
                </header>
                    <div className="display">
                        {users ? <Users page={page}/> : null }
                        {courses ? <Cursos page={page}/> : null}
                        {lessons ? <Lessons page={page}/> : null}
                    </div>
            </section>
        </div>
    )
}
export default connect(state => ({
    user: state.user
}))(AdminPanel)