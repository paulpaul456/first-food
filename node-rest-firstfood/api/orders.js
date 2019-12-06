import express from 'express'
import db from '../db/database'
import Product from '../domain/orders'

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at Orders API ');next();})

router.get('/', (req, res, next) => {
  db.query(Product.getAllOrderSQL(), (err, data) => {
    if (!err) {
      res.status(200).json(data)
    }
  })
})

router.get('/all/:id/:time1/:time2/:sortlist', (req, res, next) => {
  let cid = req.params.id
  let time1 = req.params.time1
  let time2 = req.params.time2
  let sort1= req.params.sortlist
  console.log('cid'+cid)
  console.log('time1'+time1)
  console.log('time2'+time2)
  console.log('sort1'+sort1)

   let sql = `SELECT * FROM main_order AS a JOIN pm_event AS b ON a.pm_event = b.pm_id WHERE customer_information = ${cid} ORDER BY a.order_id ${sort1}`
  if(time1>=13){
    sql = `SELECT * FROM main_order AS a JOIN pm_event AS b ON a.pm_event = b.pm_id WHERE customer_information = ${cid} ORDER BY a.order_id ${sort1}`
  }else{
    sql =`SELECT * FROM main_order AS a JOIN pm_event AS b ON a.pm_event = b.pm_id WHERE customer_information = 1 AND (a.create_at >= '2019-${time1}-30' AND a.create_at < '2019-${time2}-30') ORDER BY a.order_id ${sort1}`
  }
  console.log('sql'+sql)
  let sql1 = `SELECT * FROM main_order AS a JOIN course_order AS b ON a.order_id = b.main_order JOIN course AS c ON b.course = c.course_id JOIN class_room as d ON c.room_sid = d.room_sid WHERE customer_information = ${cid}`
  if(time1>=13){
    sql1 = `SELECT * FROM main_order AS a JOIN course_order AS b ON a.order_id = b.main_order JOIN course AS c ON b.course = c.course_id JOIN class_room as d ON c.room_sid = d.room_sid WHERE customer_information = ${cid}`
  }else{
    sql1 =`SELECT * FROM main_order AS a JOIN course_order AS b ON a.order_id = b.main_order JOIN course AS c ON b.course = c.course_id JOIN class_room as d ON c.room_sid = d.room_sid WHERE customer_information = ${cid} AND (a.create_at >= '2019-${time1}-30' AND a.create_at < '2019-${time2}-30') ORDER BY a.order_id ${sort1}`
  }
  // let sql1 = `SELECT * FROM main_order AS a JOIN course_order AS b ON a.order_id = b.main_order JOIN course AS c ON b.course = c.course_id WHERE customer_information = ${cid}`
  // if(time1>=13){
  //   sql1 = `SELECT * FROM main_order AS a JOIN course_order AS b ON a.order_id = b.main_order JOIN course AS c ON b.course = c.course_id WHERE customer_information = ${cid}`
  // }else{
  //   sql1 =`SELECT * FROM main_order AS a JOIN course_order AS b ON a.order_id = b.main_order JOIN course AS c ON b.course = c.course_id WHERE customer_information = ${cid} AND (a.create_at >= '2019-${time1}-01' AND a.create_at < '2019-${time2}-01') ORDER BY a.order_id ${sort1}`
  // }
  let sql2 = `SELECT * FROM main_order AS a JOIN fm_goods_order AS b ON a.order_id = b.main_order JOIN farmer_product AS c ON b.farmer_product = c.sid WHERE customer_information = ${cid}`
  if(time1>=13){
    sql2 = `SELECT * FROM main_order AS a JOIN fm_goods_order AS b ON a.order_id = b.main_order JOIN farmer_product AS c ON b.farmer_product = c.sid WHERE customer_information = ${cid}`
  }else{
    sql2 =`SELECT * FROM main_order AS a JOIN fm_goods_order AS b ON a.order_id = b.main_order JOIN farmer_product AS c ON b.farmer_product = c.sid WHERE customer_information = ${cid} AND (a.create_at >= '2019-${time1}-30' AND a.create_at < '2019-${time2}-30') ORDER BY a.order_id ${sort1}`
  }
  let sql3 = `SELECT *,c.name AS rrname,e.name AS ffname
  FROM main_order AS a 
  JOIN dn_goods_order AS b ON a.order_id = b.main_order 
  JOIN dinner_list AS c ON b.dinner_list = c.dinner_id 
  JOIN restaurant AS d ON b.restaurant_id = d.restaurant_id 
  JOIN farmer_product as e ON b.farmer_product = e.sid 
  WHERE customer_information = ${cid}`
  if(time1>=13){
    sql3 = `SELECT *,c.name AS rrname,e.name AS ffname
    FROM main_order AS a 
    JOIN dn_goods_order AS b ON a.order_id = b.main_order 
    JOIN dinner_list AS c ON b.dinner_list = c.dinner_id 
    JOIN restaurant AS d ON b.restaurant_id = d.restaurant_id 
    JOIN farmer_product as e ON b.farmer_product = e.sid 
    WHERE customer_information = ${cid}`
  }else{
    sql3 =`SELECT *,c.name AS rrname,e.name AS ffname
    FROM main_order AS a 
    JOIN dn_goods_order AS b ON a.order_id = b.main_order 
    JOIN dinner_list AS c ON b.dinner_list = c.dinner_id 
    JOIN restaurant AS d ON b.restaurant_id = d.restaurant_id 
    JOIN farmer_product as e ON b.farmer_product = e.sid 
    WHERE customer_information = ${cid} AND (a.create_at >= '2019-${time1}-30' AND a.create_at < '2019-${time2}-30') ORDER BY a.order_id ${sort1}`
  }
  // let sql3 = `SELECT *,c.name AS rrname FROM main_order AS a JOIN dn_goods_order AS b ON a.order_id = b.main_order JOIN dinner_list AS c ON b.dinner_list = c.dinner_id JOIN restaurant AS d ON b.restaurant_id = d.restaurant_id WHERE customer_information = ${cid}`
  // if(time1>=13){
  //   sql3 = `SELECT *,c.name AS rrname FROM main_order AS a JOIN dn_goods_order AS b ON a.order_id = b.main_order JOIN dinner_list AS c ON b.dinner_list = c.dinner_id JOIN restaurant AS d ON b.restaurant_id = d.restaurant_id WHERE customer_information = ${cid}`
  // }else{
  //   sql3 =`SELECT *,c.name AS rrname FROM main_order AS a JOIN dn_goods_order AS b ON a.order_id = b.main_order JOIN dinner_list AS c ON b.dinner_list = c.dinner_id JOIN restaurant AS d ON b.restaurant_id = d.restaurant_id WHERE customer_information = ${cid} AND (a.create_at >= '2019-${time1}-01' AND a.create_at < '2019-${time2}-01') ORDER BY a.order_id ${sort1}`
  // }
  let output = {}
  db.queryAsync(sql)
  .then(results=>{
    output.orderlist=results
    return db.queryAsync(sql1)
  })
  .then(results=>{
    output.courseorderlist=results
    return db.queryAsync(sql2)
  })
  .then(results=>{
    output.forderlist=results
    return db.queryAsync(sql3)
  })
  .then(results=>{
    output.rorderlist=results
    res.json(output)
    console.log('outputorderrr')
    console.log(output)
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
  })
})

router.get('/:orderId', (req, res, next) => {
  let pid = req.params.orderId
  db.query(Product.getOrderByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Order found.',
          order: data,
        })
      } else {
        res.status(200).json({
          message: 'Order Not found.',
        })
      }
    }
  })
})

router.post('/', (req, res, next) => {
  //read product information from request
  let product = new Product(req.body.prd_name, req.body.prd_price)

  db.query(product.addOrderSQL(), (err, data) => {
    res.status(200).json({
      message: 'Order added.',
      orderId: data.insertId,
    })
  })
})

router.put('/:orderId', (req, res, next) => {
  let pid = req.params.orderId
  let product = new Product(req.body.name, req.body.price)
  db.query(product.updateOrderByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Order found.',
          order: data,
        })
      } else {
        res.status(200).json({
          message: 'Order Not found.',
        })
      }
    }
  })
})

router.delete('/:orderId', (req, res, next) => {
  let pid = req.params.orderId

  db.query(Product.deleteOrderByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `Order deleted with id = ${pid}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'Order Not found.',
        })
      }
    }
  })
})

module.exports = router
