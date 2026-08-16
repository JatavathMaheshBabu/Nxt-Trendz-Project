import {Navigate, Route, Routes} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute/index.jsx'

import Login from './pages/Login/index.jsx'
import Products from './pages/Products/index.jsx'
import ProductDetails from './pages/ProductDetails/index.jsx'
import NotFound from './pages/NotFound/index.jsx'

const App = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />

      <Route
        path="/products/:id"
        element={
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/not-found"
        element={<NotFound />}
      />

      <Route
        path="/"
        element={
          <Navigate
            to="/login"
            replace
          />
        }
      />

      <Route
        path="*"
        element={
          <Navigate
            to="/not-found"
            replace
          />
        }
      />
    </Routes>
  )
}

export default App