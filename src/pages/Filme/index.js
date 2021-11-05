import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default function Filme() {
  const { id } = useParams();
  const history = useHistory();

  const [ filme, setFilme ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${ id }`);
      // console.log(response.data);

      if (response.data.length === 0) {
        // Tentou acessar com id inexistente, navego usuário para home!
        history.replace('/');
        return;
      }

      setFilme(response.data);
      setLoading(false);
    }

    loadFilme();

    // Parar requisição ao desmontar componente do useEffect
    return () => {

    }

  }, [ id, history ]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem('filmes');

    let filmesSalvos = JSON.parse(minhaLista) || [];

    // Ignorar filme salvo com msm ID
    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id) // some percorre lista e procura o mesmo id

    if (hasFilme) {
      alert('Esse filme já está salvo');
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
    alert('Filme salvo com sucesso!');
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando seu filme...</h1>
      </div>
    )
  }

  return (
    <div className="filme-detalhes">
      <div className="filme-info">
        <h1>{ filme.nome }</h1>
        <img src={ filme.foto } alt={ filme.nome } />

        <h3>Sinopse:</h3>
        { filme.sinopse }

        <div className='btns'>
          <button onClick={ salvarFilme }>Salvar</button>
          <button onClick={ () => { } }>
            <a target='_blank' rel="noopener noreferrer" href={ `https://www.youtube.com/results?search_query=${ filme.nome } trailer` }>Trailer</a>
          </button>
        </div>
      </div>
    </div>
  )
}
