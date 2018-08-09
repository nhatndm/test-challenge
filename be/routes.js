const videoApi = require('./api/v1/video')
const express = require('express')

module.exports = (app) => {
  const apiRoutes = express.Router()

  apiRoutes.get('/videos', videoApi.getAllVideos)
  apiRoutes.get('/videos/:id', videoApi.getDetailVideo)

  app.use('/api/v1', apiRoutes)
}