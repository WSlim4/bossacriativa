import axios from 'axios'

const api = axios.create({
    baseURL: 'http://backend.bossacriativa.art.br/'
})

export default api