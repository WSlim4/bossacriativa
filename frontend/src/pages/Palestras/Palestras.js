import React from 'react';
import api from '../../services/api'
import history from '../../services/history'
import range from '../../helpers/range'
import { GiMagnifyingGlass } from 'react-icons/gi'

class Palestras extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: [],
            filter: '',
            perPage: 30
        }
        this.__onClick = this.__onClick.bind(this)
        this.filterCategory = this.filterCategory.bind(this)
        this.search = this.search.bind(this)
    }
    
    async loadData(page){
        const response = await api.get(`/lectures?page=${page}`)
        this.setState({ total: response.data.total })
        this.setState({ data: response.data.data })
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
        const response = await api.get(`/lectures`)
        this.setState({ data: response.data.data })

        var selectBox = document.getElementById("tema")
        var selectedValue = selectBox.options[selectBox.selectedIndex].value
        var datas = this.state.data
        var filtered = datas.filter((element)=>element.category == selectedValue)
        this.setState({ data: filtered })
    }

    async search(e){
        e.preventDefault()

        const lectures = await api.get('/searchLectures',{
            params:{
                value: this.state.filter
            }
        })
        this.setState({ data: lectures.data })
    }

    render(){
        const lectures = this.state.data
        const pgNmb = range(1,this.state.pageNumbers+1)
    return (
        <div className="home-content">
                <div className="head title">
                    <h2>PALESTRAS</h2>
                    <div className="filters">
                        <form onSubmit={this.search}>
                            <div id="buscar">
                            <label htmlFor="buscar">BUSCAR:</label>
                            <input type="text" name="buscar" placeholder="Digite aqui para buscar" onChange={e=>this.setState({ filter: e.target.value})}/>
                            <button type="submit"><GiMagnifyingGlass size="1.5em"></GiMagnifyingGlass></button>
                            </div>
                        </form>
                        <div id="filter">
                            <label htmlFor="temas">FILTRAR POR CATEGORIA:</label>
                            <select name="temas" id="tema" onChange={()=>this.filterCategory()}>
                                <option value=""></option>
                                <option value="Música">Música</option>
                                <option value="Artes Integradas">Artes Integradas</option>
                                <option value="Artes Visuais">Artes Visuais</option>
                                <option value="Circo">Circo</option>
                                <option value="Dança">Dança</option>
                                <option value="Gestão e Produção cultural">Gestão e Produção Cultural</option>
                                <option value="Literatura ">Literatura </option>
                                <option value="Teatro">Teatro</option>
                            </select>
                            {/*<select name="temas" id="artista">
                                <option value="">Escolha um artista</option>
                            </select>*/}
                        </div>
                    </div>
                </div>
                <div className="main-content"> 
                    {lectures.map(lecture=>
                    <div onClick={()=>
                        history.push(`/palestra/${lecture.id}/${lecture.speaker}`)
                    }>
                        <img className="div-img" src={lecture.img_url}/>
                        <h6 style={{backgroundColor: lecture.theme_color}}>{lecture.speaker}</h6>
                        <p>{lecture.introduction}</p>
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
  
  export default Palestras;
  