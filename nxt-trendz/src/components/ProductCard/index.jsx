import { Link } from 'react-router-dom'

import './index.css'

const ProductCard = ({product}) => {
  const {
    id,
    title,
    brand,
    price,
    rating,
    image_url: imageUrl,
  } = product

  return (
    <article className="product-card">
      <Link to={`/products/${id}`}>
        <div className="product-image-container">
          <img
            src={imageUrl}
            alt={title}
            className="product-image"
          />
        </div>

        <div className="product-content">
          <h2 className="product-title">
            {title}
          </h2>

          <p className="product-brand">
            {brand}
          </p>

          <div className="product-footer">
            <p className="product-price">
              ₹{price}
            </p>

            <span className="product-rating">
              {rating} ★
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard