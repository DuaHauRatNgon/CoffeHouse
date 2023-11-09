import { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, CssBaseline, Slider } from '@mui/material';
// import { Route, Routes } from 'react-router-dom';
import Sliders from "./Slider/Sliders"
import Catalog from '../../Features/Catalog';

function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = async () => {
    const res = await axios.get("http://localhost:5085/api/Products")
    setProducts(res.data)
  }

  return (
    <Fragment>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header />
      {/* <Sliders/> */}
      <Catalog />
    </Fragment>
  )
}

export default App
