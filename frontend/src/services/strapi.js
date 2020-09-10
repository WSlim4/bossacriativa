import axios from 'axios'

const strapi = axios.create({
  baseURL: 'https://admin.bossacriativa.art.br/'
});

export default strapi


