import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend.bossacriativa.art.br/'
})

export default api