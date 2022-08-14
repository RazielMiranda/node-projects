const express = require('express');
const cors = require('cors')
const server = express();
const port = process.env.PORT || 3333

server.use(cors({origin: 'http://localhost:3334'}))
server.use(express.json())
server.use(express.urlencoded())
server.set('view engine', 'ejs');
server.set('views', './src/views');

// Routes
const ninjaRoutes = require('./src/routes/ninja');
const appRoutes = require('./src/routes/app');

server.use('/ninja', ninjaRoutes);
server.use('/', appRoutes);

server.listen(port, () => {
    console.log('Server on: port 3333');
})

module.exports = server;