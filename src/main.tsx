import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createServer, Model } from 'miragejs'

createServer({ 
  models: {
    transaction: Model,

  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer WebSite',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1500,
          createAt: new Date('2021-02-25 16:44:12')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    // handles GET requests to /api/movies
    this.get("/transactions", () => (
      this.schema.all('transaction')
    ))

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
