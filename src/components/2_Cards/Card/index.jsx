import {useDispatch, useSelector} from "react-redux";
import {addProductToCart, removeProductToCart} from "../../../slices/cartSlice";
import {Button} from "@mui/material";
import './index.css'
import {useState} from "react";
import {Link} from "react-router-dom";

export const Card = ({ product }) => {
  console.log("Card");

  let { title, thumbnail, description, id,images } = product;
  const cartItem = useSelector((state) => state.cart.find(product=>product.id === id ));
  const dispatch = useDispatch();
  const [imageLink, setImageLink] = useState(thumbnail)

  const addHandler = () => {
    dispatch(addProductToCart(product));
  };
  const removeHandler = () => {
    dispatch(removeProductToCart(id));
  };

  const changeImg = (newUrl) => {

    setImageLink(newUrl)

  }

  return (
     <div className="card">
       <div>
         <Button variant='outlined' onClick={()=>console.log(thumbnail)}>????</Button>
       </div>




           <img className='main-image' src={imageLink} alt={description} />

         <div>
           {images.map(image=><img className='small-image' onClick={()=>changeImg(image)} key={image} src={image} alt={`dop info + ${title}`}/>)}

         </div>



       <h3>
         {title}
       </h3>

       <div className='description'>
         <p>{description}</p>
       </div>

       <Button variant='outlined' onClick={addHandler}> +</Button>
       {cartItem?.quantity}
       {cartItem?.quantity && <Button variant='outlined' onClick={removeHandler}> -</Button>}
<Link to={`/product/${id}`}>details</Link>
     </div>

  );
};
