const express = require('express')
const colors = require('colors')
const exphbs = require('express-handlebars')
const application = express()
const path = require('path')

//  set middleware for express
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './public');


// set static fiolder
application.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 5000
application.listen(PORT, () =>{
    console.log(`SERVER IS RUNNING ON ${PORT} ENJOY...`.cyan.bold)
})