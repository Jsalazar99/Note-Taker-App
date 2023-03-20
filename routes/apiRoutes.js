const router = require('express').Router();
const store = require('./db/store');

// GET method for reading notes
router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        // catch error 404 response 
        .catch((err) => res.status(404).json(err));

});
// POST method for add notes
router.post('/notes', (req, res) => {
    store
        .postNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(404).json(err));
});

//  DELETE notes function here 
//  router.delete('/api/notes/:id', { });


// export router file
module.exports = router;