import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FiEye, FiTrash2 } from "react-icons/fi";
import './styles.css';
import { toast } from 'react-toastify';

export default function Favoritos() {
  const [ filmes, setFilmes ] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem('filmes');
    setFilmes(JSON.parse(minhaLista) || []);

  }, []);

  function handleDelete(item_id) {
    let filtroFilmes = filmes.filter((item) => {
      return (item.id !== item_id)
    })

    // Atualizando lista e localStorage com nova lista após retirar o selecionado
    setFilmes(filtroFilmes);
    localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
    toast.success('Filme excluído com sucesso!')
  }

  return (
    <div className="filmes-favoritos">
      <h1>Meus Favoritos</h1>

      { filmes.length === 0 && <span>Você não possui nenhum filme salvo 🙁</span> }

      <ul>
        { filmes.map((item) => (
          <li key={ item.id }>
            <div>
              <img src={ item.foto } alt={ item.nome } />
              <h3>{ item.nome }</h3>
            </div>
            <div>
              <Link to={ `/filme/${ item.id }` }><FiEye size={ 25 } color='#2146db' /></Link>
              <button onClick={ () => handleDelete(item.id) }><FiTrash2 size={ 25 } color='#ed1a1a' /></button>
            </div>
          </li>
        )) }
      </ul>
    </div>
  )
}
