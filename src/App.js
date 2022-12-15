
import './App.css';
import React, {useState} from 'react';
import {useEffect} from 'react';
import Navbar from './components/Navbar';
import Phone from './components/Phone';
import Cart from './components/Cart';
import Footer from './components/Footer';
function App() {
  const [show, setShow]=useState(true)
  const [cart, setCart]=useState([])
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    const data=localStorage.getItem('cart')
    setCart(JSON.parse(data))
  }, []);
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  });

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])

	}

  return (
   <React.Fragment>
    <Navbar size={cart.length} setShow={setShow}/>
    {
      show ? <Phone handleClick={handleClick}/> :   <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
    }
    
    {
      warning && <div className='warning'>Item is added in the cart.</div>
    }
    <Footer />
   </React.Fragment>
  );
}

export default App;
