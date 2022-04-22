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


router.get('/', API.fetchAllOurTeam);
router.get('/:id', API.fetchOurTeamByID);
router.post('/', upload, API.createOurTeam);
router.patch('/:id', upload, API.updateOurTeam);
router.delete('/:id', API.deleteOurTeam);




module.exports = router;