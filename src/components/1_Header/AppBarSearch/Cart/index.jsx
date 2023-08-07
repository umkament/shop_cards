import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from "react-router-dom";

export const Cart = () => {
  console.log("Cart");

  const cartItems = useSelector((state) => state.cart);

  return (
    <>
      <h3>Cart</h3>

      <MenuItem>
        <Link to='/cart'>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        </Link>
        <p>Cart</p>
      </MenuItem>


      <div>
        {cartItems.map((item) => (
           <div key={item.id}>
             {item.title} - {item.quantity}
           </div>
        ))}
      </div>

    </>
  );
};
