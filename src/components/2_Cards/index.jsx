import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Button, Grid, Paper} from "@mui/material";
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
<Grid container>
  {products.map((product) => (
     <Grid item xs={12} sm={6} md={4} lg={3} spacing={3}>
       <Card key={product.id}
             product={product}/>

     </Grid>

))} </Grid>
     </>


  );
};
