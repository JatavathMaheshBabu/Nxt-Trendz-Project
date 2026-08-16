import {getToken} from './auth'

const API_BASE_URL = 'https://apis.ccbp.in'

const request = async (endpoint, options = {}) => {
  const token = getToken()

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,

    headers: {
      'Content-Type': 'application/json',

      ...(token && {
        Authorization: `Bearer ${token}`,
      }),

      ...options.headers,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.error_msg || 'Something went wrong',
    )
  }

  return data
}

export const loginUser = credentials =>
  request('/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })

export const fetchProducts = ({
  search = '',
  category = '',
  rating = '',
  sortBy = 'PRICE_HIGH',
} = {}) => {
  const params = new URLSearchParams({
    search,
    sort_by: sortBy,
  })

  if (category) {
    params.set('category', category)
  }

  if (rating) {
    params.set('rating', rating)
  }

  return request(`/products?${params.toString()}`)
}

export const fetchProductDetails = id =>
  request(`/products/${id}`)