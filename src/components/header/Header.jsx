import s from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'



const Header = () => {
  return (
    <header className={s.header}>
     <ul>
        <li>
           <NavLink to="/" className={({ isActive }) => (isActive ? s.ativo : '')}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/sobre" className={({isActive}) => (isActive ? s.ativo : '')}>Sobre</NavLink>
        </li>
        <li>
            <NavLink to="/laboratorio/convidados" className={({isActive}) => (isActive ? s.ativo : '')}>Laboratório</NavLink>          
        </li>
     </ul>
    </header> 
  )
};

export default Header