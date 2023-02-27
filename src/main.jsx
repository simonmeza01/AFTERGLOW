import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage'
import HomePage from './pages/HomePage/HomePage'
import CatalogPage from "./pages/CatalogPage/CatalogPage"
import {CATALOG_URL, HOME_URL, LOGIN_URL, REGISTER_URL, USER_PAGE,} from "./constants/urls";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<HomePage/>}/>
        <Route path={REGISTER_URL} element={<RegisterPage/>}/>
        <Route path={LOGIN_URL} element={<LoginPage/>}/>
        <Route path={USER_PAGE} element={<h1>UserPage</h1>}/>
        <Route path={CATALOG_URL} element = {<CatalogPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
    


