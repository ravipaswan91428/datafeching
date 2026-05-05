import { useEffect, useState } from 'react'
import ProductList from './components/productList';


function App() {

  const [product, setProducts] = useState([]);

  useEffect(()=>{
    fetch('https://api.freeapi.app/api/v1/public/randomproducts/product/random')
    .then(res => res.json())
    .then((data)=>{
      setProducts(data.data);
      console.log(data.data);
    })
  },[])
  

  return (
    <>
      <h1>Random Product Lists</h1>
      <ProductList product={product}/>
    </>
  )
}

export default App
