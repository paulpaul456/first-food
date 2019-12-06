import express from 'express'
import db from '../db/database'
import Product from '../domain/members'

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at Members API ');next();})

router.get('/', (req, res, next) => {
  db.query(Product.getAllCartSQL(), (err, data) => {
    if (!err) {
      res.status(200).json(data)
    }
  })
})

router.get('/:memberId', (req, res, next) => {
  let pid = req.params.memberId
  db.query(Product.getMemberByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Cart found.',
          member: data,
        })
      } else {
        res.status(200).json({
          message: 'Cart Not found.',
        })
      }
    }
  })
})

router.post('/', (req, res, next) => {
  //read product information from request
  let product = new Product(req.body.prd_name, req.body.prd_price)

  db.query(product.addMemberSQL(), (err, data) => {
    res.status(200).json({
      message: 'Cart added.',
      memberId: data.insertId,
    })
  })
})

router.put('/:memberId', (req, res, next) => {
  let pid = req.params.memberId
   let product = new Product(req.body.name, req.body.price)
   db.query(product.updateMemberByIdSQL(pid), (err, data) => {
     if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Members found.',
          member: data,
        })
      } else {
        res.status(200).json({
          message: 'Members Not found.',
        })
      }
    }
  })
})

router.delete('/:memberId', (req, res, next) => {
  let pid = req.params.memberId

  db.query(Product.deleteMemberByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `Member deleted with id = ${pid}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'Members Not found.',
        })
      }
    }
  })
})

module.exports = router
