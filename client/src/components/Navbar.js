import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from '../context/UserContext';

const Navbar = () => {

    const {zooKeeperName} = useContext(UserContext)

    return (  

        <nav>
        <h1>Build a ZOO</h1>

        <h2>{zooKeeperName}</h2>

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