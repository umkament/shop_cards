import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Button} from "@mui/material";
import {Card} from "./Card";
import './index.css'

export const Cards = ({ product }) => {
  console.log("Cards");

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const cartItems = useSelector((state) => state.cart);
  const promise = async () => {
    try {
      let res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      setProducts(data.products);
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    promise();
  }, []);

  console.log(products);

  return (
     <>
       <h1>Карточки товара</h1>
       <Button variant='outlined' style={{margin: '20px'}} onClick={() => console.log(cartItems)}>???</Button>
<div className='cardRow'>
  {products.map((product) => (
    // <Paper elevation={5} style={{margin: '20px', padding: '20px'}}>
       <Card key={product.id}
             product={product}/>
    // </Paper>
  ))}
</div>
     </>


  );
};
