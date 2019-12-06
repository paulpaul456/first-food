import express from 'express'
import db from '../db/database'
import Product from '../domain/test'

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at Test API ');next();})

router.get('/', (req, res, next) => {
  db.query(Product.getAllTestSQL(), (err, data) => {
    if (!err) {
      res.status(200).json(data)
    }
  })
})

router.get('/:testId', (req, res, next) => {
  let pid = req.params.testId
  db.query(Product.getTestByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Test found.',
          test: data,
        })
      } else {
        res.status(200).json({
          message: 'Test Not found.',
        })
      }
    }
  })
})

router.post('/', (req, res, next) => {
  //read product information from request
  let product = new Product(req.body.prd_name, req.body.prd_price)

  db.query(product.addTestSQL(), (err, data) => {
    res.status(200).json({
      message: 'Test added.',
      testId: data.insertId,
    })
  })
})

router.put('/:testId', (req, res, next) => {
  let pid = req.params.testId
   let product = new Product(req.body.name, req.body.price)
   db.query(product.updateTestByIdSQL(pid), (err, data) => {
     if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Test found.',
          test: data,
        })
      } else {
        res.status(200).json({
          message: 'Test Not found.',
        })
      }
    }
  })
})

router.delete('/:testId', (req, res, next) => {
  let pid = req.params.testId

  db.query(Product.deleteTestByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `Test deleted with id = ${pid}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'Test Not found.',
        })
      }
    }
  })
})

module.exports = router
