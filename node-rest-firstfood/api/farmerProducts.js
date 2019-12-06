import express from 'express'
import db from '../db/database'
import Product from '../domain/farmerProducts'

var bluebird = require('bluebird')
bluebird.promisifyAll(db)

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at farmerProduct API ');next();})


router.get('/hot/fmGoods', (req, res, next) => {
  console.log('loginsession:'+req.session)
  console.log('lizzo')
  const sqlizzo =`SELECT *, a.farmer_product, count(*) as 'hot' FROM fm_goods_order AS a JOIN farmer_product AS b ON a.farmer_product = b.sid group BY a.farmer_product ORDER BY hot DESC`
  // let output = {}
  db.queryAsync(sqlizzo)
  .then(results=>{
    // output.fitcart=results
    // res.json(output)
    res.json(results)
    console.log(results)
  })
 .catch((error)=>{
    console.log('**sql error **:', error)
  })
})

router.get('/filter/:id/:cid?', (req, res, next) => {
  console.log('loginsession:'+req.session)
  let sid = req.params.id
  let cid = req.params.cid
  console.log('cid')
  console.log(cid)
  if(cid=='undefined'){cid=99 
    // console.log('kkkkkkkkkk')
    // console.log(cid)
  }
  
    let all =`SELECT * FROM farmer_product`
    // if(cid===undefined){cid=99}
    if(sid==1){
      all =`SELECT * FROM farmer_product WHERE price BETWEEN 500 AND 1000`
    }else if(sid==2){
      all =`SELECT * FROM farmer_product WHERE price BETWEEN 0 AND 499`
    }else if(sid==3){
      all =`SELECT * FROM farmer_product WHERE place = '北部'`
    }else if(sid==4){
      all =`SELECT * FROM farmer_product WHERE place = '中部'`
    }else if(sid==5){
      all =`SELECT * FROM farmer_product WHERE place = '南部'`
    }else if(sid==6){
      all =`SELECT * FROM farmer_product WHERE place = '東部'`
    }else if(sid==7){
      all =`SELECT * FROM farmer_product WHERE organic = '有機'`
    }else if(sid==8){
      all =`SELECT * FROM farmer_product WHERE Limited = '限量'`
    }else if(sid==9){
      all =`SELECT * FROM farmer_product WHERE place = '東部'`
    }else if(sid==10){
      all =`SELECT * FROM farmer_product WHERE place = '東部'`
    }else{
      all =`SELECT * FROM farmer_product`
    }
    // switch (sid) {
    //   case 1:
    //      all =`SELECT * FROM farmer_product WHERE price BETWEEN 500 AND 1000`
    //     return 
    //   case 2:
    //      all =`SELECT * FROM farmer_product WHERE price BETWEEN 0 AND 499`
    //     return 
    //   default:
    //     return  all =`SELECT * FROM farmer_product`
    // }
    // let all =`SELECT * FROM farmer_product WHERE price BETWEEN 0 AND 499`
    const sql4 =`SELECT * FROM fm_goods_cart AS a JOIN customer_information AS b ON a.main_cart= b.customer_id WHERE status = '收藏中' AND a.main_cart= ${cid}`
    const sql5 =`SELECT * FROM fm_goods_cart AS a JOIN customer_information AS b ON a.main_cart= b.customer_id WHERE status = '購物中' AND a.main_cart= ${cid}`
  let output = {}
  db.queryAsync(all)
  .then(results=>{
    // output.push(results);
    output.fmgoods=results
    return db.queryAsync(Product.getFarmerProductForCookSQL())
  })
  .then(results=>{
    // output.push(results);
    output.forCook=results
    return db.queryAsync(sql4)
  })
  .then(results=>{
    // output.push(results);
    output.fitlove=results
    return db.queryAsync(sql5)
  })
  .then(results=>{
    output.fitcart=results
    res.json(output)
    console.log(output)
  })
 .catch((error)=>{
    console.log('**sql error **:', error)
  })
})

router.get('/cidcart/:cid', (req, res, next) => {
  console.log('loginsession:'+req.session)
  let cid = req.params.cid
  console.log('cid')
  console.log(cid)
    let ccart =`Select count(*) as 'things' From course_cart Inner join main_cart on main_cart.cart_id = course_cart.main_cart Where main_cart = ${cid} AND course_cart.status='購物中'`
    const dncart =`Select count(*) as 'things' From dn_goods_cart Inner join main_cart on main_cart.cart_id = dn_goods_cart.main_cart Where main_cart = ${cid} AND dn_goods_cart.status='購物中'`
    const fmcart =`Select count(*) as 'things' From fm_goods_cart Inner join main_cart on main_cart.cart_id = fm_goods_cart.main_cart Where main_cart = ${cid} AND fm_goods_cart.status='購物中'`
  let output = {}
  db.queryAsync(ccart)
  .then(results=>{
    // output.push(results);
    output.ccbell=results
    console.log('ccbell')
    console.log(results)
    return db.queryAsync(dncart)
  })
  .then(results=>{
    // output.push(results);
    output.dnbell=results
    return db.queryAsync(fmcart)
  })
  .then(results=>{
    output.fmbell=results
    res.json(output)
    console.log(output)
  })
 .catch((error)=>{
    console.log('**sql error **:', error)
  })
})



router.get('/select/:cashlow/:cashhigh', (req, res, next) => {
  let cashlow = req.params.cashlow
  let cashhigh = req.params.cashhigh
  console.log('cashhigh'+cashhigh)
  let sql = `SELECT * FROM farmer_product WHERE price BETWEEN ${cashlow} AND ${cashhigh}`
  let output = []
  db.queryAsync(sql)
  .then(results=>{
    output.push(results);
    return db.queryAsync(Product.getFarmerProductForCookSQL())
  })
  .then(results=>{
    output.push(results)
    res.json(output)
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
  })
})

router.get('/all', (req, res, next) => {
  console.log('loginsession:'+req.session)
  db.queryAsync(Product.getAllFarmerProductSQL())
  .then(results=>{
    res.json(results)
  })
  .catch((error)=>{
    console.log('**sql error **:', error)
  })
})
router.get('/login/:id', (req, res, next) => {
  console.log('loginsession123:'+req.session)
  let cid = req.params.id
  console.log(cid)
  let output = []
  const sql4 =`SELECT * FROM fm_goods_cart AS a JOIN customer_information AS b ON a.main_cart= b.customer_id WHERE status = '收藏中' AND a.main_cart= ${cid}`
  const sql5 =`SELECT * FROM fm_goods_cart AS a JOIN customer_information AS b ON a.main_cart= b.customer_id WHERE status = '購物中' AND a.main_cart= ${cid}`
  db.queryAsync(Product.getAllFarmerProductSQL())
  .then(results=>{
    output.push(results);
    return db.queryAsync(Product.getFarmerProductForCookSQL())
  })
  .then(results=>{
    output.push(results);
    return db.queryAsync(sql4)
  })
  .then(results=>{
    output.push(results);
    return db.queryAsync(sql5)
  })
  .then(results=>{
    output.push(results)
    res.json(output)
  })
  .catch((error)=>{
    console.log('**sql error11 **:', error)
  })
})

// router.get('/:id', (req, res, next) => {
//   let output = {}
//   let pid = req.params.id
//   let sqls = `SELECT * FROM farmer_product WHERE sid = ${pid}`
//   // let sqlq =`SELECT * FROM fm_goods_comment WHERE farmer_product = ${pid}`
//   let sqlq = `SELECT * FROM fm_goods_comment AS a  JOIN customer_information AS b ON a.customer_information = b.customer_id WHERE a.farmer_product = ${pid}`
//   let sqq = `SELECT a.fm_goods_comment_id, count(1) as '讚數' FROM fm_goods_comment AS a JOIN who_fm_goods_comment AS b ON a.fm_goods_comment_id = b.fm_goods_comment JOIN farmer_product AS c ON a.farmer_product = c.sid WHERE c.sid = ${pid} AND b.p_like = 1 AND b.customer_information GROUP BY b.fm_goods_comment`
//   console.log(pid +'pid')
//   db.queryAsync(sqls)
//   .then(result=>{
//     console.log('queryAsync2',result)
//     output.fmid = result;
//     return db.queryAsync(sqlq)
//     })
//     .then(result=>
//       {console.log('queryAsync23',result)
//       output.femcom = result;
//       return db.queryAsync(sqq)
//       })
//     .then(result=>{
//       console.log('queryAsync55',result)
//       output.gjnum=result;
//       res.json(output)
//     })
//     .catch((error)=>{
//       console.log('sql error222')
//     })
// })

router.get('/:id/:cid', (req, res, next) => {
  let output = {}
  let pid = req.params.id
  let cid = req.params.cid
  console.log('cid')
  console.log(cid)
  if(cid=='undefined'){cid=99 
    console.log('kkkkkkkkkk')
    console.log(cid)}
  let sqls = `SELECT * FROM farmer_product a JOIN farmers b ON a.farmer_sid = b.farmer_id WHERE sid = ${pid}`
  // let sqlq =`SELECT * FROM fm_goods_comment WHERE farmer_product = ${pid}`
  let sqll =`SELECT * FROM fm_goods_cart AS a JOIN customer_information AS b ON a.main_cart= b.customer_id WHERE status = '收藏中' AND a.main_cart= ${cid} AND a.farmer_product = ${pid}`
  let sqlq = `SELECT * FROM fm_goods_comment AS a  JOIN customer_information AS b ON a.customer_information = b.customer_id WHERE a.farmer_product = ${pid}`
  let sqq = `SELECT a.fm_goods_comment_id, count(1) as '讚數' FROM fm_goods_comment AS a JOIN who_fm_goods_comment AS b ON a.fm_goods_comment_id = b.fm_goods_comment JOIN farmer_product AS c ON a.farmer_product = c.sid WHERE c.sid = ${pid} AND b.p_like = 1 AND b.customer_information GROUP BY b.fm_goods_comment`
  const sql45 =`SELECT * FROM who_fm_goods_comment WHERE customer_information = ${cid} AND p_like = 1`
  console.log(pid +'pid')
  db.queryAsync(sqls).then(result=>
    {console.log('queryAsync2',result)
    // output.push(result[0]);
    output.fmid=result;
    return db.queryAsync(sqll)
    })
    .then(result=>
      {console.log('queryAsync23',result)
      // output.push(result);
      output.fmidlike=result;
      return db.queryAsync(sqlq)
      })
    .then(result=>
      {console.log('queryAsync23',result)
      // output.push(result);
      output.fmidcomt=result;
      return db.queryAsync(sqq)
      })
      .then(result=>
        {console.log('232323',result)
        // output.push(result);
        output.fmidcomtlike=result
        return db.queryAsync(sql45)
        })
    .then(result=>{
      console.log('queryAsync55',result)
      // output.push(result)
      output.fmidcomtlikebyid=result
      res.json(output)
      console.log('byid')
      console.log(output)
    })
    .catch((error)=>{
      console.log('sql error222')
    })
})

// router.get('/:id', (req, res, next) => {
//   let pid = req.params.id
//   console.log(pid +'pid')
//   db.query(Product.getAllFarmerProductFarmersByIdSQL(pid), (err, data) => {
//     if (!err) {
//       res.status(200).json(data)
//     }
//   })
// })

// router.get('/:farmerProductId', (req, res, next) => {
//   let pid = req.params.farmerProductId
//   db.query(Product.getFarmerProductByIdSQL(pid), (err, data) => {
//     if (!err) {
//       if (data && data.length > 0) {
//         res.status(200).json({
//           message: 'farmerProduct found.',
//           farmerProduct: data,
//         })
//       } else {
//         res.status(200).json({
//           message: 'farmerProduct Not found.',
//         })
//       }
//     }
//   })
// })

router.post('/', (req, res, next) => {
  //read product information from request
  let product = new Product(req.body.prd_name, req.body.prd_price)

  db.query(product.addFarmerProductSQL(), (err, data) => {
    res.status(200).json({
      message: 'farmerProduct added.',
      farmerProductId: data.insertId,
    })
  })
})

router.put('/:farmerProductId', (req, res, next) => {
  let pid = req.params.farmerProductId
   let product = new Product(req.body.name, req.body.price)
   db.query(product.updateFarmerProductByIdSQL(pid), (err, data) => {
     if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'farmerProduct found.',
          farmerProduct: data,
        })
      } else {
        res.status(200).json({
          message: 'farmerProduct Not found.',
        })
      }
    }
  })
})

router.delete('/:farmerProductId', (req, res, next) => {
  let pid = req.params.farmerProductId

  db.query(Product.deleteFarmerProductByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `farmerProduct deleted with id = ${pid}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'farmerProduct Not found.',
        })
      }
    }
  })
})

// 清鈴鐺
router.get('/clearCidCart', (req, res) => {
  console.log('1111111111111111111')
  res.json([])
})


module.exports = router
