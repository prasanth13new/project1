import logo from './logo.svg';
import './App.css';
import Product from './Product';
import CartItem from './CartItem';
import { useState } from 'react';



function App() {
  let products = [
    {
      id: 1,
      title: "Iphone",
      price: 70000,
      isStock: true,
    },
    {
      id: 2,
      title: "Samsung",
      price: 50000,
      isStock: true,
    },
    {
      id: 3,
      title: "LG",
      price: 450000,
      isStock: false,
    },
    {
      id: 4,
      title: "Iwatch",
      price: 13000,
      isStock: true,
    },
    {
      id: 5,
      title: "Ipad",
      price: 40000,
      isStock: false,
    },
    {
      id: 6,
      title: "Ipro",
      price: 33000,
      isStock: true,
    },
    {
      id: 7,
      title: "Iwallet",
      price: 22000,
      isStock: true,
    },
  ];

  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  let showPrice = (data) => {
    setCartItems([...cartItems, data])
    setTotal(total + data.price)
  };

  let removeItem = (item) => {
let index = cartItems.findIndex(cItem => cItem.id === item.id);
cartItems.splice(index,1);
setCartItems([...cartItems])
setTotal(total - item.price)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
            {
              products.map((product) => {
                return (
                  <Product pData={product} handleShowPrice={showPrice}></Product>
                );
              })}
          </div>
        </div>
        <div className='col-lg-2'>
          <h1>Cart Items ({cartItems.length})</h1>
          <ol class="list-group list-group-numbered">
            {
              cartItems.map((item) => {
                return <CartItem removeItem={removeItem} item={item}></CartItem>
              })
            }


          </ol>
          <h2>Total : {total}</h2>
        </div>
      </div>

    </div>
  );
}

export default App;
