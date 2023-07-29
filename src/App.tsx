import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from './store';
import { setProducts } from './store/slice/productSlice';
import { getProduct } from './api';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import CatalogPage from './pages/CatalogPage';
import BasketPage from './pages/BasketPage';

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

  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/catalog' element={<CatalogPage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
      </Routes>
    </>
  );
}

export default App;
