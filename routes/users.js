const express = require('express');
const router = express.Router();

router.get('/:name',function(req,res){
    /* const {name} = req.params;

    res.send(`hello ${name}`); */

    res.render('users',{
        name: req.params.name
    })
});

module.exports = router;