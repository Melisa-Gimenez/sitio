import { Link } from "react-router-dom";

const Navr = (props) => {
    return(
       <nav>
        <div>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/recetasdulces">Inicio</Link></li>
                <li><Link to="/recetassaladas">Inicio</Link></li>
                <li><Link to="/subscripcion">Inicio</Link></li>
            </ul>
        </div>
       </nav>
    )
}
export default Nav;