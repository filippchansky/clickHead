import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from './store';
import { setProducts } from './store/slice/productSlice';
import { getProduct } from './api';
import { Cart } from './models';

function App() {
  const dispatch = useDispatch()
  const [response, setResponse] = useState([])

  useEffect(() => {
    getProduct(setResponse)
  }, [])

  useEffect(() => {
    if (response.length > 0) {
      dispatch(setProducts(response))
    }
  }, [response, dispatch])
  const data = useSelector((state:RootState) => state.product)

  console.log(data.products)
  

  return (
    <div className="App">
      {data?.products.map(elem => (
        elem.products.map(product => (
          <h1 key={product.id}>{product.id}</h1>
        ))
      ))}
    </div>
  );
}

export default App;
