const express = require('express');

const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User')  // order is important this should come before passport import

require('./helpers/passport')



mongoose.connect(keys.mongoURI);

const authRoutes = require('./routes/authRoutes')

const app = express();

authRoutes(app)

app.listen(process.env['PORT'] || 5000, () => {
    console.log("server started in port 5000")
})
