import { Link } from 'react-router-dom';
import "./styles.css";

const Navbar = () => (
    <nav className='row bg-primary main-nav'>
        <div className='col-4 '>
            <Link to='/' className='nav-logo-text'>
                <h4 className='main-text'>DESAFIO FRONTEND SUPERA</h4>
            </Link>
        </div>
    </nav>
)

export default Navbar;