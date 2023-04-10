import { Link } from "react-router-dom"; 
import {MdShoppingCart} from 'react-icons/md';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <Link to='/'>Shop</Link>
            <Link to='/cart'>
                <MdShoppingCart size={25} />
            </Link>
        </div>
    </div>
  )
}

export default Navbar