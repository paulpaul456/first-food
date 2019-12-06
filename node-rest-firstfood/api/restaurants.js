import express from 'express'
import db from '../db/database'
import Restaurants from '../domain/restaurants'
import DinnerProducts from '../domain/dinnerProducts'
import { isRegExp } from 'util'

const bluebird = require('bluebird')
bluebird.promisifyAll(db)

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false})

const router = express.Router()

const moment = require('moment-timezone')

router.use((req, res, next) => { console.log('passed router.use at Restaurants API ');next();})
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.post('/', urlencodedParser, (req, res, next) => {
    let output = []
    let foodclass = req.body.foodclass
    let cookday = req.body.cookday
    let cooktype = req.body.cooktype
    let w = req.body.w
    let number1 = -1
    let number2 = -1
    let vegetarian = ''

    let lat = req.body.lat
    let lng = req.body.lng
    let distance = 0.1

    // console.log('loadresafterlogin')

    if(req.body.number1 > -1){
      number1 = req.body.number1
    }
    if(req.body.number2 > -1){
      number2 = req.body.number2
    }
    if(req.body.vegetarian){
      vegetarian = req.body.vegetarian
    }
    if(req.body.distance){
      distance = req.body.distance
    }

    console.log(req.body)

    db.queryAsync(Restaurants.getAllRestaurantSQL(lat, lng, distance, cookday, foodclass, cooktype, number1, number2, vegetarian))
    .then(results=>{
      output.push(results)
      return db.queryAsync(Restaurants.getAllRestaurantNumberSQL(lat, lng, distance, cookday, foodclass, cooktype, number1, number2, vegetarian))
    })
    .then(results=>{
      // console.log(results[0])
      output.push(results[0])
      return db.queryAsync(Restaurants.getAllRestaurantNewestCommentSQL(lat, lng, distance, cookday, foodclass, cooktype, number1, number2, vegetarian))
    })
    .then(results=>{
      // console.log(results)
      // output.push(results)
      output[0].map(el=>{
        results.forEach(val=>{
           if(el.restaurant_id === val.restaurant){
            el.comment = val.comment;
            el.create_at = val.create_at;
            el.nickname = val.nickname;
            el.com_num = val.com_num
            el.star = val.star
            // console.log(el.comment)
        }
        })
        return el
      })
      // console.log(output[0])
      output.push(results)
      res.json(output)
    })
    .catch((error)=>{
      console.log(error)
    })
})


router.post('/n', urlencodedParser, (req, res, next) => {
  let output = []
  let w = req.body.w
  let name = req.body.name
  let cookday = req.body.cookday
  let foodclass = req.body.foodclass
  let cooktype = req.body.cooktype
  let number1 = -1
  let number2 = -1
  let vegetarian = ''

  let lat = req.body.lat
  let lng = req.body.lng
  let distance = 0.1

    if(req.body.number1 > -1){
      number1 = req.body.number1
    }
    if(req.body.number2 > -1){
      number2 = req.body.number2
    }
    if(req.body.distance){
      distance = req.body.distance
    }

  // console.log(req.body)

  db.queryAsync(Restaurants.getAllRestaurantForCookSQL(lat, lng, distance, name, cookday, foodclass, cooktype, number1, number2, vegetarian))
  .then(results=>{
    // console.log(results)
    output.push(results)
    return db.queryAsync(DinnerProducts.getProductClassNameForCookByNameSQL(name))
  })
  .then(results=>{
    output.push(results[0])
    return db.queryAsync(Restaurants.getAllRestaurantNumberForCookSQL(lat, lng, distance, name, cookday, foodclass, cooktype, number1, number2, vegetarian))
  })

  .then(results=>{
    // console.log(results[0])
    output.push(results[0])
    return db.queryAsync(Restaurants.getAllRestaurantNewestCommentSQL(lat, lng, distance, cookday, foodclass, cooktype, number1, number2, vegetarian))
  })
  .then(results=>{
    // console.log(results)
    // output.push(results)
    output[0].map(el=>{
      results.forEach(val=>{
         if(el.restaurant_id === val.restaurant){
          el.comment = val.comment;
          el.create_at = val.create_at;
          el.nickname = val.nickname;
          el.com_num = val.com_num
          el.star = val.star
          // console.log(el.comment)
      }
      })
      return el
    })
    // console.log(output[0])
    output.push(results)
    res.json(output)
  })
  .catch((error)=>{
    console.log(error)
  })
})

router.post('/r/', (req, res, next) => {
    console.log(req.body)
    let output = []
    let res_id = 0
    let name = 0
    let customer_id = 0
    let small_cat = ''
    let veg_type = ''
    let flavor = ''
    let tag_id = 0

    if(req.body.res_id){
      res_id = req.body.res_id
    }
    if(req.body.name){
      name = req.body.name
    }
    if(req.body.small_cat){
      small_cat = req.body.small_cat
    }
    if(req.body.veg_type){
      veg_type = req.body.veg_type
    }
    if(req.body.flavor){
      flavor = req.body.flavor
    }
    if(req.body.tag_id){
      tag_id = req.body.tag_id
    }
    if(req.body.customer_id){
      customer_id = req.body.customer_id
    }

    // console.log(name)
    // console.log(tag_id)

    db.queryAsync(Restaurants.getRestaurantByIdSQL(res_id))
    .then(results=>{
      output.push(results[0]);
      if(name !==0 && tag_id !== 0){
        return db.queryAsync(DinnerProducts.getDinnerNumberForCookByTagSQL(res_id, name, tag_id, small_cat, veg_type, flavor))
      }
      else if(name !== 0){
        console.log('enter')
        return db.queryAsync(DinnerProducts.getDinnerNumberForCookSQL(res_id, name, small_cat, veg_type, flavor))
      }
      else if(tag_id !== 0){
        return db.queryAsync(DinnerProducts.getDinnerNumberByTagSQL(res_id, tag_id, small_cat, veg_type, flavor))
      }
      else{
        return db.queryAsync(DinnerProducts.getDinnerNumberByIdSQL(res_id, small_cat, veg_type, flavor))
      }     
    })
    .then(results=>{
      output.push(results)
      if(name !==0 && tag_id !== 0){
        return db.queryAsync(DinnerProducts.getDinnerProductForCookByTagSQL(res_id, name, tag_id, small_cat, veg_type, flavor))
      }
      else if(name !== 0){
        return db.queryAsync(DinnerProducts.getAllDinnerForCookSQL(res_id, name, small_cat, veg_type, flavor))
      }
      else if(tag_id !== 0){
        return db.queryAsync(DinnerProducts.getDinnerProductByTagSQL(res_id, tag_id, small_cat, veg_type, flavor))
      }
      else {
        return db.queryAsync(DinnerProducts.getAllDinnerProductSQL(res_id, small_cat, veg_type, flavor))
      }
    })
    .then(results=>{
      output.push(results)
      return db.queryAsync(DinnerProducts.getDinnerCommentStarSQL (res_id, tag_id, small_cat, veg_type, flavor))
    })
    .then(results=>{
      // output.push(results)
      output[2].map(el=>{
        results.forEach(val=>{
          if(el.dinner_id == val.dinner){
            el.star = val.star
            el.com_num = val.com_num
          }
          return el
        })
      })
      if(customer_id){
        return db.queryAsync(DinnerProducts.getCostumerDnLoveBySQL(customer_id))
      }
      res.json(output)
    })
    .then(results=>{
      // console.log(output[2])
      output[2].map(el=>{
        results.forEach(val=>{
          if(el.dinner_id == val.dinner_list){
            el.dn_liked = true
          }
          return el
        })
      })
      res.json(output)
    })
    .catch((error)=>{
      console.log('**sql error **:', error)
    })
  })


  router.get('/d/:restaurantId/:name/:dinner_id/:class_sid?', (req, res, next) => {
    let output = []
    let restaurantId = req.params.restaurantId
    let dinner_id =  req.params.dinner_id
    let name =  req.params.name
    let class_sid = Number(req.params.class_sid)
    console.log(class_sid)
    db.queryAsync(DinnerProducts.getDinnerByIdSQL(dinner_id))
    .then(results=>{
        output.push(results[0])
        return db.queryAsync(DinnerProducts.getDinnerProductClassByIdSQL(dinner_id))
      })
    .then(results=>{
        output.push(results)
        if(name !== '0'){
          console.log(name)
          return db.queryAsync(DinnerProducts.getDinnerProductClassForCookByIdSQL(dinner_id, name))
        }
        console.log('what')
        return db.queryAsync(DinnerProducts.getDefaultDinnerProductClassByIdSQL(dinner_id))
      })
    .then(results=>{
        console.log(results[0])
        if(class_sid){
          return db.queryAsync(DinnerProducts.getDinnerFarmerProductByIdSQL(class_sid))
        }else{
          let class_sid = results[0].class_sid
          console.log(class_sid)
          return db.queryAsync(DinnerProducts.getDinnerFarmerProductByIdSQL(class_sid))
        }
      })
    .then(results=>{
        output.push(results)
        return db.queryAsync(Restaurants.getRestaurantByIdSQL(restaurantId))
      })
    .then(results=>{
        output.push(results[0])
        return db.queryAsync(DinnerProducts.getAllProductClassSQL(restaurantId))
      })
    .then(results=>{
        output.push(results)
        if(name !== '0'){
          return db.queryAsync(DinnerProducts.getDinnerProductClassForCookByIdSQL(dinner_id, name))
        }
        if(class_sid){
          return db.queryAsync(DinnerProducts.getNewDefaultProductClassByIdSQL(class_sid))
        }else{
          return db.queryAsync(DinnerProducts.getDefaultDinnerProductClassByIdSQL(dinner_id))
        }
      })
    .then(results=>{
        output.push(results[0])
        // console.log(class_sid)
        if(name !== '0'){
          return db.queryAsync(DinnerProducts.getDinnerFarmerProductForCookByIdSQL(dinner_id, name, class_sid))
        }
        if(class_sid){
          class_sid = req.params.class_sid
          // console.log(class_sid)
        }else{
           class_sid = results[0].class_sid
        }     
        return db.queryAsync(DinnerProducts.getDefaultFarmerProductByIdSQL(class_sid, dinner_id))
      })
    .then(results=>{
      output.push(results[0])
      return db.queryAsync(DinnerProducts.getDinnerCommentByIdSQL(dinner_id))
    })
    .then(results=>{
      if(results[0]){
        output[0].star = results[0].star
        output[0].com_num = results[0].com_num
      }   
      res.json(output)
    })
    .catch((error)=>{
      console.log('**sql error **:', error)
    })
  })

// 加入購物車
router.post('/addcart', (req, res, next) => {
    console.log(req.body)
    let customer_id = req.body.customer_id
    db.queryAsync(DinnerProducts.getMainCartIdByCustomerIdSQL(customer_id))
    .then(results=>{
        let cart_id = results[0].cart_id
        let res_id = req.body.res_id
        let dinner_id = req.body.dinner_id
        let class_sid = req.body.class_sid
        let sid = req.body.sid
        let inputTEXT = req.body.inputTEXT
        let spicy = req.body.spicy
        let quantity = req.body.quantity
        let status = '點餐中'
        let addlove = req.body.addlove
        if(addlove){
          status = '收藏中'
        }

        return db.queryAsync(DinnerProducts.addDnCartsBeforeBookSQL(cart_id, res_id, dinner_id, class_sid, sid, inputTEXT, spicy, quantity, status))
      })
    .then(results=>{
      res.json(results)
    })
    .catch((error)=>{
      console.log('**sql error **:', error)
    })
   
})

// 點餐中改成購物中
router.put('/updatecart/:customer_id', (req, res, next) => {
  let customer_id = req.params.customer_id
  let output = {}
  let mainCartId = 0
  let date = req.body.bookWeekday.slice(0,10)
  let product = new DinnerProducts('',0,req.body.cartId,date,req.body.bookTime,req.body.bookPerson)
  console.log(product)
  db.queryAsync(DinnerProducts.getMainCartIdByCustomerIdSQL(customer_id))
  .then(results=>{
    mainCartId = results[0].cart_id
    return db.queryAsync(product.updateDnCartsBeforeBookSQL(mainCartId))
  })
  .then(results=>{
    output.data = results
    output.status= 404
    if(results.affectedRows>0){
      output.status= 200
    }
    res.json(output)
  }).catch(error=>{
    console.log(error)
  })
})

// 讀取點餐清單
router.get('/readcart/:customer_id', (req, res) => {
  let customer_id = req.params.customer_id
  let output = {}
  let cart_id = 0
  db.queryAsync(DinnerProducts.getMainCartIdByCustomerIdSQL(customer_id))
  .then(results=>{
    cart_id = results[0].cart_id
    return db.queryAsync(DinnerProducts.readDnCartsBeforeBookSQL(cart_id))
  })
  .then(results=>{
    output.data = results
    return db.queryAsync(DinnerProducts.readDnCartsNumberBeforeBookSQL(cart_id))
  })
  .then(results=>{
    // output.push(results[0])
    output.number = results[0]
    res.json(output)
  })
  .catch(error=>{
    console.log(error)
  })
})

// 刪除點餐清單
router.post('/deletecart', (req, res) => {
  let output = {}
  let cart_id = req.body.sidAr
  let customer_id = req.body.customer_id
  let main_cart = 0
  db.queryAsync(DinnerProducts.deleteDnCartsBeforeBookSQL(cart_id))
  .then(results=>{
    output.affectedRows = results.affectedRows
    return db.queryAsync(DinnerProducts.getMainCartIdByCustomerIdSQL(customer_id))
  })
  .then(results=>{
    main_cart = results[0].cart_id
    // console.log(results[0])
    return db.queryAsync(DinnerProducts.readDnCartsBeforeBookSQL(main_cart))
  })
  .then(results=>{
    output.data = results
    res.json(output)
  })
  .catch(error=>{
    console.log(error)
  })
})

// 菜色加入收藏
router.post('/addlovecart', (req, res) => {
  let output = {}
  let cart_id = req.body.sidAr
  let customer_id = req.body.customer_id
  let main_cart = 0
  db.queryAsync(DinnerProducts.loveDnCartsBeforeBookSQL(cart_id))
  .then(results=>{
    output.affectedRows = results.affectedRows
    return db.queryAsync(DinnerProducts.getMainCartIdByCustomerIdSQL(customer_id))
  })
  .then(results=>{
    main_cart = results[0].cart_id
    // console.log(results[0])
    return db.queryAsync(DinnerProducts.readDnCartsBeforeBookSQL(main_cart))
  })
  .then(results=>{
    output.data = results
    res.json(output)
  })
  .catch(error=>{
    console.log(error)
  })
})

// 新增餐廳評論
router.post('/addResComment', (req, res) => {
  let output = {}
  let res_id = req.body.res_id
  let customer_id = req.body.customer_id
  let stars = req.body.stars
  let comment = req.body.comment

  const myFormat = 'YYYY-MM-DD HH:mm:ss'
  let time = moment(new Date())
  let creat_at = time.format(myFormat)

  db.queryAsync(DinnerProducts.addResCommentSQL(res_id, customer_id, stars, comment, creat_at))
  .then(results=>{
    output = results
    res.json(output)
  })
  .catch(error=>{
    console.log(error)
  })
})

// 點擊喜歡或討厭餐廳評論
router.post('/clickResComment/:count?', (req, res)=>{
  let output = {}
  let res_comment_id = db.pool.escape(req.body.res_comment_id)
  let customer_id = db.pool.escape(req.body.customer_id)
  let like_or_not = parseInt(req.body.like_or_not)
  let res_id = req.body.res_id
  console.log('like_or_not: '+like_or_not)

  let count = 1
  if(req.params.count !== 'undefined'){
    count = req.params.count
  }
  // let alreadyClick_or_not = db.pool.escape(req.body.alreadyClick_or_not)

  if(like_or_not === 3 || like_or_not === 4){
    db.queryAsync(DinnerProducts.UPDATEclickResCommentSQL(res_comment_id, customer_id, like_or_not))
    .then(results=>{
      // console.log(results.affectedRows)
      if(results.affectedRows){
        return db.queryAsync(DinnerProducts.getResCommentLikeOrNotSQL(res_comment_id))
      }
    })
    .then(results=>{
      console.log(results[0])
      let p_like = results[0].like
      let p_dislike = results[0].dislike
      return db.queryAsync(DinnerProducts.updateResCommentSQL(res_comment_id, p_like, p_dislike))
    })
    .then(results=>{
      return db.queryAsync(DinnerProducts.readResCommentSQL(res_id, count))
    })
    .then(results=>{
      output.comment_data = results
      return db.queryAsync(DinnerProducts.readResCommentNumberSQL(res_id))
    })
    .then(results=>{
      output.number = results[0]
      if(customer_id){
        return db.queryAsync(DinnerProducts.readWhoLikeCommentSQL(res_id ,customer_id))
      }
      res.json(output)
    })
    .then(results=>{
      output.comment_data.forEach(value=>{
          value.like_or_not = '都沒按'
          results.forEach(el=>{
          if(el.res_comment === value.res_comment_id){
            return value.like_or_not = '已按喜歡'
          }       
        })
      })  
      // output.wholike = results
      if(customer_id){
        return db.queryAsync(DinnerProducts.readWhoDislikeCommentSQL(res_id, customer_id))
      }
    })
    .then(results=>{
      output.comment_data.forEach(value=>{
        results.forEach(el=>{
        if(el.res_comment === value.res_comment_id)
          return value.like_or_not = '已按討厭'
        })
      })
      // output.whodislike = results
      res.json(output)
    })
    .catch(error=>{
      console.log(error)
    })
  }else if (like_or_not === 1 || like_or_not === 2){
    db.queryAsync(DinnerProducts.clickResCommentSQL(res_comment_id, customer_id, like_or_not))
    .then(results=>{
      console.log('新增按讚 : '+results.affectedRows)
      if(results.affectedRows){
        return db.queryAsync(DinnerProducts.getResCommentLikeOrNotSQL(res_comment_id))
      }
    })
    .then(results=>{
      console.log('新增按讚 : getResCommentLikeOrNotSQL'+results)
      let p_like = results[0].like
      let p_dislike = results[0].dislike
      return db.queryAsync(DinnerProducts.updateResCommentSQL(res_comment_id, p_like, p_dislike))
    })
    .then(results=>{
      return db.queryAsync(DinnerProducts.readResCommentSQL(res_id, count))
    })
    .then(results=>{
      output.comment_data = results
      return db.queryAsync(DinnerProducts.readResCommentNumberSQL(res_id))
    })
    .then(results=>{
      output.number = results[0]
      if(customer_id){
        return db.queryAsync(DinnerProducts.readWhoLikeCommentSQL(res_id ,customer_id))
      }
      res.json(output)
    })
    .then(results=>{
      output.comment_data.forEach(value=>{
          value.like_or_not = '都沒按'
          results.forEach(el=>{
          if(el.res_comment === value.res_comment_id){
            return value.like_or_not = '已按喜歡'
          }       
        })
      })  
      // output.wholike = results
      if(customer_id){
        return db.queryAsync(DinnerProducts.readWhoDislikeCommentSQL(res_id, customer_id))
      }
    })
    .then(results=>{
      output.comment_data.forEach(value=>{
        results.forEach(el=>{
        if(el.res_comment === value.res_comment_id)
          return value.like_or_not = '已按討厭'
        })
      })
      // output.whodislike = results
      res.json(output)
    })
    .catch(error=>{
      console.log(error)
    })
  }else{
    db.queryAsync(DinnerProducts.DELETEclickResCommentSQL(res_comment_id, customer_id))
    .then(results=>{
      console.log(results.affectedRows)
      if(results.affectedRows){
        return db.queryAsync(DinnerProducts.getResCommentLikeOrNotSQL(res_comment_id))
      }
    })
    .then(results=>{
      console.log(results[0])
      let p_like = results[0].like
      let p_dislike = results[0].dislike
      return db.queryAsync(DinnerProducts.updateResCommentSQL(res_comment_id, p_like, p_dislike))
    })
    .then(results=>{
      return db.queryAsync(DinnerProducts.readResCommentSQL(res_id, count))
    })
    .then(results=>{
      output.comment_data = results
      return db.queryAsync(DinnerProducts.readResCommentNumberSQL(res_id))
    })
    .then(results=>{
      output.number = results[0]
      if(customer_id){
        return db.queryAsync(DinnerProducts.readWhoLikeCommentSQL(res_id ,customer_id))
      }
      res.json(output)
    })
    .then(results=>{
      output.comment_data.forEach(value=>{
          value.like_or_not = '都沒按'
          results.forEach(el=>{
          if(el.res_comment === value.res_comment_id){
            return value.like_or_not = '已按喜歡'
          }       
        })
      })  
      // output.wholike = results
      if(customer_id){
        return db.queryAsync(DinnerProducts.readWhoDislikeCommentSQL(res_id, customer_id))
      }
    })
    .then(results=>{
      output.comment_data.forEach(value=>{
        results.forEach(el=>{
        if(el.res_comment === value.res_comment_id)
          return value.like_or_not = '已按討厭'
        })
      })
      // output.whodislike = results
      res.json(output)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  
})

// 讀取餐廳評論
router.get('/readResComment/:res_id/:customer_id?/:count?', (req, res) => {
  let output = {
    comment_data: [],
    number: {},
  }
  console.log(req.params)
  let res_id = req.params.res_id
  let customer_id = req.params.customer_id
  // let count = req.params.count
  let count = 1
  if(req.params.count !== 'undefined'){
    count = req.params.count
  }

  db.queryAsync(DinnerProducts.readResCommentSQL(res_id, count))
  .then(results=>{
    output.comment_data = results
    return db.queryAsync(DinnerProducts.readResCommentNumberSQL(res_id))
  })
  .then(results=>{
    output.number = results[0]
    if(customer_id){
      return db.queryAsync(DinnerProducts.readWhoLikeCommentSQL(res_id ,customer_id))
    }
    res.json(output)
  })
  .then(results=>{
    output.comment_data.forEach(value=>{
        value.like_or_not = '都沒按'
        results.forEach(el=>{
        if(el.res_comment === value.res_comment_id){
          return value.like_or_not = '已按喜歡'
        }       
      })
    })  
    // output.wholike = results
    if(customer_id){
      return db.queryAsync(DinnerProducts.readWhoDislikeCommentSQL(res_id, customer_id))
    }
  })
  .then(results=>{
    output.comment_data.forEach(value=>{
      results.forEach(el=>{
      if(el.res_comment === value.res_comment_id)
        return value.like_or_not = '已按討厭'
      })
    })
    // output.whodislike = results
    res.json(output)
  })
  .catch(error=>{
    console.log(error)
  })
})


// 新增菜色評論
router.post('/addDnComment', (req, res) => {
  let output = {}
  let dinner_id = req.body.dinner_id
  let customer_id = req.body.customer_id
  let stars = req.body.stars
  let comment = req.body.comment

  const myFormat = 'YYYY-MM-DD HH:mm:ss'
  let time = moment(new Date())
  let creat_at = time.format(myFormat)

  db.queryAsync(DinnerProducts.addDnCommentSQL(dinner_id, customer_id, stars, comment, creat_at))
  .then(results=>{
    output = results
    res.json(output)
  })
  .catch(error=>{
    console.log(error)
  })
})

// 讀取菜色評論
router.get('/readDnComment/:dinner_id/:customer_id?', (req, res) => {
  let output = {
    comment_data: [],
    number: {},
  }
  let dinner_id = req.params.dinner_id
  let customer_id = req.params.customer_id
  console.log(req.params)

  db.queryAsync(DinnerProducts.readDnCommentSQL(dinner_id))
  .then(results=>{
    output.comment_data = results
    return db.queryAsync(DinnerProducts.readDnCommentNumberSQL(dinner_id))
  })
  .then(results=>{
    output.number = results[0]
    return db.queryAsync(DinnerProducts.readWhoLikeDnCommentSQL(dinner_id, customer_id))
  })
  .then(results=>{
    output.comment_data.forEach(value=>{
        value.like_or_not = '都沒按'
        results.forEach(el=>{
        if(el.dn_goods_comment === value.dn_goods_comment_id){
          return value.like_or_not = '已按喜歡'
        }       
      })
    })  
    // output.wholike = results
    if(customer_id){
      return db.queryAsync(DinnerProducts.readWhoDislikeCommentSQL(dinner_id, customer_id))
    }
  })
  .then(results=>{
    output.comment_data.forEach(value=>{
      results.forEach(el=>{
      if(el.dn_goods_comment === value.dn_goods_comment_id)
        return value.like_or_not = '已按討厭'
      })
    })
    // output.whodislike = results
    res.json(output)
  })
  .catch(error=>{
    console.log(error)
  })
})


// 以下沒用到~~~~~~~~~
router.put('/:restaurantId', (req, res, next) => {
    let pid = req.params.restaurantId
    let product = new Product(req.body.name, req.body.price)
    db.query(product.updateRestaurantByIdSQL(pid), (err, data) => {
        if (!err) {
            if (data && data.length > 0) {
                res.status(200).json({
                    message: 'Restaurants found.',
                    restaurant: data,
                })
            } else {
                res.status(200).json({
                    message: 'Restaurants Not found.',
                })
            }
        }
    })
})

router.delete('/:restaurantId', (req, res, next) => {
    let pid = req.params.restaurantId

    db.query(Product.deleteRestaurantByIdSQL(pid), (err, data) => {
        if (!err) {
            if (data && data.affectedRows > 0) {
                res.status(200).json({
                    message: `Restaurant deleted with id = ${pid}.`,
                    affectedRows: data.affectedRows,
                })
            } else {
                res.status(200).json({
                    message: 'Restaurants Not found.',
                })
            }
        }
    })
})

module.exports = router
