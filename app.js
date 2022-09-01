const express = require('express')
const colors = require('colors')
const exphbs = require('express-handlebars')
const application = express()
const { engine } =require('express-handlebars');
const path = require('path')


// set static fiolder
application.use(express.static(path.join(__dirname, 'public')))

//  set middleware for express
application.engine('handlebars', engine());
application.set('view engine', 'handlebars');
application.set('views', './views');

application.get('/', (req, res) => {
    res.render('home')
})



const PORT = process.env.PORT || 5000
application.listen(PORT, () =>{
    console.log(`SERVER IS RUNNING ON ${PORT} ENJOY...`.cyan.bold)
})