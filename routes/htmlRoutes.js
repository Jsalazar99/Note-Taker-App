const router = require('express').Router();
const path = require('path');

//  GEt method for notes html file 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });
  
  // route all URLs to index html file
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

// export router file
module.exports = router;