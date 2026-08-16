import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import ProductCard from '../../components/ProductCard'

import { fetchProducts } from '../../services/api'

import './index.css'

const Products = () => {
  const [products, setProducts] = useState([])

  const [searchInput, setSearchInput] = useState('')
  const [search, setSearch] = useState('')

  const [status, setStatus] = useState('loading')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setStatus('loading')
        setErrorMessage('')

        const data = await fetchProducts({
          search,
        })

        setProducts(data.products || [])

        setStatus('success')
      } catch (error) {
        setErrorMessage(error.message)
        setStatus('error')
      }
    }

    loadProducts()
  }, [search])

  const handleSearch = event => {
    event.preventDefault()

    setSearch(searchInput.trim())
  }

  return (
    <>
      <Header />

      <main className="products-page">
        <section className="products-header">
          <div>
            <h1>All Products</h1>

            <p>
              Explore our latest collection
            </p>
          </div>

          <form
            className="search-form"
            onSubmit={handleSearch}
          >
            <input
              type="search"
              value={searchInput}
              placeholder="Search products"
              onChange={event =>
                setSearchInput(event.target.value)
              }
            />

            <button type="submit">
              Search
            </button>
          </form>
        </section>

        {status === 'loading' && <Loader />}

        {status === 'error' && (
          <section className="message-container">
            <h2>Something went wrong</h2>

            <p>{errorMessage}</p>
          </section>
        )}

        {status === 'success' &&
          products.length === 0 && (
            <section className="message-container">
              <h2>No Products Found</h2>

              <p>
                Try searching for a different product.
              </p>
            </section>
          )}

        {status === 'success' &&
          products.length > 0 && (
            <section className="products-grid">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </section>
          )}
      </main>
    </>
  )
}

export default Products