import React from 'react';
import './Oficinas.css';
import api from '../../services/api'
import range from '../../helpers/range'
import { Link, Redirect } from 'react-router-dom'
import history from '../../services/history'
import { GiMagnifyingGlass } from 'react-icons/gi'

class Oficinas extends React.Component{
     constructor(props){
        super(props)
        this.state={
            data: [],
            filter: '',
            perPage: 30
        }
        this.__onClick = this.__onClick.bind(this)
        this.search = this.search.bind(this)
        //this.redirectWorkshop = this.redirectWorkshop.bind(this)
     }

    async loadData(page){
        const response = await api.get(`/workshops?page=${page}`)
        this.setState({ total: response.data.total })
        this.setState({ data: response.data.data })
        this.setState({ pageNumbers: Math.ceil(this.state.total / this.state.perPage)})
    }

    componentDidMount(){
        this.props.match.params.page ? this.props.match.params.page = this.props.match.params.page : this.props.match.params.page = 1
        this.loadData(this.props.match.params.page)
    }

    reloadPage(workshop_id, artist_name){
        history.push(`/oficina/${workshop_id}/${artist_name}`)
        window.location.reload()
    }

    __onClick(val){
        this.props.match.params.page = val
        this.loadData(this.props.match.params.page)
    }

    async filterCategory(){
        const response = await api.get(`/workshops?page=${this.props.match.params.page}`)
        this.setState({ data: response.data.data })

        var selectBox = document.getElementById("tema")
        var selectedValue = selectBox.options[selectBox.selectedIndex].value
        var datas = this.state.data
        var filtered = datas.filter((element)=>element.category == selectedValue)
        this.setState({ data: filtered })
    }

    async search(e){
        e.preventDefault()

        const workshops = await api.get('/searchWorkshops',{
            params:{
                value: this.state.filter
            }
        })
        this.setState({ data: workshops.data })
    }

    render(){
          const workshops = this.state.data
          const pgNmb = range(1,this.state.pageNumbers+1)
      return (
        <div className="home-content ">
                <div className="head title">
                    <h2>OFICINAS</h2>
                    <div className="filters">
                        <form onSubmit={this.search}>
                            <div id="buscar">
                                <label htmlFor="buscar">BUSCAR ARTISTA:</label>
                                <input type="text" name="buscar" placeholder="Digite aqui para buscar" onChange={(e)=>this.setState({ filter: e.target.value})}/>
                                <button type="submit"><GiMagnifyingGlass size="1.5em"></GiMagnifyingGlass></button>
                            </div>
                        </form>
                        <div id="filter">
                            <label htmlFor="temas">FILTRAR POR CATEGORIA:</label>
                            <select name="temas" id="tema" onChange={()=>this.filterCategory()}>
                                <option value=""></option>
                                <option value="Música">Música</option>
                                <option value="Artes Integradas">Artes integradas</option>
                                <option value="Artes Visuais">Artes Visuais</option>
                                <option value="Circo">Circo</option>
                                <option value="Dança">Dança</option>
                                <option value="Gestão e Produção Cultural">Gestão e Produção Cultural</option>
                                <option value="Literatura">Literatura</option>
                                <option value="Teatro">Teatro</option>
                            </select>
                            {/*<select name="temas" id="artista">
                                <option value="">Escolha um artista</option>
                            </select>*/}
                        </div>
                    </div>
                </div>
                <div className="main-content"> 
                    {workshops.map(workshop=>
                        <div style={{ backgroundColor: "#E7C032"}} onClick={()=>{ history.push(`/oficina/${workshop.id}`)}}>
                            <div className="div-img" style={{backgroundImage: `url(${workshop.img_url})`}}/>
                            <h6 style={{backgroundColor: `${workshop.theme_color}`}}>{workshop.artist_name}</h6>
                            <p>{workshop.introduction}</p>
                      </div>
                    )}
                </div>
                {pgNmb.map(val=>
                        <button value={val} className="page-btns" onClick={() => this.__onClick(val)} >{val}</button>
                    )}
            </div>
        )
    }
}
export default Oficinas;
  