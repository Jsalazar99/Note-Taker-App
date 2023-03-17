// import Express and other NPM packages
const express = require('express');
// import Routing files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// start Express app and port
const app = express();
const PORT = process.env.PORT || 3001;

// API Routing and middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listen for server on port 3001
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
