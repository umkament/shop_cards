import "./index.css";
import { Link } from 'react-router-dom';
import {Cards} from "../../2_Cards";
import {Cart} from "../AppBarSearch/Cart";

export const Navigation = () => {
  return (
     <nav>
       <Link to="/">
         <Cards />
       </Link>
       <Link to="/cart">
         <Cart />
       </Link>
     </nav>
  );
};
