import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink
        end
        style={({ isActive }) => ({ color: isActive ? '#fff' : 'inherit' })}
        className={s.link}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        style={({ isActive }) => ({ color: isActive ? '#fff' : 'inherit' })}
        className={s.link}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
