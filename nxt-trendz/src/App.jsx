import {Navigate, Route, Routes} from 'react-router-dom'

import Login from './pages/Login/index.jsx'
import Products from './pages/Products/index.jsx'
import ProductDetails from './pages/ProductDetails/index.jsx'
import NotFound from './pages/NotFound/index.jsx'

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to="/products"
            replace
          />
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/not-found"
        element={<NotFound />}
      />

      <Route
        path="*"
        element={
          <Navigate
            to="/products"
            replace
          />
        }
      />
    </Routes>
  )
}

export default App