const error = require('./error')

module.exports = (app) => {
  // If no route is matched, this route will be triggered
  app.use((req, res, next) => {
    return error(404, 'Not Found', next)
  })

  // All error will be handled by this function and raise message for client
  /* eslint no-unused-vars: 0 */
  app.use((err, req, res, next) => {
    return res.status(err.status || 500).send({
      status: err.status,
      message: err.message,
    })
  })
}