const express = require('express')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: 'fe', dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/about', (req, res) => {
      return app.render(req, res, '/about', req.query)
    })

    server.get('/videos/:id', (req, res) => {
      return app.render(req, res, '/videos', { id: req.params.id })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Front-End Ready on http://localhost:${port}`)
    })
  })