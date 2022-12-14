//import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';


const Header = ({ title, onClick, onAdd, showAdd }) => {
  const location = useLocation();


  return (
    <header className='header'>
        <h1>{title}</h1>  
        {location.pathname === '/' && (
          <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add Task'} onClick={onAdd} />
          )}      
    </header>
  )
}

export default Header;
