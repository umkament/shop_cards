import "./App.css";
import {Header} from "./components/1_Header";
import {Cards} from "./components/2_Cards";
import {Cart} from "./components/1_Header/AppBarSearch/Cart";
import {Footer} from "./components/3_Footer";
import {Route, Routes} from 'react-router-dom';
import {Container} from "@mui/material";


function App() {


  return (
     <div className='app'>
       <Header/>
<Container>
  <Routes>
    <Route path='/' element={<Cards/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='*' element={<h1>404: PAGE NOT FOUND</h1>}/>
  </Routes>
</Container>
       <Footer/>
     </div>


  );
}

export default App;
