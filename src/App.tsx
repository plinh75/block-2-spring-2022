import { useEffect ,useState } from 'react'
import './App.css'
import {Navigate, NavLink, Routes, Route} from 'react-router-dom'
import ShowInfo from './components/ShowInfo'

import type {Product} from './types/product'
import {add, list} from './api/product'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import DashboardPage from './pages/DashboardPage'
import AdminLayout from './pages/layouts/AdminLayout'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import ProductManager from './pages/ProductManager'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/ProductAdd'

function App() {
  const [products, setProducts] = useState<{_id: number, name: string}[]>([])
  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    }
    getProducts();
  }, [])

  const onHandleAdd = async (product:any) => {
    console.log('app.js', product);
    const { data } = await add(product) //api
    setProducts([...products, data])
  }
  
  return ( <div className="App">
    <header>
      <ul>
        <li><NavLink to="/">Home page</NavLink></li>
        <li><NavLink to="/product">Product page</NavLink></li>
        <li><NavLink to="/about">About page</NavLink></li>
      </ul>
    </header>
    <main>
    <Routes>
              <Route path="/" element={<WebsiteLayout />}>
                  <Route index element={<HomePage />} />
                    <Route path="product" element={<ProductPage />}  />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/product/add" element={<ProductAdd name="Dat" onAdd={onHandleAdd} />} />
              </Route>
              <Route path="admin" element={<AdminLayout />}>
                  <Route index element={<Navigate to="dashboard" />} />
                  <Route path="dashboard" element={<DashboardPage />} />
              </Route>
            </Routes>
    </main>
  </div>
  )
}

export default App
