import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import { loginUser } from '../../services/api'
import {
    isAuthenticated,
    setToken,
} from '../../services/auth'

import './index.css'

const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  if (isAuthenticated()) {
    return <Navigate to="/products" replace />
  }

  const handleSubmit = async event => {
    event.preventDefault()

    if (!username.trim() || !password.trim()) {
      setErrorMessage(
        'Username and password are required',
      )
      return
    }

    try {
      setIsLoading(true)
      setErrorMessage('')

      const data = await loginUser({
        username,
        password,
      })

      setToken(data.jwt_token)

      navigate('/products', {
        replace: true,
      })
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Nxt Trendz</h1>

        <p className="login-description">
          Login to continue shopping
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username
          </label>

          <input
            id="username"
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={event =>
              setUsername(event.target.value)
            }
          />

          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={event =>
              setPassword(event.target.value)
            }
          />

          {errorMessage && (
            <p className="error-message">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login