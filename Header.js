
import {moneyFormat} from '../helpers'


function Header({total, money}) {
    return (
     <>
    <div>
        {total > 0 && money - total !== 0 && 
             (
               <div className="header"> Harcayacak <span>{moneyFormat(money: money - total)} $ </span> paraniz kaldi</div>
             )}
             {total === 0 && (
                <div className="header">harcamak icin <span>{moneyFormat(money)} $ </span> paraniz var!</div>
             )}
             {money-total === 0&& (
                <div className="header"> paran bitti </div>
             )}
                <style jsx>
                {` 
                .header{
                    position: sticky;
                    top:0;
                    background: linear-gradient(to bottom,green,green yellow);
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 24px;
                    letter-spacing: 1px;

                }  
                .header span{
                  margin:0 10px;
                  font-weight: bold;
                }   
                
                `}

                </style>

      </div>
     </>
    )

  }
  
  export default Header;
