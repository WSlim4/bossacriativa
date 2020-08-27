import React, { Component } from 'react'
import api from '../../services/api'
import strapi from '../../services/strapi'
import range from '../../helpers/range'
import history from '../../services/history'
import { GiMagnifyingGlass } from 'react-icons/gi'

class Lives extends Component{
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
        const response = await strapi.get(`/lives`)
        this.setState({ total: response.data.total })
        this.setState({ allArtists: artists.data })
        this.setState({ data: response.data.reverse() })
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
        const response = await strapi.get(`/lives?page=${this.props.match.params.page}`)
        this.setState({ data: response.data.data })
        var selectBox = document.getElementById("tema")
        var selectedValue = selectBox.options[selectBox.selectedIndex].value
        var datas = this.state.data
        var filtered = datas.filter((element)=>element.category == selectedValue)
        this.setState({ data: filtered })
    }

    async search(e){
      e.preventDefault()
        const shows = await strapi.get(`/lives?artist=${this.state.filter}`);
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
        const lives = this.state.data
        const pgNmb = range(1,this.state.pageNumbers+1)
        return(
            <>
            <div className="home-content">
                <div className="head title">
                    <h2>LIVES</h2>
                </div>
                <div className="main-content"> 
                    {lives.map(live=>
                    <div onClick={()=>history.push(`/live/${live.id}`)}>
                        <div className="div-img" style={{backgroundImage: `url(https://admin.bossacriativa.art.br${live.image.url})`}}>
                            
                        </div>
                        <h6 style={{backgroundColor: live.theme_color}}>{live.title}</h6>
                        <p>{live.introduction}</p>
                    </div>
                    )}
                </div>
            </div>
            </>
        )   
    }
}
export default Lives