import React from 'react';
import './Oficinas.css';
import strapi from '../../services/strapi'
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
          perPage: 30,
          categories: []
        }
        this.__onClick = this.__onClick.bind(this)
        this.search = this.search.bind(this)
        this.filterCategory = this.filterCategory.bind(this)
        //this.redirectWorkshop = this.redirectWorkshop.bind(this)
     }

    async loadData(page){
      const { data } = await strapi.get(`/oficinas?_sort=date:desc`)
      const categories = data
        .map(it => it.categoria.name)
        .filter((it, i, arr) => arr.indexOf(it) === i);
        this.setState({ data, categories });
        // this.setState({ total: response.data.total })

      // this.setState({ pageNumbers: Math.ceil(this.state.total / this.state.perPage)})
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

    async filterCategory(e){
        const category = e.target.value;
        const response = await strapi.get(`/oficinas?${category.length > 0 ? `categoria.name=${category}` : ''}`);
        this.setState({ data: response.data });
    }

    async search(e){
        e.preventDefault()
        const workshops = await strapi.get(`/oficinas?artista.name_contains=${this.state.filter}`);
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
                            <select name="temas" id="tema" onChange={this.filterCategory}>
                                <option value=""></option>
                                {
                                  this.state.categories.map(cat => (
                                    <option key={cat} value={cat}>{ cat }</option>
                                  ))
                                }
                                {/* <option value="Artes Integradas">Artes integradas</option>
                                <option value="Artes Visuais">Artes Visuais</option>
                                <option value="Circo">Circo</option>
                                <option value="Dança">Dança</option>
                                <option value="Gestão e Produção Cultural">Gestão e Produção Cultural</option>
                                <option value="Literatura">Literatura</option>
                                <option value="Teatro">Teatro</option> */}
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
                            <div className="div-img" style={{backgroundImage: `url(${workshop.image ? `https://admin.bossacriativa.art.br${workshop.image.url}` : ''})`}}/>
                            <h6 style={{backgroundColor: `${workshop.categoria.color}`}}>{workshop.title}</h6>
                            <p>{workshop.intro}</p>
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
  