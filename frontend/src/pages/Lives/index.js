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
          perPage: 30,
          categories: []
        }
        this.__onClick = this.__onClick.bind(this)
        this.filterCategory = this.filterCategory.bind(this)
        this.search = this.search.bind(this)
    }

    async loadData(page){
      const { data } = await strapi.get(`/lives?_sort=date:desc`);
      // console.log(data);
      // const categories = data
      //   .map(it => it.categoria.name)
      //   .filter((it, i, arr) => arr.indexOf(it) === i);
        this.setState({ data });
        // this.setState({ total: response.data.total })

      // this.setState({ pageNumbers: Math.ceil(this.state.total / this.state.perPage)})
    }

    componentDidMount(){
        this.props.match.params.page ? this.props.match.params.page = this.props.match.params.page : this.props.match.params.page = 1
        this.loadData(this.props.match.params.page)
    }
    __onClick(val){
        this.props.match.params.page = val
        this.loadData(this.props.match.params.page)
    }
    
    async filterCategory(e){
      const category = e.target.value;
      const response = await strapi.get(`/lives?${category.length > 0 ? `categoria.name=${category}` : ''}`);
      this.setState({ data: response.data });
    }

    async search(e){
      e.preventDefault()
      const lives = await strapi.get(`/lives?artista.name_contains=${this.state.filter}`);
      this.setState({ data: lives.data })
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