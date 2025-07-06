import { useState } from "react";
import "./Index.scss";

function Index() {
  const [menu, setMemu] = useState("아메리카노");
  
  const [price, setPrice] = useState(4500);

  const [amount, setMount] = useState(1);

  const handleClick = (type: boolean) => {
    if (type) {
      setMount((amount) => amount+1)
    } else if (!type && amount > 1) {
      setMount((amount) => amount-1)
    }
  }

  return (
    <div>
      <div className="menu coffe">
        <div className="menu_left">
          <div className="menu_name">{menu}</div>
          <div className="menu_price">{price}원</div>
          <div className="menu_amount_controler">
            <button className="down_mount" onClick={() => handleClick(false)}>◀︎</button>
            {amount}
            <button className="up_mount" onClick={() => handleClick(true)}>▶︎</button>
          </div>
        </div>
        <div className="menu_right">
          <img className="menu_img" src="https://placehold.co/70x70" alt="coffe" />
        </div>
      </div>
    </div>
  )
}

export default Index;