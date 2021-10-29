import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './styles.css';

export default function Home() {
  const [ filmes, setFilmes ] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data);
    }

    loadFilmes();
  }, []);

  return (
    <div className="container">
      <div className="lista-filmes">
        { filmes.map((filme) => {
          return (
            <Link to='/'>
              <article key={ filme.id } className="card">
                <div className="div-title">
                  <h2>{ filme.nome }</h2>
                </div>
                <img src={ filme.foto } alt={ filme.nome } />
              </article>
            </Link>
          )
        }) }
      </div>
    </div>
  );
}