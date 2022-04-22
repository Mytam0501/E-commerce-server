const express = require('express')
const router = express.Router();
const API = require('../app/controllers/api')
const multer = require('multer');

//multer middlewares
let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../server/src/uploads')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '_' + file.originalname);
    }

})
let upload = multer({
    storage: storage,
}).single('image')



router.get('/', API.fetchAllBlog);
router.get('/:slug', API.fetchBlogByID);
router.post('/', upload, API.createBlog);
router.patch('/:id', upload, API.updateBlog);
router.delete('/:id', API.deleteBlog);


module.exports = router;