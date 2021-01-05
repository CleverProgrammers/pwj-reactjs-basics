import { useState } from 'react';
import './App.css';
import CartItems from './CartItems'
import CartTotal from './CartTotal'
import items from './Data'

function App() {

  const [ cartItems, setCartItems ] = useState(items);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Amazon Cart</h1>
      </div>
      <div className="App-main">
        <CartItems 
          items={cartItems}
          setCartItems={setCartItems}
        />
        <CartTotal 
          items={cartItems}
        s/>
      </div>
    </div>
  );
}

export default App;
