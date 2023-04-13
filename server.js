const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

// Connect Database
connectDB();

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production


const PORT =  5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
