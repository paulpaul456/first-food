import express from 'express'
import db from '../db/database'
import Search from '../domain/search'
import bluebird from 'bluebird'
const router = express.Router()
bluebird.promisifyAll(db)

router.use((req, res, next) => { console.log('passed router.use at Collection API ');next();})

// Search Keyword
router.get('/:searchText?', (req, res, next)=>{
  let searchText = req.params.searchText
  db.queryAsync(Search.getKeywordSQL(searchText)).then(
    data => {
      if (data && data.length > 0) {
        // console.log('queryAsync',data[0].cart_id)
        // cartId = data[0].cart_id
        res.status(200).json({
          message: 'Search found.',
          data
        })
        // db.queryAsync(sql(cartId))
      } else {
        res.status(200).json({
          message: 'Search Not found.',
        })
      }
    }
  )
})

router.post('/', (req, res, next) => {
  let cartId, sql 
  let {name ,type} = req.body
  // console.log(name ,type)
  let SearchEntity = new Search(name, type)
  switch (type) {
    case 'course':
      sql = SearchEntity.getCourseSidSQL(type)
     break
    case 'dinner_list':
    case 'farmer_product':
    case 'restaurant':
        sql = SearchEntity.getSidSQL(type)
        break
    default:
      return res.status(500).json({
        message: 'Wrong Type.'
      })
  }
  db.queryAsync(sql).then(
    data => {
      if (data && data.length > 0) {
        console.log('queryAsync',data)
        res.status(200).json({
          message: 'Search found.',
          type,
          data
        })
      } else {
        res.status(200).json({
          message: 'Search Not found.',
        })
      }}
  )
})
module.exports = router
