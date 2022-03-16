import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from '../context/UserContext';
import '../App.css';

const Navbar = () => {

    const {zooKeeperName} = useContext(UserContext)

    return (  
           
        <nav>
       
        <h1 className="header">BUILD A ZOO</h1>
        <h3 className="nav-name">{zooKeeperName}'S ZOO</h3>
    

      

      
          
      
            <p className="links">
                <Link to = '/'>FIND ANIMALS</Link>
            </p>
            <p className="links-two">
                <Link to = '/zoo'>VISIT  MY  ZOO </Link>
            </p>
         

            

    </nav>
    

    );
}

export default Navbar;