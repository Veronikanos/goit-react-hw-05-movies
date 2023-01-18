import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
// import classes from 'classnames';

function Navigation() {
  return (
    <nav>
      <NavLink
        end
        style={
          ({ isActive }) => ({ color: isActive ? '#b92121' : 'inherit' })
          // ({ isActive }) => classes(s.NavLink, { [s.active]: isActive })
        }
        className={s.link}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        style={
          ({ isActive }) => ({ color: isActive ? '#b92121' : 'inherit' })
          // ({ isActive }) => classes(s.NavLink, { [s.active]: isActive })
        }
        className={s.link}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
