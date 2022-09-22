
import Basketitem from "./basketitem"


function Basket({basket,total, products,resetBasket}) {
    return(
        <>
<div className="basket-container container">
<h3>Alisveris Detaylari</h3>
<ul>
    {basket.map(item => (
        <Basketitem  key= {item.id} item={item} product ={products.find(p => p.id === item.id)}/>
    ))}
    </ul>
        <div className="total">
        toplam : ${total}
    </div>
    <button className="basket-reset-btn" onClick={resetBasket}>sepet sifirla</button>
     
     <style jsx>{`
        .basket-container{
            padding: 20px;
            background:#fff;
            border: 1px solid #ddd;
        }
        .basket-container h3{
            font-size:20px;
            margin-bottom: 15px;
        }

        .basket-container .total{
            border-top:1px solid #ddd;
            padding-top:10px;
            margin-top: 10px;
            font-size: 10px;
            font-weight: bold;
            text-align: right;
            color: green;
            
        }
        .basket-reset-btn{
            background: #61dafb;
            height:40px;
            padding:0 20px;
            font-size: 16px;
            font-weight:500;
            cursor:pointer;

        }
        `}
     </style>

    </div>
     </>
)
}
export default Basket