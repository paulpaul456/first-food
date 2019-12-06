import express from 'express'
import db from '../db/database'
import Product from '../domain/comments'

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at Comments API ');next();})

router.get('/', (req, res, next) => {
  db.query(Product.getAllCommentSQL(), (err, data) => {
    if (!err) {
      res.status(200).json(data)
    }
  })
})

router.get('/:commentId', (req, res, next) => {
  let pid = req.params.commentId
  db.query(Product.getCommentByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Comment found.',
          comment: data,
        })
      } else {
        res.status(200).json({
          message: 'Comment Not found.',
        })
      }
    }
  })
})

router.post('/', (req, res, next) => {
  //read product information from request
  let product = new Product(req.body.prd_name, req.body.prd_price)

  db.query(product.addCommentSQL(), (err, data) => {
    res.status(200).json({
      message: 'Comment added.',
      commentId: data.insertId,
    })
  })
})

router.put('/:commentId', (req, res, next) => {
  let pid = req.params.commentId
   let product = new Product(req.body.name, req.body.price)
   db.query(product.updateCommentByIdSQL(pid), (err, data) => {
     if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Comment found.',
          comment: data,
        })
      } else {
        res.status(200).json({
          message: 'Comment Not found.',
        })
      }
    }
  })
})

router.delete('/:commentId', (req, res, next) => {
  let pid = req.params.commentId

  db.query(Product.deleteCommentByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `Comment deleted with id = ${pid}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'Comment Not found.',
        })
      }
    }
  })
})

module.exports = router
