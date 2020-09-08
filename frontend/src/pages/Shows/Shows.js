import React, { createElement } from 'react'
import api from '../../services/api'
import range from '../../helpers/range'
import history from '../../services/history'
import { GiMagnifyingGlass } from 'react-icons/gi'

class Shows extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            filter: '',
            allArtists: [],
            perPage: 30
        }
        this.__onClick = this.__onClick.bind(this)
        this.filterCategory = this.filterCategory.bind(this)
        this.search = this.search.bind(this)
    }

    async loadData(page){
        const artists = await api.get('/showAll')
        const response = await api.get(`/shows?page=${page}`)
        this.setState({ total: response.data.total })
        this.setState({ allArtists: artists.data })
        this.setState({ data: response.data.data.reverse() })
        this.setState({ pageNumbers: Math.ceil(this.state.total / this.state.perPage)})
    }

    componentDidMount(){
        this.props.match.params.page ? this.props.match.params.page = this.props.match.params.page : this.props.match.params.page = 1
        this.loadData(this.props.match.params.page)
    }
    __onClick(val){
        this.props.match.params.page = val
        this.loadData(this.props.match.params.page)
    }
    
    async filterCategory(){
        const response = await api.get(`/shows?page=${this.props.match.params.page}`)
        this.setState({ data: response.data.data })

        var selectBox = document.getElementById("tema")
        var selectedValue = selectBox.options[selectBox.selectedIndex].value
        var datas = this.state.data
        var filtered = datas.filter((element)=>element.category === selectedValue)
        this.setState({ data: filtered })
    }

    async search(e){
        e.preventDefault()

        const shows = await api.get('/searchShows',{
            params:{
                value: this.state.filter
            }
        })
        this.setState({ data: shows.data })
    }
    /*async getArtists(){
        var arr = this.state.allArtists
        var n = arr.length;
        var result = [];

        for (var i = 0; i < n; i++) {
            for (var j=0 ; j < n; j++)
                if (i!=j && arr[i]==arr[j])
                    break;
                if(j==n)
            result.push(arr[i]);
        }
        return console.log(result);
    }
        */  
    render(){
        const shows = this.state.data
        const pgNmb = range(1,this.state.pageNumbers+1)
        return(
            <>
            <div className="home-content">
                <div className="head title">
                    <h2>APRESENTAÇÕES</h2>
                    <div className="filters">
                        <div id="buscar">
                            <form onSubmit={this.search}>
                                <label htmlFor="buscar">BUSCAR POR ARTISTA:</label>
                                <input type="text" name="buscar" id="buscar" placeholder="Digite aqui para buscar" onChange={(e)=>this.setState({ filter: e.target.value })}/>
                                <button type="submit"><GiMagnifyingGlass size="1.5em"></GiMagnifyingGlass></button>
                            </form>
                        </div>
                        <div id="filter">
                            <label htmlFor="temas">FILTRAR POR CATEGORIA:</label>
                            <select name="temas" id="tema" onChange={()=>this.filterCategory()}>
                                <option value=""></option>
                                <option value="Música">Música</option>
                                <option value="Artes Integradas">Artes Integradas</option>
                                <option value="Artes Visuais">Artes Visuais</option>
                                <option value="Circo">Circo</option>
                                <option value="Dança">Dança</option>
                                <option value="Literatura">Literatura </option>
                                <option value="Teatro">Teatro </option>
                            </select>
                            {/*<select name="temas" id="artista">
                                <option value="">Escolha um artista</option>
                            </select>*/}
                        </div>
                    </div>
                </div>
                <div className="main-content"> 
                    {shows.map(show=>
                    <div onClick={()=>history.push(`/apresentacao/${show.id}`)}>
                        <div className="div-img" style={{backgroundImage: `url(${show.img_url})`}}>
                            
                        </div>
                        <h6 style={{backgroundColor: show.theme_color}}>{show.name}</h6>
                        <p>{show.introduction}</p>
                    </div>
                    )}
                </div>
                {pgNmb.map(val =>
                        <button value={val} className="page-btns" onClick={() => this.__onClick(val)} >{val}</button>
                )}
            </div>
            </>
        )   
    }
}
export default Shows