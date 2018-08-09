const error = require('../../helpers/error')
const db = require('../../db/db.json')
const _ = require('lodash')

exports.getAllVideos = (req, res, next) => {

  const data = db.videos;

  const filterData = _.filter(_.orderBy(data, ['view'], ['desc']), (v, i) => i < 10)

  res.status(200).json(filterData)
}

exports.getDetailVideo = (req, res, next) => {

  const data = db.videos;

  let idVideo = req.params.id

  const video = _.find(data, (v) => v.id === parseInt(idVideo, 10))

  if (_.isEmpty(video)) {
    return error(404, 'This video can not be found', next)
  }

  res.status(200).json(video)
}
