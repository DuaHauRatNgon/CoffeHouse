import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/layout/App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
// import { router } from './App/router/Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>

  // <React.StrictMode>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={ <App /> }>
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // </React.StrictMode>,

  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
