import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
  return(
    <header>
      <Link className="logo" to='/' >Filmaria</Link>
      <Link className="favoritos" to='/favoritos' >Favoritos</Link>
    </header>
  )
}