const express = require('express')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT

    // Middlewares
    this.middlewares()

    this.routes()
  }

  middlewares() {
    //   Directorio publico
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.json({
        msg: 'get API',
      })
    })
    this.app.put('/api', (req, res) => {
      res.status(400).json({
        msg: 'put API',
      })
    })
    this.app.post('/api', (req, res) => {
      res.status(201).json({
        msg: 'post API',
      })
    })
    this.app.delete('/api', (req, res) => {
      res.json({
        msg: 'delete API',
      })
    })
    this.app.patch('/api', (req, res) => {
      res.json({
        msg: 'patch API',
      })
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port)
    })
  }
}

module.exports = Server
