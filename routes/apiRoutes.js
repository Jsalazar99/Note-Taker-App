const router = require('express').Router();

// GET POST methods 
router.get('', (req, res) => {
    
    .then {
        //  .then response goes here 

    }
    // catch errors 
    .catch ((err) => res.status(404).json(err));

});


//  DELETE notes function here 
//DELETE /api/notes/:id

// export router file
module.exports = router;