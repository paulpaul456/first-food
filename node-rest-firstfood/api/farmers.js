import express from 'express'
import db from '../db/database'
import Product from '../domain/farmers'

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at Farmers API ');next();})

router.get('/', (req, res, next) => {
  db.query(Product.getAllFarmerSQL(), (err, data) => {
    if (!err) {
      res.status(200).json(data)
    }
  })
})

router.get('/:farmerId', (req, res, next) => {
  let pid = req.params.farmerId
  db.query(Product.getFarmerByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Farmers found.',
          farmer: data,
        })
      } else {
        res.status(200).json({
          message: 'Farmers Not found.',
        })
      }
    }
  })
})

router.post('/', (req, res, next) => {
  //read product information from request
  let product = new Product(req.body.prd_name, req.body.prd_price)

  db.query(product.addFarmerSQL(), (err, data) => {
    res.status(200).json({
      message: 'Farmers added.',
      farmerId: data.insertId,
    })
  })
})

router.put('/:farmerId', (req, res, next) => {
  let pid = req.params.farmerId
  let product = new Product(req.body.name, req.body.price)
  db.query(product.updateFarmerByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Farmers found.',
          farmer: data,
        })
      } else {
        res.status(200).json({
          message: 'Farmers Not found.',
        })
      }
    }
  })
})

router.delete('/:farmerId', (req, res, next) => {
  let pid = req.params.farmerId

  db.query(Product.deleteFarmerByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `Farmer deleted with id = ${pid}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'Farmers Not found.',
        })
      }
    }
  })
})

module.exports = router
