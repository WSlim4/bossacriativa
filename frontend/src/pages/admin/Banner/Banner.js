import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import BannerModal from '../../../components/bannerModal/BannerModal'
import { MdDelete } from 'react-icons/md'
import { IconContext } from 'react-icons';
import range from '../../../helpers/range'

function Banners(props){
    const [banners, setBanners] = useState([])
    const [pages, setPages] = useState()
    const [page, setPage] = useState(props.page)
    const pgNumb = range(1, pages+1)


    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/paginateBanners?page=${page}`)
            setBanners(response.data.data)
            setPages(Math.ceil( response.data.total / response.data.perPage ))
        }
        fetchData()
    }, [page])
    
    function onClick(val){
        setPage(val)
    }

    async function handleDelete(id){
        try{
            await api.delete(`/banner/${id}`)

            return alert("Banner deletado")
        }catch(err){
            alert("Não foi possível deletar o banner, verifique se ele existe")
        }
        setBanners(banners.filter(banners => banners.id !== id))
    }

    return(
        <>
            <table id="users">
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Url da imagem</th>
                    <th>Ações</th>
                </tr>
                {banners.map((banner)=>
                <tr key={banner.id}>
                    <td>{banner.id}</td>
                    <td>{banner.title}</td>
                    <td>{banner.introduction}</td>
                    <td>{banner.img_url}</td>
                    <td>

                        <BannerModal
                        action="editar"
                        id={banner.id}
                        description={banner.introduction}
                        />
                        <IconContext.Provider value={{ size:"2em", className: "del" }}>
                            <MdDelete onClick={()=>handleDelete(banner.id)}/>
                        </IconContext.Provider>
                    </td>
                </tr>
                )}
            </table>
            {pgNumb.map(val=>
                        <button value={val} className="btns" onClick={() => onClick(val)} >{val}</button>
            )}
        </>
    )
}

export default Banners