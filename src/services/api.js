import axios from 'axios';

// https://sujeitoprogramador.com/r-api/?api=filmes

// TODOS OS FILMES = r-api/?api=filmes

// FILME COM ID 123 r-api/?api=filmes/123

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com'
});

export default api;

