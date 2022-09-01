const express = require('express')
const colors = require('colors')
const exphbs = require('express-handlebars')
const application = express()
const { engine } =require('express-handlebars');
const path = require('path')
const bodyParser = require('body-parser')


// set static fiolder
application.use(express.static(path.join(__dirname, 'public')))
application.use(express.static("asset"));
//  set middleware for express
application.engine('handlebars', engine());
application.set('view engine', 'handlebars');
application.set('views', './views');
const request =require('request')
application.use(bodyParser.urlencoded({extended: false}))

// key pk_b46406f0b6fe4e85a23d6f3b118a5796
function stockAPI(resApi,ticker) {
    request('https://cloud.iexapis.com/v1/stock/'+ticker+'/quote?token=pk_b46406f0b6fe4e85a23d6f3b118a5796', {
        json: true
    },(err, res, body) => {
        if(err){return console.log(err.blue.bold)}
        if(res.statusCode === 200){
           resApi(body)
        }
    })
}

application.get('/', (req, res) => {
        stockAPI((doneAp) => {
            res.render('home', {
                stuff: doneAp
            })
        },"goog")
})


application.post('/', (req, res) => {
    stockAPI((doneAp) => {
        // const postRequest = req.body.stock_value
        res.render('home', {
            stuff: doneAp,
            // posted_data: postRequest
        })
    },req.body.stock_value)
})

application.get('/about.html', (req, res) => {
    res.render('about', {
        stuff: "this is the stff hard work brings"
    })
})



const PORT = process.env.PORT || 5000
application.listen(PORT, () =>{
    console.log(`SERVER IS RUNNING ON ${PORT} ENJOY...`.cyan.bold)
})