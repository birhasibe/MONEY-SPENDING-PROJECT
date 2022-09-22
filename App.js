import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import products from './products.json';
import Product from './components/Product';
import Basket from './components/Basket';
import Basketitem from './components/Basketitem'


 
function App() {
   
const [money , setMoney] = useState (100000)
const [basket, setBasket] = useState([])
const[ total, setTotal] = useState(0)
const resetBasket = () =>{
  setBasket([])
}

useEffect(effect: () => {
  setTotal(
    basket.reduce((acc, item) => {
    return acc+ (item.amount * (products.find(product => product.id === item.id).price))
  }, 0),
  )

}, deps: [basket])

return(
<>
 <Header total= {total} money= {money}/>
 <div className='container products'>
 {products.map(product => (
  <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product = {product} />
 ))}
 </div>
 {total >0 && (
  <Basket resetBasket={resetBasket} products= {products} total= {total} basket={basket}></Basket>
 )}
 

</>
    );
 }

 export default App;
