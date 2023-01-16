import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = () => (
  <nav>
    <NavLink
      end
      style={({ isActive }) => ({ color: isActive ? '#b92121' : 'inherit' })}
      className={s.link}
      to="/"
    >
      Home
    </NavLink>

    <NavLink
      style={({ isActive }) => ({ color: isActive ? '#b92121' : 'inherit' })}
      className={s.link}
      to="/movies"
    >
      Movies
    </NavLink>
  </nav>
);
