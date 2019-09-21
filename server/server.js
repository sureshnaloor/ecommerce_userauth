const express = require('express');
require('./helpers/passport')

const authRoutes = require('./routes/authRoutes')

const app = express();

authRoutes(app)

app.listen(process.env['PORT'] || 5000, () => {
    console.log("server started in port 5000")
})
