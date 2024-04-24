const route = require('express').Router();
const postReq = require('../controllers/upload');
const upload = require('../middleware/fileStorage');

route.post('/',upload.upload.single('uploadFile'),postReq.postReq)

module.exports = route;