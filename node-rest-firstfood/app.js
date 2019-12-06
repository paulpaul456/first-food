import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'


import test from './api/test'
import carts from './api/carts'
import orders from './api/orders'
import courses from './api/courses'
import farmers from './api/farmers'
import members from './api/members'
import comments from './api/comments'
import classrooms from './api/classrooms'
import restaurants from './api/restaurants'
import dinnerProducts from './api/dinnerProducts'
import farmerProducts from './api/farmerProducts'
import forum from './api/forums'
import collection from './api/collection'
import search from './api/search'

import goods from './api/goods'

import session from 'express-session'


const app = express()


//session 的 middleware
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: 'sdasdfasf',
  cookie: {
      maxAge: 1200000,
  } 
}));
//建立白名單
const whitelist = ['http://localhost:3000', undefined, 'http://localhost:6003'];        //undefined 是同一台主機 origin: undefined, 允許的server都放這
const corsOptions = {
    credentials: true,
    origin: function(origin, callback){
        console.log('origin: ' + origin);
        console.log(new Date());
        if(whitelist.indexOf(origin) >= 0){
            console.log('允許: ');
            callback(null, true);   //允許
           
        }else{
            console.log('不不不不: ');
            // callback(new Error('Not allowed by CORS'));  //這樣用伺服器會直接停掉
            callback(null, false);  //不允許 allow-credentials
        }
    }
}
app.use(cors(corsOptions))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

//設定靜態的資料夾
app.use(express.static('public'))

app.use('/api/test', test)
app.use('/api/goods', goods)
app.use('/api/orders', orders)
// app.use('/api/carts', carts)
// app.use('/api/orders', orders)
app.use('/api/courses', courses)
app.use('/api/farmers', farmers)
// app.use('/api/members', members)
app.use(require(__dirname + '/api/members'))
// app.use('/api/comments', comments)
app.use('/api/collection', collection)
app.use('/api/classrooms', classrooms)
app.use('/api/restaurants', restaurants)
app.use('/api/farmerProducts', farmerProducts)
app.use('/api/forum', forum)
app.use('/api/dinnerProducts', dinnerProducts)
app.use('/api/search', search)
app.use(require(__dirname + '/api/carts'))


app.use('/',(req, res, next) => {
  res.send("Hello Express")
})
//if we are here then the specified request is not found
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

//all other requests are not implemented.
app.use((err, req, res, next) => {
  res.status(err.status || 501)
  res.json({
    error: {
      code: err.status || 501,
      message: err.message,
    },
  })
})

module.exports = app
