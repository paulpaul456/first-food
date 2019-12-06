import express from 'express'
import db from '../db/database'
import Collection from '../domain/collection'
import bluebird from 'bluebird'
const router = express.Router()
bluebird.promisifyAll(db)

router.use((req, res, next) => { console.log('passed router.use at Collection API ');next();})

//Get Cart Id & Collection
router.get('/:type/:customerId?', (req, res, next) => {
  let type = req.params.type
  let customerId = req.params.customerId
  let cartId, sql 
  if(!customerId){
    return res.status(500).json({
      message: 'No customerId.'
    })
  }
  switch (type) {
    case 'courses':
        console.log('getCourses')
      sql = Collection.getCourseCollectionByIdSQL
     break
    case 'dinnerProducts':
        sql = Collection.getDnCollectionByIdSQL
      break
    case 'farmerProducts':
        sql = Collection.getFmCollectionByIdSQL
      break
    case 'restaurants':
        sql = Collection.getRestaurantCollectionByIdSQL
      break
    default:
      return res.status(500).json({
        message: 'Wrong Type.'
      })
  }
  
  db.queryAsync(Collection.getMainCartByIdSQL(customerId)).then(
    data => {
      if (data && data.length > 0) {
        console.log('queryAsync',data[0].cart_id)
        cartId = data[0].cart_id
        return db.queryAsync(sql(cartId))
      } else {
        res.status(200).json({
          message: 'MainCart Not found.',
        })
      }}
  ).then(
    data => {
        if (data && data.length > 0) {
          console.log('queryAsync2',data)
          res.status(200).json({
            message: 'Collection found.',
            collection: data,
          })
        } else {
          res.status(200).json({
            message: 'Collection Not found.',
          })
        }
    }
  )

})

//Get Cart Id & Add Collection

router.post('/:type/:customerId?', (req, res, next) => {
  let type = req.params.type
  let customerId = req.params.customerId
  let cartId, sql 
  let CollectionEntity = new Collection(req.body.courseId, req.body.classroomId)
  //console.log('router',type,customerId,cartId,req.body)
  if(!customerId){
    return res.status(500).json({
      message: 'No customerId.'
    })
  }
  switch (type) {
    case 'courses':
        console.log('addCourses')
      sql = (cd)=>CollectionEntity.addCourseCollectionSQL(cd)
     break
    case 'dinnerProducts':
    case 'farmerProducts':
    case 'restaurants':
    default:
      return res.status(500).json({
        message: 'Wrong Type.'
      })
  }
  db.queryAsync(Collection.getMainCartByIdSQL(customerId)).then(
    data => {
      if (data && data.length > 0) {
        console.log('queryAsync',data[0].cart_id)
        cartId = data[0].cart_id
        return db.queryAsync(sql(cartId))
      } else {
        res.status(200).json({
          message: 'MainCart Not found.',
        })
      }}
  ).then(
    data => {
        if (data && data.affectedRows > 0) {
          console.log('queryAsync2',data)
          res.status(200).json({
            message: 'Collection Add.',
            collection: data,
          })
        } else {
          res.status(200).json({
            message: 'Collection Not Add.',
          })
        }
    }
  ) 
})

//Get Cart Id & Delete Collection
router.delete('/:type/:customerId?/:typeId?', (req, res, next) => {
  let type = req.params.type
  let customerId = req.params.customerId
  let typeId = req.params.typeId
  let cartId, sql 
  if(!customerId){
    return res.status(500).json({
      message: 'No customerId.'
    })
  }
  if(!typeId){
    return res.status(500).json({
      message: 'No typeId.'
    })
  }
  switch (type) {
    case 'courses':
        console.log('deleteCourses')
      sql = Collection.deleteCourseCollectionByIdSQL
     break
    case 'dinnerProducts':
        sql = Collection.deleteDnCollectionByIdSQL
      break
    case 'farmerProducts':
        sql = Collection.deleteFmCollectionByIdSQL
      break
    case 'restaurants':
        sql = Collection.deleteRestaurantCollectionByIdSQL
      break
    default:
      return res.status(500).json({
        message: 'Wrong Type.'
      })
  }
  db.queryAsync(Collection.getMainCartByIdSQL(customerId)).then(
    data => {
      if (data && data.length > 0) {
        console.log('queryAsync',data[0].cart_id)
        cartId = data[0].cart_id
        return db.queryAsync(sql(cartId,typeId))
      } else {
        res.status(200).json({
          message: 'MainCart Not found.',
        })
      }}
  ).then(
    data => {
        if (data && data.affectedRows > 0) {
          console.log('queryAsync2',data)
          res.status(200).json({
            message: 'Collection delete.',
            collection: data,
          })
        } else {
          res.status(200).json({
            message: 'Collection Not delete.',
          })
        }
    }
  )
})

module.exports = router
