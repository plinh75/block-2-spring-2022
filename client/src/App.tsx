import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, NavLink, Routes, Route } from 'react-router-dom'
import ShowInfo from './components/ShowInfo'

import type { ProductType } from './types/product'
import { add, list, remove, update } from './api/product'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import DashboardPage from './pages/DashboardPage'
import AdminLayout from './pages/layouts/AdminLayout'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import ProductManager from './pages/ProductManager'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import PrivateRouter from './components/PrivateRouter'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])

  const onHandleAdd = async (product: any) => {
    const { data } = await add(product) //api
    setProducts([...products, data])
  }

  const onHandleRemove = async (id: any) => {
    remove(id)
    setProducts(products.filter(item => item.id !== id))
  }

  const onHandleUpdate = async (product: ProductType) => {
    try {
      const { data } = await update(product)
      setProducts(products.map(item => item.id === data.id ? product : item))
    } catch (error) {

    }
  }

  return (<div className="App">
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
          <Route path="product">
            <Route index element={<ProductPage />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Route>

        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="product">
            <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
            <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
          </Route>
        </Route>

        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        </Routes>
    </main>
  </div>
  )
}

export default App
