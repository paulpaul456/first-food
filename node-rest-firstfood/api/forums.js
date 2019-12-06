import express from 'express'
import db from '../db/database'
import Forum from '../domain/forums'
const multer = require('multer')
const fs = require('fs')     

var bluebird = require('bluebird')
bluebird.promisifyAll(db)

const router = express.Router()

// router.use((req, res, next) => { console.log('passed router.use at forum API ');next();})
const upload = multer({dest: 'tmp_uploads/forum/'})


router.post('/upload_img/:customer_id', upload.single('image'), (req, res, next) => {
  const customer_id = req.params.customer_id
  fs.exists('public/images/forum/' + customer_id, function (err) {
    if (!err) {
      console.log('mkdir start : ' + !err)
      fs.mkdir('public/images/forum/' + customer_id, function (err) {
        if (err) {
          console.log(err);
        }
      })
    }
  })
  if (req.file && req.file.originalname) {
    fs.exists('public/images/forum/' + customer_id, function (err) {
      let filePath = ''
      let rs = {}
      if (err) {
        console.log(req.file)
        switch (req.file.mimetype) {
          case 'image/png':
              filePath = 'http://' + req.headers.host + '/images/forum/' + customer_id + '/' + req.file.filename + '.png'
              fs.createReadStream(req.file.path)
                .pipe(
                  fs.createWriteStream('public/images/forum/' + customer_id + '/' + req.file.filename + '.png')
                )
              rs = { file: filePath}
              res.json(rs)
              break
          case 'image/jpeg':
              filePath = 'http://' + req.headers.host + '/images/forum/' + customer_id + '/' + req.file.filename + '.jpg'
              fs.createReadStream(req.file.path)
                .pipe(
                  fs.createWriteStream('public/images/forum/' + customer_id + '/' + req.file.filename + '.jpg')
                )
              rs = { file: filePath}
              res.json(rs)
              break
          default:
            return res.json({ message: 'wrong file type!' })
        }
      } else {
        setTimeout(function () {
          console.log(req.file)
          switch (req.file.mimetype) {
            case 'image/png':
                filePath = 'http://' + req.headers.host + '/images/forum/' + customer_id + '/' + req.file.filename + '.png'
                fs.createReadStream(req.file.path)
                  .pipe(
                    fs.createWriteStream('public/images/forum/' + customer_id + '/' + req.file.filename + '.png')
                  )
                rs = { file: filePath}
                res.json(rs)
                break
            case 'image/jpeg':
                filePath = 'http://' + req.headers.host + '/images/forum/' + customer_id + '/' + req.file.filename + '.jpg'
                fs.createReadStream(req.file.path)
                  .pipe(
                    fs.createWriteStream('public/images/forum/' + customer_id + '/' + req.file.filename + '.jpg')
                  )
                rs = { file: filePath}
                res.json(rs)
                break
            default:
              return res.json({ message: 'wrong file type!' })
          }
        }, 2000)
      }
    })
  } else {
    res.send({ message: 'no upload!' })
  }
})


router.get('/forum_cats', (req, res, next) => {
  db.queryAsync(Forum.getForumCats())
  .then(results=>{
    return res.json(results)
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})

router.get('/forum_cats_count', (req, res, next) => {
  db.queryAsync(Forum.getForumCount())
  .then(results=>{
    return res.json(results)
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})

router.get('/getForum', (req, res, next) => {
  db.queryAsync(Forum.getForum())
  .then(results => {
    console.log(results)
    return res.json(results)
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})


router.get('/getArticlesByForumClass/:forumClass?', (req, res, next) => {
  let forumClass = req.params.forumClass
  db.queryAsync(Forum.getArticlesByForumClass(forumClass))
  .then(results=>{
    return res.json(results)
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})

router.get('/getArticleById/:artId?', (req, res, next) => {
  let artId = req.params.artId
  db.queryAsync(Forum.getArticleById(artId))
  .then(results=>{
    return res.json(results[0])
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})

router.get('/getForumClass/:forumClass', (req, res, next) => {
  let forumClass = req.params.forumClass
  db.queryAsync(Forum.getForumClass(forumClass))
  .then(results=>{
    return res.json(results[0])
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})


router.get('/getForumContentNewer/:forumClass', (req, res, next) => {
  let forumClass = req.params.forumClass
  db.queryAsync(Forum.getForumContentNewer(forumClass))
  .then(results=>{
    return res.json(results)
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})

router.get('/getMsgByForumId/:forumId', (req, res, next) => {
  let forumId = req.params.forumId
  console.log('ininininin')
  db.queryAsync(Forum.getMsgByForumId(forumId))
  .then(results=>{
    return res.json(results)
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})

router.get('/getForumClassType/:forumId', (req, res, next) => {
  let forumId = req.params.forumId
  db.queryAsync(Forum.getForumClassType(forumId))
  .then(results=>{
    return res.json(results)
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})

router.post('/getCollectionByCustomerId', (req, res, next) => {
  let customer_id = req.body.customer_id
  let forum_id = req.body.forum_id
  let collect_good_Type = req.body.collect_good_Type
  if(customer_id === '' || customer_id === null){
    return res.json({ result : false})
  }
  db.queryAsync(Forum.getCollectionByCustomerId(customer_id, forum_id, collect_good_Type))
  .then(results=>{
    if(results.length > 0){
      if(results[0].count > 0)
      return res.json({ result : true})
    } else {
      let errMsg = { 'error':'sql error'}
      return res.json({ result : false})
    }
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})

router.post('/addCollectionByForumId', (req, res, next) => {
  let customer_id = req.body.customer_id
  let forum_id = req.body.forum_id
  let type = req.body.collect_good_Type 
  if (type === 'collect') {
    type = 'forum_collect'
  } else if (type === 'good'){
    type = 'forum_good'
  }
  db.queryAsync(Forum.addCollectionCntByForumId(type, forum_id))
  .then(results=>{
    if (results.changedRows > 0)  {
      db.queryAsync(Forum.addCollectionDetailByForumId(customer_id, forum_id, req.body.collect_good_Type))
      .then(rs=>{
        console.log(rs)
        return res.json(rs)
      })
    } else {
      let errMsg = {'error':'sql error'}
      return res.json(errMsg)
    }
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let errMsg = {'error':'sql error'}
    return res.json(errMsg)
  })
})

router.post('/subCollectionByForumId', (req, res, next) => {
  let customerId = req.body.customer_id
  let forum_id = req.body.forum_id
  let type = req.body.collect_good_Type 
  if (type === 'collect') {
    type = 'forum_collect'
  } else if (type === 'good'){
    type = 'forum_good'
  }
  db.queryAsync(Forum.subCollectionCntByForumId(type, forum_id))
  .then(results=>{
    if (results.changedRows > 0)  {
      db.queryAsync(Forum.delCollectionByForumId(customerId, forum_id, req.body.collect_good_Type))
      .then(rs=>{
        console.log(rs)
        return res.json(rs)
      })
    } else {
      let errMsg = {'error':'sql error'}
      return res.json(errMsg)
    }
  })
})

router.get('/getCatsNewer', (req, res, next) => {
  let rs = []
  db.query(Forum.getForumCats(), (err, data) => {
    console.log(data)
    for (let i = 0 ; i < data.length ; i++){
      db.query(Forum.getForumContentNewer(data[i].forum_class), (err, data2) => {
        rs.push(data2[0])
        if(rs.length === data.length){
          console.log(rs)
          res.status(200).json(rs)
        }
      })
    }
  })
})

router.get('/getMessageCntByForumId/:forumId', (req, res, next) => {
  let forumId = req.params.forumId
  db.queryAsync(Forum.getMessageCntByForumId(forumId))
  .then(results=>{
    return res.json(results)
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})

router.get('/addforumBrowseByForumId/:forumId', (req, res, next) => {
  let forumId = req.params.forumId
  db.queryAsync(Forum.addforumBrowseByForumId(forumId))
  .then(results=>{
    return res.json(results)
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})


router.post('/insertMessage', (req, res, next) => {
  let messageContent = req.body.messageContent
  let forum_id = req.body.forum_id
  let customer_id = req.body.customer_id
  db.queryAsync(Forum.insertMessage(messageContent, forum_id, customer_id))
  .then(results=>{
    if(results.affectedRows > 0){
      if(results.affectedRows > 0){
        db.queryAsync(Forum.getMsgByForumId(forum_id))
        .then(rs=>{
          return res.json(rs)
        })
        .catch((error)=>{
          console.log('**sql error **:', error)
          let err = {'error':error}
          return res.json(err)
        })
      }
    }
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})

router.post('/insertArticle', (req, res, next) => {
  let forum_title = req.body.forum_title
  let forum_class = req.body.forum_class
  let forum_type = req.body.forum_type 
  let forum_content = req.body.forum_content 
  let create_user = req.body.create_user 
  let forum_image = req.body.forum_image 
  db.queryAsync(Forum.insertArticle(forum_title, forum_class, forum_type, forum_content, create_user, forum_image))
  .then(results=>{
    if (results.affectedRows > 0)  {
      let rs = {'success':'insert success'}
      return res.json(rs)
    }else{
      let errMsg = {'error':'error'}
      return res.json(errMsg)
    }
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
    let err = {'error':error}
    return res.json(err)
  })
})

module.exports = router
