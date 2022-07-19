import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api';

    // handles GET requests to /api/movies
    this.get("/transactions", () => (
      [
        {
          id: 1,
          name: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food'
        }
      ]
    ))
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
