import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
      }}
    >
      <section>
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for does not exist.
        </p>

        <Link to="/products">
          Go to Products
        </Link>
      </section>
    </main>
  )
}

export default NotFound