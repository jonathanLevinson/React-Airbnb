var express = require('express');
var router = express.Router();
let dataModel = require('../model/dataModel')


router.get('/locations/:id', function(req, res, next) {
    let data = dataModel.getLocations(req.params.id,(data) => res.json(data));        
});

router.get('/cities', function(req, res, next) {                
    dataModel.getCities((data) => res.json(data));      
});

module.exports = router;