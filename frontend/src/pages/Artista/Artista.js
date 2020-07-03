import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Workshops from '../admin/Oficinas/Oficinas'
import Lessons from '../admin/VideoAulas/videoaulas'
import WorkshopModal from '../../components/workshopModal/workshopModal'
import { FiPower } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { store } from '../../store'
import { signOut } from '../../store/modules/auth/actions'
import Shows from '../admin/Shows/Shows'
import ShowsModal from '../../components/showsModal/Modal'
import LectureModal from '../../components/lectureModal/Modal'

function ArtistPanel(props){
   const [page, setPage] = useState()
   const [display, setDisplay] = useState('')
   const profile = store.getState().user.profile

   useEffect(()=>{
       setPage(props.match.params.page ? props.match.params.page : 1)
   }, [])
   
   function checkDisplay(){
        if(display==="workshops"){
           return <WorkshopModal
                    addCourse
                    action="adicionar"
                   />
       }else if(display==="events"){
            return <LectureModal
                    addLecture
                    action="adicionar"
                    />
       }else if(display==="shows"){
        return <ShowsModal
                addShow
                action="adicionar"
                />
        }else{
           return 
       }
   }

   const dispatch = useDispatch()

    function logout (){
        dispatch(signOut())
    }
    return(
        <div className="admin-container">
            <section className="admin-section1">
                <ul className="options">
                    <li onClick={()=>setDisplay('workshops')}>Oficinas <MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={()=>setDisplay('lessons')}>Vídeo aulas <MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={()=>setDisplay('shows')}>Shows<MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={()=>setDisplay('events')}>Eventos<MdKeyboardArrowRight size="1.2em"/></li>
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
                        {display === "workshops" ? <Workshops page={page}/> : null}
                        {display === "lessons" ? <Lessons page={page}/> : null}
                        {display === "shows" ? <Shows page={page}/>: null}
                    </div>
            </section>
        </div>
    )
}
export default connect(state => ({
    user: state.user
}))(ArtistPanel)