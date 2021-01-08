//esversion:6
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = 5001;
app.use(express.json({extended: false}));

//Connect to database
connectDB();

//Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'))

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));