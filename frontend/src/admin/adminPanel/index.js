import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Users from '../Users/index'
import './style.css'
import Cursos from '../Cursos/index'
import Modal from '../../components/userModal/userModal'
import CourseModal from '../../components/courseModal/courseModal'
import { FiPower } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { MdKeyboardArrowRight } from 'react-icons/md'
import banner from '../../assets/banner-1.jpg'
import admin_img from '../../assets/adminAssets/admin.png'

function AdminPanel(){
   const [users, setUser] = useState(false)
   const [courses, setCourse] = useState(false)

   const history = useHistory()

    function onUserClick(){
        setUser(true)
        setCourse(false)
    }
    function onCourseClick(){
        setCourse(true)
        setUser(false)
    }
    function logout (){
        sessionStorage.clear()
        alert('Você foi deslogado')
        window.location.reload()
    }
    return(
        <div className="admin-container">
            <section className="admin-section1">
                <img src={admin_img} className="admin-img"/>
                <ul className="options">
                    <li onClick={onUserClick}>Usuários <MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={onCourseClick}>Cursos <MdKeyboardArrowRight size="1.2em"/></li>
                    <li>Vídeo aulas <MdKeyboardArrowRight size="1.2em"/></li>
                </ul>
                <br/>
                <Link to="/"><img src={banner} className="adm-icon"/>
                </Link>
            </section>
            <section className="admin-section2">
                <header className="panel">
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
                        {users ? <Users /> : null }
                        {courses ? <Cursos /> : null}
                    </div>
            </section>
        </div>
    )
}
export default AdminPanel