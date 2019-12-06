import express from 'express'
import db from '../db/database'
import Product from '../domain/goods'


var bluebird = require('bluebird')
bluebird.promisifyAll(db)

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at goods API ');next();})

// router.get('/', (req, res, next) => {
//   console.log('loginsession:'+req.session)

//   let output = []
//   db.queryAsync(Product.getAllFarmerProductSQL())
//   .then(results=>{
//     output.push(results);
//     return db.queryAsync(Product.getFarmerProductForCookSQL())
//   })
//   .then(results=>{
//     output.push(results)
//     res.json(output)
//   })
//   .catch((error)=>{
//     console.log('**sql error **:', error)
//   })
// })

router.get('/comment/:id', (req, res, next) => {
  let pid = req.params.id
  let sqll = `SELECT * FROM fm_goods_comment WHERE farmer_product = ${pid}`
  console.log(pid +'pid')
  db.query(sqll, (err, data) => {
    if (!err) {
      res.status(200).json(data)
    }
  })
})

router.get('/classsidfm/:id', (req, res, next) => {
  let pid = req.params.id
  let sqll = `SELECT * FROM farmer_product WHERE class_sid= ${pid} ORDER BY rand() LIMIT 6`
  console.log(pid +'pid')
  db.query(sqll, (err, data) => {
    if (!err) {
      res.status(200).json(data)
    }
  })
})

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
  
 
router.post('/addlove', (req, res, next) => {
    //read product information from request
    let output = {}
    console.log(req.body)
    let pid = req.body.goodsid
    let cid = req.body.customer_id
    let va = req.body.va
    console.log('va'+va)
    const sql = `INSERT INTO fm_goods_cart (fm_goods_cart_id, farmer_product, main_cart, quantity, status, creat_at)
    VALUES (NULL, '${pid}', '${cid}', '1', '收藏中',NOW())`
    let sql2 = `SELECT * FROM farmer_product`
    if(va=='500 AND 1000'){
      sql2 =`SELECT * FROM farmer_product WHERE price BETWEEN 500 AND 1000`
    }else if(va=='0 AND 499'){
      sql2 =`SELECT * FROM farmer_product WHERE price BETWEEN 0 AND 499`
    }else if(va=='北部'){
      sql2 =`SELECT * FROM farmer_product WHERE place = '北部'`
    }else if(va=='中部'){
      sql2 =`SELECT * FROM farmer_product WHERE place = '中部'`
    }else if(va=='南部'){
      sql2 =`SELECT * FROM farmer_product WHERE place = '南部'`
    }else if(va=='東部'){
      sql2 =`SELECT * FROM farmer_product WHERE place = '東部'`
    }else if(va=='有機'){
      sql2 =`SELECT * FROM farmer_product WHERE organic = '有機'`
    }else if(va=='限量'){
      sql2 =`SELECT * FROM farmer_product WHERE Limited = '限量'`
    }else if(va=='東部'){
      sql2 =`SELECT * FROM farmer_product WHERE place = '東部'`
    }else if(va=='東部'){
      sql2 =`SELECT * FROM farmer_product WHERE place = '東部'`
    }else{
      sql2 =`SELECT * FROM farmer_product`
    }

    const sql3 =`SELECT a.class_sid, a.name
    FROM product_class AS a
    JOIN dinnerproduct AS b ON a.class_sid= b.product_class
    GROUP BY a.class_sid`
    const sql4 =`SELECT * FROM fm_goods_cart AS a JOIN customer_information AS b ON a.main_cart= b.customer_id WHERE status = '收藏中' AND a.main_cart= ${cid}`
    const sq5 =`SELECT * FROM fm_goods_cart AS a JOIN customer_information AS b ON a.main_cart= b.customer_id WHERE status = '購物中' AND a.main_cart= ${cid}`
    db.queryAsync(sql).then(result=>{
      if (result && result.affectedRows > 0) { console.log('11'+result) 
        return db.queryAsync(sql2)}
        else {
          res.status(200).json({
            message: 'MainCart Not found.',
          })
        }
     })
     .then(result=>
        {
          // console.log('queryAsync2',result)
        output.fmgoods=result
        return db.queryAsync(sql3)
        }
        )
        .then(result=>
          {
            // console.log('queryAsync3',result)
          output.forCook=result
          return db.queryAsync(sql4)
          }
          )
          .then(result=>
            {
              // console.log('queryAsync4',result)
            output.fitlove=result
            return db.queryAsync(sq5)
            }).then(result=>{
            // console.log('queryAsync55',result)
            output.fitcart=result
            res.json(output)
            // console.log('queryAsync55',output)
            // console.log('ggwp')
            
          })
        .catch((error)=>{
      console.log('sql error222')
    }) 
  })
  
  
  // router.post('/addlove', (req, res, next) => {
  //   //read product information from request
  //   console.log(req.body)
  //   let pid = req.body.goodsid
  //   let cid = req.body.customer_id
  //   const sql = `INSERT INTO fm_goods_cart (fm_goods_cart_id, farmer_product, main_cart, quantity, status, creat_at)
  //   VALUES (NULL, '${pid}', '${cid}', '1', '收藏中',NOW())`
  //   db.query(sql, (error, results, fields) => {
  //       console.log(error)
       
  //       res.status(200).json({results})
  //       console.log(results)
            
  //   })
  // })

  router.post('/addcart', (req, res, next) => {
    //read product information from request
    let output = {}
    console.log(req.body)
    let pid = req.body.goodsid
    let cid = req.body.customer_id
    let num = req.body.num
    let va = req.body.va
    console.log('va'+va)
    const sql7 = `INSERT INTO fm_goods_cart (fm_goods_cart_id, farmer_product, main_cart, quantity, status, creat_at)
    VALUES (NULL, '${pid}', '${cid}', '${num}', '購物中',NOW())`
    let sql27 = `SELECT * FROM farmer_product`
    if(va=='500 AND 1000'){
      sql27 =`SELECT * FROM farmer_product WHERE price BETWEEN 500 AND 1000`
    }else if(va=='0 AND 499'){
      sql27 =`SELECT * FROM farmer_product WHERE price BETWEEN 0 AND 499`
    }else if(va=='北部'){
      sql27 =`SELECT * FROM farmer_product WHERE place = '北部'`
    }else if(va=='中部'){
      sql27 =`SELECT * FROM farmer_product WHERE place = '中部'`
    }else if(va=='南部'){
      sql27 =`SELECT * FROM farmer_product WHERE place = '南部'`
    }else if(va=='東部'){
      sql27 =`SELECT * FROM farmer_product WHERE place = '東部'`
    }else if(va=='有機'){
      sql27 =`SELECT * FROM farmer_product WHERE organic = '有機'`
    }else if(va=='限量'){
      sql27 =`SELECT * FROM farmer_product WHERE Limited = '限量'`
    }else if(va=='東部'){
      sql27 =`SELECT * FROM farmer_product WHERE place = '東部'`
    }else if(va=='東部'){
      sql27 =`SELECT * FROM farmer_product WHERE place = '東部'`
    }else{
      sql27 =`SELECT * FROM farmer_product`
    }
    const sql37 =`SELECT a.class_sid, a.name
    FROM product_class AS a
    JOIN dinnerproduct AS b ON a.class_sid= b.product_class
    GROUP BY a.class_sid`
    const sql47 =`SELECT * FROM fm_goods_cart AS a JOIN customer_information AS b ON a.main_cart= b.customer_id WHERE status = '收藏中' AND a.main_cart= ${cid}`
    const sq57 =`SELECT * FROM fm_goods_cart AS a JOIN customer_information AS b ON a.main_cart= b.customer_id WHERE status = '購物中' AND a.main_cart= ${cid}`
    db.queryAsync(sql7).then(result=>{
      if (result && result.affectedRows > 0) { console.log('11'+result) 
        return db.queryAsync(sql27)}
        else {
          res.status(200).json({
            message: 'MainCart Not found.',
          })
        }
     })
     .then(result=>
        {
          // console.log('queryAsync2',result)
        output.fmgoods=result
        return db.queryAsync(sql37)
        }
        )
        .then(result=>
          {
            // console.log('queryAsync3',result)
          output.forCook=result
          return db.queryAsync(sql47)
          }
          )
          .then(result=>
            {
              // console.log('queryAsync4',result)
            output.fitlove=result
            return db.queryAsync(sq57)
            }).then(result=>{
            // console.log('queryAsync55',result)
            output.fitcart=result
            res.json(output)
            // console.log('queryAsync55',output)
            // console.log('ggwp')
            
          })
        .catch((error)=>{
      console.log('sql error222')
    }) 
  })
  
  // router.post('/addcart', (req, res, next) => {
  //   //read product information from request
  //   console.log(req.body)
  //   let pid = req.body.goodsid
  //   let cid = req.body.customer_id
  //   let num = (!req.body.num)?1:req.body.num
 
  //   const sql = `INSERT INTO fm_goods_cart (fm_goods_cart_id, farmer_product, main_cart, quantity, status, creat_at)
  //   VALUES (NULL, '${pid}', '${cid}', '${num}', '購物中',NOW())`
  //   db.query(sql, (error, results, fields) => {
  //       console.log(error)
  //       res.json(results)
  //       console.log("有了啦")
  //   })
  // })



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
  
//   router.delete('/removeLove/:goodsid/:customer_id', (req, res, next) => {
//     let dpid = req.params.goodsid
//     let dcid= req.params.customer_id
//     console.log("333333333333333333333333333")
//     console.log(dcid)
//     const sql11 =
//       `DELETE FROM fm_goods_cart WHERE fm_goods_cart.farmer_product = ${dpid} AND fm_goods_cart.main_cart = ${dcid} AND fm_goods_cart.status = 	
// '收藏中'`
//     const sql12 = `SELECT * FROM farmer_product`

//     db.query(sql11).then(result=>{
//       if (result && result.affectedRows > 0) { console.log('ded'+result) 
//         return db.queryAsync(sql12)}
//         else {
//           res.status(200).json({
//             message: 'MainCart Not found.',
//             data:data,
//           })
//         }
//      }).catch((error)=>{
//     console.log('sql error2002')
//   })
//   })

//   router.delete('/removeLove/:goodsid/:customer_id', (req, res, next) => {
//     let pid = req.params.goodsid
//     let cid = req.params.customer_id
//     console.log("333333333333333333333333333")
//     const sql =
//       `DELETE FROM fm_goods_cart WHERE fm_goods_cart.farmer_product = ${pid} AND fm_goods_cart.main_cart = ${cid} AND fm_goods_cart.status = 	
// '收藏中'`
//     db.query(sql, (err, data) => {   console.log(data)
//       if (!err) {
//         if (data && data.affectedRows > 0) { console.log("989898989898")
//           res.status(200).json({
//             message: `Test deleted with id = ${pid}.`,
//             affectedRows: data.affectedRows,
//           })
//         } else {
//           res.status(200).json({
//             message: 'Test Not found.',
//           })
//         }
//       }
//     })
//   })

  router.delete('/removeLove', (req, res, next) => {
    //read product information from request
    let output = {}
    // console.log(req.body)
    let pid = req.body.goodsid
    let cid = req.body.customer_id
    let va = req.body.va
    console.log("333333333333333333333333333")
    const sql =
      `DELETE FROM fm_goods_cart WHERE fm_goods_cart.farmer_product = ${pid} AND fm_goods_cart.main_cart = ${cid} AND fm_goods_cart.status = 	
'收藏中'`
let sql2= `SELECT * FROM farmer_product`
if(va=='500 AND 1000'){
  sql2 =`SELECT * FROM farmer_product WHERE price BETWEEN 500 AND 1000`
}else if(va=='0 AND 499'){
  sql2 =`SELECT * FROM farmer_product WHERE price BETWEEN 0 AND 499`
}else if(va=='北部'){
  sql2 =`SELECT * FROM farmer_product WHERE place = '北部'`
}else if(va=='中部'){
  sql2 =`SELECT * FROM farmer_product WHERE place = '中部'`
}else if(va=='南部'){
  sql2 =`SELECT * FROM farmer_product WHERE place = '南部'`
}else if(va=='東部'){
  sql2 =`SELECT * FROM farmer_product WHERE place = '東部'`
}else if(va=='有機'){
  sql2 =`SELECT * FROM farmer_product WHERE organic = '有機'`
}else if(va=='限量'){
  sql2 =`SELECT * FROM farmer_product WHERE Limited = '限量'`
}else if(va=='東部'){
  sql2 =`SELECT * FROM farmer_product WHERE place = '東部'`
}else if(va=='東部'){
  sql2 =`SELECT * FROM farmer_product WHERE place = '東部'`
}else{
  sql2 =`SELECT * FROM farmer_product`
}
const sql3 =`SELECT a.class_sid, a.name
FROM product_class AS a
JOIN dinnerproduct AS b ON a.class_sid= b.product_class
GROUP BY a.class_sid`
const sql4 =`SELECT * FROM fm_goods_cart AS a JOIN customer_information AS b ON a.main_cart= b.customer_id WHERE status = '收藏中' AND a.main_cart= ${cid}`
const sq57 =`SELECT * FROM fm_goods_cart AS a JOIN customer_information AS b ON a.main_cart= b.customer_id WHERE status = '購物中' AND a.main_cart= ${cid}`
    db.queryAsync(sql).then(result=>{
      if (result && result.affectedRows > 0) { console.log('131'+result) 
      return db.queryAsync(sql2)}
      else {
        res.status(200).json({
          message: 'MainCart Not found.',
        })
      }
   })
   .then(result=>
      {
        // console.log('queryAsync2',result)
      output.fmgoods=result
      return db.queryAsync(sql3)
      }
      )
      .then(result=>
        {
          // console.log('queryAsync3',result)
        output.forCook=result
        return db.queryAsync(sql4)
        }
        )
        .then(result=>
          {
            // console.log('queryAsync4',result)
          output.fitlove=result
          return db.queryAsync(sq57)
          }).then(result=>{
          // console.log('queryAsync55',result)
          output.fitcart=result
          res.json(output)
          // console.log('queryAsync55',output)
          // console.log('ggwp')
          
        })
      .catch((error)=>{
    console.log('sql error222')
  }) 
})

//   db.queryAsync(sql).then(result=>{
//     if (result && result.affectedRows > 0) { console.log('11'+result) 
//       return db.queryAsync(sql2)}
//       else {
//         res.status(200).json({
//           message: 'MainCart Not found.',
//         })
//       }
//    }).then(result=>
//       {console.log('queryAsync2',result)
//       output.push(result);
//       return db.queryAsync(sql3)
//       }
//       ).then(result=>
//         {console.log('queryAsync3',result)
//         output.push(result);
//         return db.queryAsync(sql4)
//         }
//         ).then(result=>{
//           console.log('queryAsync55',result)
//           output.push(result)
//           res.json(output)
//         })
//       .catch((error)=>{
//     console.log('sql error222')
//   }) 
// })

  router.delete('/removeCart', (req, res, next) => {
    //read product information from request
    // console.log('123456789987')
    let output = {}
    // console.log(req.body)
    let pid = req.body.goodsid
    let cid = req.body.customer_id
    let va = req.body.va
    const sql =
      `DELETE FROM fm_goods_cart WHERE fm_goods_cart.farmer_product = ${pid} AND fm_goods_cart.main_cart = ${cid} AND fm_goods_cart.status = 	
'購物中'`
let sql2 = `SELECT * FROM farmer_product`
if(va=='500 AND 1000'){
  sql2 =`SELECT * FROM farmer_product WHERE price BETWEEN 500 AND 1000`
}else if(va=='0 AND 499'){
  sql2 =`SELECT * FROM farmer_product WHERE price BETWEEN 0 AND 499`
}else if(va=='北部'){
  sql2 =`SELECT * FROM farmer_product WHERE place = '北部'`
}else if(va=='中部'){
  sql2 =`SELECT * FROM farmer_product WHERE place = '中部'`
}else if(va=='南部'){
  sql2 =`SELECT * FROM farmer_product WHERE place = '南部'`
}else if(va=='東部'){
  sql2 =`SELECT * FROM farmer_product WHERE place = '東部'`
}else if(va=='有機'){
  sql2 =`SELECT * FROM farmer_product WHERE organic = '有機'`
}else if(va=='限量'){
  sql2 =`SELECT * FROM farmer_product WHERE Limited = '限量'`
}else if(va=='東部'){
  sql2 =`SELECT * FROM farmer_product WHERE place = '東部'`
}else if(va=='東部'){
  sql2 =`SELECT * FROM farmer_product WHERE place = '東部'`
}else{
  sql2 =`SELECT * FROM farmer_product`
}

const sql3 =`SELECT a.class_sid, a.name
FROM product_class AS a
JOIN dinnerproduct AS b ON a.class_sid= b.product_class
GROUP BY a.class_sid`
const sql4 =`SELECT * FROM fm_goods_cart AS a JOIN customer_information AS b ON a.main_cart= b.customer_id WHERE status = '收藏中' AND a.main_cart= ${cid}`
const sq157 =`SELECT * FROM fm_goods_cart AS a JOIN customer_information AS b ON a.main_cart= b.customer_id WHERE status = '購物中' AND a.main_cart= ${cid}`
    db.queryAsync(sql).then(result=>{
      if (result && result.affectedRows > 0) { console.log('15511'+result) 
        return db.queryAsync(sql2)}
        else {
          res.status(200).json({
            message: 'MainCart Not found.',
          })
        }
     }).then(result=>
        {
          // console.log('queryAsync2',result)
        // output.push(result);
        output.fmgoods=result
        return db.queryAsync(sql3)
        }
        ).then(result=>
          {
            // console.log('queryAsync3',result)
          // output.push(result);
          output.forCook=result
          return db.queryAsync(sql4)
          }
          )
          .then(result=>
            {
              // console.log('queryAsync4',result)
            output.fitlove=result
            return db.queryAsync(sq157)
            }).then(result=>{
            // console.log('queryAsync55',result)
            // output.push(result)
            output.fitcart=result
            console.log('安安安安')
            res.json(output)
          })
        .catch((error)=>{
      console.log('sql error222')
    }) 
  })

//   return db.queryAsync(sql2)}
//   else {
//     res.status(200).json({
//       message: 'MainCart Not found.',
//     })
//   }
// }).then(result=>
//   {console.log('queryAsync2',result)
//   output.push(result);
//   return db.queryAsync(sql3)
//   }
//   ).then(result=>
//     {console.log('queryAsync3',result)
//     output.push(result);
//     return db.queryAsync(sql4)
//     }
//     ).then(result=>{
//       console.log('queryAsync55',result)
//       output.push(result)
//       res.json(output)
//     })
//   .catch((error)=>{
// console.log('sql error222')
// }) 
// })  

//   router.delete('/removeLove/:goodsid/:customer_id', (req, res, next) => {
//     let pid = req.params.goodsid
//     let cid = req.params.customer_id
//     console.log("333333333333333333333333333")
//     const sql =
//       `DELETE FROM fm_goods_cart WHERE fm_goods_cart.farmer_product = ${pid} AND fm_goods_cart.main_cart = ${cid} AND fm_goods_cart.status = 	
// '收藏中'`
//     db.query(sql, (err, data) => {   console.log(data)
//       if (!err) {
//         if (data && data.affectedRows > 0) { console.log("989898989898")
//           res.status(200).json({
//             message: `Test deleted with id = ${pid}.`,
//             affectedRows: data.affectedRows,
//           })
//         } else {
//           res.status(200).json({
//             message: 'Test Not found.',
//           })
//         }
//       }
//     })
//   })
module.exports = router
