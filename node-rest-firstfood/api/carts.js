import express from 'express'
import db from '../db/database'
import Product from '../domain/carts'
import bluebird from 'bluebird'

const router = express.Router()
var bird=require('bluebird');
bird.promisifyAll(db)

const moment=require('moment-timezone')
router.use((req, res, next) => { console.log('passed router.use at Carts API ');next();})




// router.delete('/deletecart/:custermerId', (req,res)=>{
//   let custermerId=req.params.custermerId
//  db.queryAsync(`DELETE FROM fm_goods_cart WHERE main_cart = ${custermerId} AND status='購物中'`)
//       .then(
//         db.queryAsync(`DELETE FROM course_cart WHERE main_cart = ${custermerId} AND status='購物中'`)
//       ).then(
//         db.queryAsync(`DELETE FROM dn_goods_cart WHERE main_cart = ${custermerId} AND status='購物中'`)
//       ).then(
        
//       )
// })


router.post('/addorder',  (req,res)=>{
  const fm = 'YYYY-MM-DD HH:mm:ss';
  const mo2 = moment(new Date());
   let now;
   now=(mo2.format(fm) + "\n")
   console.log('下面是NOW')
   console.log(now)
   let time=now.toString()
  let obj=req.body
  console.log('下面是收到的物件')
  console.log(obj)
  let mainorder
  let output=[]  
  db.queryAsync("INSERT INTO main_order (customer_information, create_at, pm_event) VALUES ("+parseInt(obj.customer_information)+", NOW(),"+parseInt(obj.pm_event)+")")
  // db.queryAsync(`INSERT INTO main_order (customer_information, create_at, pm_event)
  //  VALUES (?, NOW(), ?)`, [obj.customer_information, obj.pm_event])
  // db.queryAsync(`INSERT INTO main_order (customer_information, create_at, pm_event)
  // VALUES (1, NOW(), 50)`)  
   .then(results=>{
     console.log(results)
     mainorder=results.insertId
     output.push(results);   
     return db.queryAsync(`DELETE FROM fm_goods_cart WHERE main_cart = ${obj.customer_information} AND status='購物中'`)
    })
    .then(results=>{
      output.push(results);
      if(obj.farmer_product.length>0){
        for(var i=0;i<obj.farmer_product.length;i++){
          db.queryAsync(`INSERT INTO fm_goods_order (fm_goods_order_id, main_order, farmer_product, quantity) VALUES (NULL, ${mainorder}, ${obj.farmer_product[i]}, ${obj.farmer_quantity[i]})`)
         }    
      }       
   })
   .then(results=>{     
     
    output.push(results);
    return db.queryAsync(`DELETE FROM course_cart WHERE main_cart = ${obj.customer_information} AND status='購物中'`)
  })
  .then(results=>{
    output.push(results);
    if(obj.course_course.length>0){
      for(var i=0;i<obj.course_course.length;i++){
        db.queryAsync(`INSERT INTO course_order (course_order_id, main_order, course, quantity) VALUES (NULL, ${mainorder}, ${obj.course_course[i]}, ${obj. course_quantity[i]})`)
       }    
    }       
 })
   .then(results=>{
     output.push(results)
    return db.queryAsync(`DELETE FROM dn_goods_cart WHERE main_cart = ${obj.customer_information} AND status='購物中'`)
   })
   .then(results=>{
    output.push(results);
    if(obj.dn_restaurant_id.length>0){
      for(var i=0;i<obj.dn_restaurant_id.length;i++){
        db.queryAsync(`INSERT INTO dn_goods_order (dn_goods_order_id, main_order, restaurant_id, dinner_list, product_class, farmer_product, 
          special_request, spicy, quantity, book_weekday, book_time, person, create_at) 
        VALUES (NULL, ${mainorder}, ${obj.dn_restaurant_id[i]}, ${obj.dn_dinner_list[i]}, ${obj.dn_product_class[i]}, ${obj.dn_farmer_product[i]}, '${obj.dn_special_request[i]}', ${obj.dn_spicy[i]}, ${obj.dn_quantity[i]}, '${obj.dn_book_weekday[i]}', '${obj.dn_book_time[i]}', '${obj.dn_person[i]}', NULL)`)
       }    
    }       
 })
 .then(results=>{
  output.push(results)
 return db.queryAsync(`INSERT INTO post_details (post_details_id, main_order, address_change, buyer, 
 buyer_phone, buyer_mobile, buyer_email, buyer_address, receiver, receiver_phone, receiver_mobile, 
 receiver_email, get_time, get_method, pay_method) 
 VALUES (NULL, ${mainorder}, '1', '${obj.buyer}', ${obj.buyer_phone}, ${obj.buyer_mobile}, '${obj.buyer_email}', '${obj.buyer_address}', '${obj.receiver}', ${obj.receiver_phone}, 
 ${obj.receiver_mobile}, '${obj.receiver_email}', '${obj.get_time}', '${obj.get_method}', '${obj.pay_method}');`)
})
.then(results=>{
  output.push(results)
 return db.queryAsync(`DELETE FROM customer_coupon WHERE customer_coupon_id = ${obj.usecoupon[0]}`)
})
.catch((error)=>{
     console.log(error)
   })
   
     
})




router.get('/cartsfm/:custermerId', (req,res)=>{
  let custermerId=req.params.custermerId
  const sql = `Select * From fm_goods_cart Inner join main_cart on main_cart.cart_id = fm_goods_cart.main_cart JOIN farmer_product on 
  farmer_product.sid = fm_goods_cart.farmer_product Where main_cart = ${custermerId} AND fm_goods_cart.status='購物中'`

  db.query(sql,(error,results)=>{
    console.log(error)
    res.json(results)
  })
})

router.get('/cartcourse/:custermerId', (req,res)=>{
  let custermerId=req.params.custermerId
  const sql = `SELECT * FROM course_cart as a JOIN course as b ON a.course = b.course_id JOIN class_room as c ON a.class_room = c.room_sid WHERE main_cart = ${custermerId} AND a.status = '購物中'`

  db.query(sql,(error,results)=>{
    console.log(error)
    res.json(results)
  })
})
router.get('/cartdn/:custermerId', (req,res)=>{
  let custermerId=req.params.custermerId
  const sql = `SELECT a.*, b.name as 'restaurant_name', b.cook as 'tip', c.name as 'food_name', 
  c.dinner_image as 'photo', d.name as 'ingredients', e.name as 'product', e.price as 'product_price' 
  FROM dn_goods_cart as a JOIN restaurant as b ON a.restaurant = b.restaurant_id 
  JOIN dinner_list as c ON a.dinner_list = c.dinner_id JOIN product_class as d ON a.product_class = d.class_sid 
  JOIN farmer_product as e ON a.farmer_product = e.sid WHERE a.status = '購物中' AND a.main_cart=${custermerId}`

  db.query(sql,(error,results)=>{
    console.log(results)
    console.log(error)
    res.json(results)
  })
})



router.get('/buyinfor/:custermerId', (req,res)=>{
  let custermerId=req.params.custermerId
  const sql = `Select * From post_info join main_cart on main_cart.cart_id = post_info.main_cart Where main_cart = ${custermerId}`

  db.query(sql,(error,results)=>{
    console.log(error)
    res.json(results)
  })
})



router.get('/fmnextbuy/:fm_goods_cart_id', (req,res)=>{
  let fm_goods_cart_id=req.params.fm_goods_cart_id
  const sql = `UPDATE fm_goods_cart SET status = '收藏中' WHERE  fm_goods_cart_id = ${fm_goods_cart_id}`

  db.query(sql,(error,results)=>{
    console.log(error)
    res.json(results)
  })
})


router.get('/coursenextbuy/:course_cart_id', (req,res)=>{
  let course_cart_id=req.params.course_cart_id
  const sql = `UPDATE course_cart SET status = '收藏中' WHERE  course_cart_id = ${course_cart_id}`

  db.query(sql,(error,results)=>{
    console.log(error)
    res.json(results)
  })
})


router.get('/dnnextbuy/:dn_goods_cart_id', (req,res)=>{
  let dn_goods_cart_id=req.params.dn_goods_cart_id
  const sql = `UPDATE dn_goods_cart SET status = '收藏中' WHERE  dn_goods_cart_id = ${dn_goods_cart_id}`

  db.query(sql,(error,results)=>{
    console.log(error)
    res.json(results)
  })
})

module.exports = router
