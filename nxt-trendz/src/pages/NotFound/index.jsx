import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="not-found-page">
      <section className="not-found-container">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <Link to="/products">
          Go to Products
        </Link>
      </section>
    </main>
  )
}

export default NotFound