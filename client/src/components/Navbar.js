import { Link } from "react-router-dom";

const Navbar = () => {

    return (  

        <nav>
        <h1>Build a ZOO</h1>

        <ul>
            <li>
                <Link to = '/'>Find Animals</Link>
            </li>
            <li>
                <Link to = '/zoo'>Visit my ZOO</Link>
            </li>
        </ul>
    </nav>

    );
}

export default Navbar;