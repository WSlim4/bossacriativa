import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import Users from '../Users/index'
import Workshops from '../Oficinas/Oficinas'
import Lessons from '../VideoAulas/videoaulas'
import News from '../Noticias/Noticias'
import NewsModal from '../../../components/newsModal/Modal'
import './style.css'
import Modal from '../../../components/userModal/userModal'
import WorkshopModal from '../../../components/workshopModal/workshopModal'
import { FiPower } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { store } from '../../../store'
import { signOut } from '../../../store/modules/auth/actions'
import Shows from '../Shows/Shows'
import Lectures from '../Palestras/Palestras'
import Banner from '../Banner/Banner'
import ShowsModal from '../../../components/showsModal/Modal'
import LectureModal from '../../../components/lectureModal/Modal'
import BannerModal from '../../../components/bannerModal/BannerModal'

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
       }else if(display==="workshops"){
           return <WorkshopModal
                    addCourse
                    action="adicionar"
                   />
       }else if(display==="shows"){
            return <ShowsModal
                    addShow
                    action="adicionar"
                    />
       }
       else if(display==="lectures"){
            return <LectureModal
                    addLecture
                    action="adicionar"
                    />
        }
        else if(display==="news"){
            return <NewsModal
                    addNews
                    action="adicionar"
                    />
        }
        else if(display==="banners"){
            return <BannerModal
                    addBanner
                    action="adicionar"
                    />
        }
       else{
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
                    <li onClick={()=>setDisplay('users')}>Usuários <MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={()=>setDisplay('workshops')}>Oficinas <MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={()=>setDisplay('lectures')}>Palestras <MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={()=>setDisplay('shows')}>Apresentações<MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={()=>setDisplay('news')}>Notícias<MdKeyboardArrowRight size="1.2em"/></li>
                    <li onClick={()=>setDisplay('banners')}>Banners<MdKeyboardArrowRight size="1.2em"/></li>
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
                        {display === "workshops" ? <Workshops page={page}/> : null}
                        {display === "lessons" ? <Lessons page={page}/> : null}
                        {display === "shows" ? <Shows page={page}/>: null}
                        {display === "lectures" ? <Lectures page={page}/>: null}
                        {display === "news" ? <News page={page}/>: null}
                        {display === "banners" ? <Banner page={page}/>: null}
                    </div>
            </section>
        </div>
    )
}
export default connect(state => ({
    user: state.user
}))(AdminPanel)