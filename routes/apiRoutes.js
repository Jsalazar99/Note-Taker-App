const router = require('express').Router();

// GET method for reading notes
router.get('', (req, res) => {
    
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    // catch error 404 response 
    .catch ((err) => res.status(404).json(err));

});

// POST method for add notes
.addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(404).json(err));
});

//  DELETE notes function here 
//DELETE /api/notes/:id

// export router file
module.exports = router;