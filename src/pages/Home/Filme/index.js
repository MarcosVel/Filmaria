import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';

export default function Filme() {
  const { id } = useParams();
  const [ filme, setFilme ] = useState([]);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${ id }`);
      // console.log(response.data);

      setFilme(response.data);
    }

    loadFilme();
  }, [ id ]);

  return (
    <div>
      <h1>detalhes - { id }</h1>
    </div>
  )
}
