import express from 'express'
import db from '../db/database'
import Classroom from '../domain/classrooms'

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at ClassRooms API ');next();})

router.get('/', (req, res, next) => {
  db.query(Classroom.getAllClassRoomSQL(), (err, data) => {
    if (!err) {
      res.status(200).json(data)
    }
  })
})

router.get('/:classRoomId', (req, res, next) => {
  let pid = req.params.classRoomId
  db.query(Classroom.getClassRoomByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'ClassRoom found.',
          classRoom: data,
        })
      } else {
        res.status(200).json({
          message: 'ClassRoom Not found.',
        })
      }
    }
  })
})

router.post('/', (req, res, next) => {
  //read product information from request
  let product = new Product(req.body.prd_name, req.body.prd_price)

  db.query(product.addClassRoomSQL(), (err, data) => {
    res.status(200).json({
      message: 'ClassRoom added.',
      classRoomId: data.insertId,
    })
  })
})

router.put('/:classRoomId', (req, res, next) => {
  let pid = req.params.classRoomId
   let product = new Product(req.body.name, req.body.price)
   db.query(product.updateClassRoomByIdSQL(pid), (err, data) => {
     if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'ClassRoom found.',
          classRoom: data,
        })
      } else {
        res.status(200).json({
          message: 'ClassRoom Not found.',
        })
      }
    }
  })
})

router.delete('/:classRoomId', (req, res, next) => {
  let pid = req.params.classRoomId

  db.query(Product.deleteClassRoomByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `ClassRoom deleted with id = ${pid}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'ClassRoom Not found.',
        })
      }
    }
  })
})

module.exports = router
