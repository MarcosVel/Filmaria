import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FiEye, FiTrash2 } from "react-icons/fi";
import './styles.css';

export default function Favoritos() {
  const [ filmes, setFilmes ] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem('filmes');
    setFilmes(JSON.parse(minhaLista) || []);

  }, []);

  return (
    <div className="filmes-favoritos">
      <h1>Meus Favoritos</h1>

      <ul>
        { filmes.map((item) => (
          <li key={ item.id }>
            <div>
              <img src={ item.foto } alt={ item.nome } />
              <h3>{ item.nome }</h3>
            </div>
            <div>
              <Link to={ `/filme/${ item.id }` }><FiEye size={ 25 } color='#2146db' /></Link>
              <Link><FiTrash2 size={ 25 } color='#ed1a1a' /></Link>
            </div>
          </li>
        )) }
      </ul>
    </div>
  )
}
