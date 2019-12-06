import express from 'express'
import db from '../db/database'
import Product from '../domain/courses'

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at Courses API ');next();})

router.get('/:courseId', (req, res, next) => {
  let pid = req.params.courseId
  db.query(Product.getCourseByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Course found.',
          product: data[0],
        })
      } else {
        res.status(200).json({
          message: 'Course Not found.',
        })
      }
    }
  })
})

router.get('/', (req, res, next) => {
  db.query(Product.getAllCourseSQL(), (err, data) => {
    console.log(err)
    if (!err) {
      res.status(200).json(data)
    }
  })
})
/*router.post('/', (req, res, next) => {
  //read product information from request
  let product = new Product(req.body.prd_name, req.body.prd_price)

  db.query(product.addCourseSQL(), (err, data) => {
    res.status(200).json({
      message: 'Course added.',
      courseId: data.insertId,
    })
  })
})*/

//Get Cart Id
router.get('/cart/:customerId', (req, res, next) => {
  let cid = req.params.customerId
  db.query(Product.getCartByIdSQL(cid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        console.log('data',data)
        res.status(200).json({
          message: 'Cart found.',
          product: data[0],
        })
      } else {
        res.status(200).json({
          message: 'Cart Not found.',
        })
      }
    }
  })
})
router.post('/cart/:cartId', (req, res, next) => {
  let cartId = req.params.cartId
  //read product information from request
  let product = new Product(cartId, req.body.courseId, req.body.classroomId)
  console.log('router',cartId,req.body)
  db.query(product.addCourseCartSQL(), (err, data) => {
    res.status(200).json(
     {
      message: 'CourseCart added.',
      courseId: data,
     /* data = {
              "fieldCount": 0,
              "affectedRows": 1,
              "insertId": 4,
              "info": "",
              "serverStatus": 2,
              "warningStatus": 0
              } */
     }
    )
  })
})

router.put('/:courseId', (req, res, next) => {
  let pid = req.params.courseId
   let product = new Product(req.body.name, req.body.price)
   db.query(product.updateCourseByIdSQL(pid), (err, data) => {
     if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Course found.',
          product: data,
        })
      } else {
        res.status(200).json({
          message: 'Course Not found.',
        })
      }
    }
  })
})

router.delete('/:courseId', (req, res, next) => {
  let pid = req.params.courseId

  db.query(Product.deleteCourseByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `Course deleted with id = ${pid}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'Course Not found.',
        })
      }
    }
  })
})
router.delete('/cart/:cartId', (req, res, next) => {
  let cartId = req.params.cartId
  db.query(Product.deleteCourseCartByIdSQL(cartId), (err, data) => {
    console.log('dataaaaaa',data)
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `Course deleted with id = ${cartId}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'Course Not found.',
        })
      }
    }
  })
})


module.exports = router
