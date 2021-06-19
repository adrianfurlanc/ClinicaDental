const express = require('express');
const db = require('./config/mongoose.js');
const app = express();
const port = 3005;
const router = require('./router');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());
app.use(router);


//Connecting to the database
db.then(()=>{
//Starting server
    app.listen(port, ()=> console.log(`Servidor levantado en http://localhost:${port}`));
})
.catch((err)=> console.log(err.message));
