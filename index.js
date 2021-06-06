const express = require('express');
const db = require('./config/mongoose.js');
const app = express();
const port = 3000;
const router = require('./router');
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());
app.use(router);


//Connecting to the database
db.then(()=>{
//Starting server
    app.listen(port, ()=> console.log(`Servidor levantado en http://localhost:${port}`));
})
.catch((err)=> console.log(err.message));
