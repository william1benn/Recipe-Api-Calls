const express = require('express');
const router  = express.Router();
const axios = require("axios");
const { RecipeSearchClient } = require('edamam-api');
 
const client = new RecipeSearchClient({
  appId: 'b295dcbf',
  appKey: '109f31959ded0e0acaa4c2aa99752c08'
});
 


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/ing/:search',(req,res,next)=>{

  client.search({ query: req.params.search })
  .then((call)=>{
    res.json(call)
  }).catch((error)=>{
    console.log(error)
  })
})

module.exports = router;
