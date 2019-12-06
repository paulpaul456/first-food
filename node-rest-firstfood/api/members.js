const express = require('express')
const mysql = require('mysql')
const multer = require('multer')           //引入上傳檔案
const fs = require('fs')                   //寫入檔案
const nodemailer = require("nodemailer")   //忘記密碼寄信

const db = mysql.createConnection({
    host: '192.168.27.54',
    user: 'root',
    password: 'root',
    database: 'organicfood'
})
db.connect();

const upload = multer({dest: 'tmp_uploads/'}); //上傳檔案的暫存資料夾

const router = express.Router()
// router.get('/members/:memberId?', (req, res) => {
//     let mid = req.params.memberId
//     // const sql = `SELECT * FROM customer_information`
//     const sql = `SELECT * FROM customer_information WHERE customer_id = ${mid}`
//     db.query(sql, (error, results, fields) => {
//         console.log(error)
//         console.log(fields)

//         res.json(results)
//     })
// })
router.get('/members', (req, res) => {
    // let mid = req.params.memberId
    // const sql = `SELECT * FROM customer_information`
    const sql = `SELECT * FROM customer_information`
    db.query(sql, (error, results, fields) => {
        console.log(error)
        console.log(fields)

        res.json(results)
    })
})

// router.get('/members/login/:memberEmail?/:memberPassword?', (req, res) => {
//     let mEmail = req.params.memberEmail
//     let mPass = req.params.memberPassword
//     console.log(mPass)
//     const sql = `SELECT * FROM customer_information WHERE email = '${mEmail}' AND password = '${mPass}'`
//     db.query(sql, (error, results, fields) => {
//         console.log(error)
//         console.log(fields)

//         res.json(results)
//     })
// })

//session版 login
router.post('/members/login', (req, res) => {
    const sql = `SELECT * FROM customer_information WHERE email = ? AND password = ?`
    console.log(req.body)
    console.log('hihihi')
    db.query(sql, [req.body.username, req.body.password],  (error, results, fields) => {
        console.log(error)
        console.log(results)

        if(results.length === 1){
            console.log('hi')
            req.session.loginUser = results[0]; 
            res.json(results)
        } else {
            res.json(results)
        }

        
    })
})

router.get('/members/initialCheck', (req, res) => {
    res.json([req.session.loginUser])
})

router.get('/members/clearMemberSession', (req, res) => {
    delete req.session.loginUser 
    res.json([req.session.loginUser])
})



router.put('/members/detail/:memberId?', (req, res) => {
    let mid = Number(req.params.memberId)
    const sql = `UPDATE customer_information SET name= '${req.body.name}', mobile= '${req.body.mobile}', email= '${req.body.email}', address= '${req.body.address}', gender= '${req.body.gender}', about_me= '${req.body.about_me}', nickname= '${req.body.nickname}', my_file= '${req.body.my_file}' WHERE customer_id = ${mid}`
    db.query(sql, (error, result, fields) => {
        console.log(error)
        console.log(fields)

        res.json(result)
    })
})

router.post('/members/register', (req, res) => {
    const sql = `INSERT INTO customer_information (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`
    db.query(sql, (error, result, fields) => {
        console.log(error)
        console.log(fields)

        res.json(result)
    })
})

router.put('/members/changePassword', (req, res) => {
    let mid = Number(req.body.customer_id)
    console.log('mid: '+mid, 'newPassword: '+req.body.newPassword)
    const sql = `UPDATE customer_information SET password= '${req.body.newPassword}' WHERE customer_id = ${mid}`
    db.query(sql, (error, results, fields) => {
        console.log(error)
        console.log(fields)

        res.json(results)
    })
})

//優惠卷
router.get('/members/coupon/:memberId?', (req, res) => {
    let mid = Number(req.params.memberId)
    const sql = `SELECT * FROM customer_coupon WHERE customer_information = ${mid}`
    db.query(sql, (error, results, fields) => {
        res.json(results)
    }) 
}) 

//新增優惠卷
router.post('/members/earnCoupon', (req, res) => {
    const sql = `INSERT INTO customer_coupon (customer_information, pm_event, nam) VALUES (${req.body.customer_information}, ${req.body.pm_event}, 1)`
    db.query(sql, (error, results, fields) => {
        res.json(results)
    })     
})


//地址
router.get('/members/address/:memberId?', (req, res) => {
    let mid = Number(req.params.memberId)
    const sql = `SELECT * FROM address_change WHERE customer_information = ${mid} ORDER BY address_change_id`
    // "SELECT * FROM `address_change` WHERE 1 ORDER BY `address_change_id`"
    db.query(sql, (error, results, fields) => {
        res.json(results)
    }) 
})

//地址編輯
router.put('/members/addressEdit', (req, res) => {
    console.log(req.body)
    let aid = Number(req.body.address_change_id)
    // console.log(aid)
    // console.log(req.body.address)
    // const sql = `UPDATE address_change SET address= '${req.body.address}' WHERE address_change_id = ${aid}`
    const sql = `UPDATE address_change SET nickname= '${req.body.nickname}', receiver= '${req.body.receiver}', phone= '${req.body.phone}', address= '${req.body.address}' WHERE address_change_id = ${aid}`
    db.query(sql, (error, results, fields) => {
        console.log(error)
        res.json(results)
    })
})

router.delete('/members/addressDelete/:addressId?', (req, res) => {
    console.log(req.params.addressId)
    // console.log(req.body)
    let aid = Number(req.params.addressId)
    console.log(aid)
    const sql = `DELETE FROM address_change WHERE address_change_id= ${aid}`
    db.query(sql, (error, results, fields) => {
        console.log(error)
        res.json(results)
    })
})

//地址新增
router.post('/members/addressAdd', (req, res) => {
    const sql = `INSERT INTO address_change (customer_information, nickname, receiver, phone, address) VALUES (${req.body.customer_information}, '${req.body.nickname}', '${req.body.receiver}', ${req.body.phone}, '${req.body.address}')`
    db.query(sql, (error, results, fields) => {
        console.log(error)
        res.json(results)
    })
})

//上傳圖檔
router.post('/members/upload', upload.single('avatar'), (request, response) => {
    // response.json(request.files)
    console.log(request.file)

    if(request.file && request.file.originalname){
        console.log(request.file)

        switch(request.file.mimetype){
            case 'image/png':
            case 'image/jpeg':
                fs.createReadStream(request.file.path)
                    .pipe(
                        fs.createWriteStream('public/images/' + request.file.originalname)
                    )

                response.json(request.file)
                // response.send('ok')
                break       
            default: 
                return response.json({message: 'wrong file type!'})
        }
    }else{
        response.send({message: 'no upload!'})
    }
})

//新增購物車
router.post('/members/addCart', (req, res) => {
    console.log('addCart')
    console.log(req.body)

    const sql = `INSERT INTO main_cart (customer_information) VALUES (${req.body.customer_information})`
    db.query(sql, (error, results, fields) => {
        console.log(error)
        res.json(results)
    })
})

//農產品收藏
router.get('/members/farmerProduct/:farmerId?', (req, res) => {
    const farmerId = req.params.farmerId
    const sql = `SELECT * FROM farmer_product WHERE sid= ${farmerId}`
    db.query(sql, (error, results, fields) => {
        console.log(error)
        res.json(results)
    })
})

//課程收藏
router.get('/members/course/:courseId?', (req, res) => {
    const courseId = req.params.courseId
    const sql = `SELECT * FROM course WHERE course_id= ${courseId}`
    db.query(sql, (error, results, fields) => {
        console.log(error)
        res.json(results)
    })
})

//菜色收藏
router.get('/members/dinnerProduct/:cartId?', (req, res) => {
    const cartId = req.params.cartId
    console.log('cartId:', cartId)
    // const sql = `SELECT * FROM dinner_list WHERE dinner_id= ${cartId}`
    let sql = `SELECT a.dn_goods_cart_id, a.restaurant, b.name as restaurant_name, b.cooktype, c.name as dinner_name, d.name as ingredient, e.name as product, a.special_request, a.spicy, a.quantity 
        FROM dn_goods_cart as a
        JOIN restaurant as b ON a.restaurant = b.restaurant_id
        JOIN dinner_list as c ON a.dinner_list = c.dinner_id
        JOIN product_class as d ON a.product_class = d.class_sid
        JOIN farmer_product as e ON a.farmer_product = e.sid
        WHERE 1 AND status = '收藏中' AND main_cart = ${cartId}` 
    db.query(sql, (error, results, fields) => {
        console.log(error)
        console.log('以下是菜色')
        console.log(results)
        res.json(results)
    })
})


//菜色單筆刪除
router.delete('/members/deleteCart/:new_cart_id', (req,res)=>{
    let new_cart_id=req.params.new_cart_id
    let sql = `DELETE FROM dn_goods_cart WHERE dn_goods_cart_id IN (${new_cart_id})`
    db.query(sql, (error, results, fields) => {
        console.log(error)
        // console.log('以下是菜色')
        console.log(results)
        res.json(results)
    })
  })



//遊戲角色
router.get('/members/gameUser/:customer_id', (req, res) => {
    let customer_information = req.params.customer_id
    let sql = `SELECT * FROM peoplehp WHERE customer_information = ${customer_information}`
    db.query(sql, (error, results, fields) => {
        console.log(error)
        console.log('以下是遊戲角色')
        console.log(results)
        res.json(results)
    })
})

//遊戲角色血量增加
router.put('/members/gameHp', (req, res) => {
    console.log('gameHp')
    let pid = Number(req.body.peoplehp_sid)
    let hp = Number(req.body.hp)
    let upgrade_point = Number(req.body.upgrade_point)
    const sql = `UPDATE peoplehp SET hp = ${hp}, upgrade_point = ${upgrade_point} WHERE peoplehp_sid = ${pid}`
    db.query(sql, (error, results, fields) => {
        console.log(error)
        res.json(results)
    })
})

//遊戲角色魔力增加
router.put('/members/gameMp', (req, res) => {
    let pid = Number(req.body.peoplehp_sid)
    let mp = Number(req.body.mp)
    let upgrade_point = Number(req.body.upgrade_point)
    const sql = `UPDATE peoplehp SET mp = ${mp}, upgrade_point = ${upgrade_point} WHERE peoplehp_sid = ${pid}`
    db.query(sql, (error, results, fields) => {
        console.log(error)
        res.json(results)
    })
})

//控制升級點數
router.put('/members/gameUpgradePoint', (req, res) => {
    console.log('gameUpgradePoint')
    let pid = Number(req.body.peoplehp_sid)
    let upgrade_point = Number(req.body.upgrade_point)
    const sql = `UPDATE peoplehp SET upgrade_point = ${upgrade_point} WHERE peoplehp_sid = ${pid}`
    db.query(sql, (error, results, fields) => {
        console.log(error)
        res.json(results)
    })
})



//忘記密碼
router.post("/members/mail", (req, res) => {
    console.log(req.body)
    let email = req.body.member_email;
    // let account = req.body.member_account;
    let Member = new MemberEmailPWD(email);
    console.log(email);
    console.log(Member.getMemberPwd());
    db.query(Member.getMemberPwd(), (error, rows) => {
      console.log(rows);
      if (rows.length >= 1) {
        let transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: "weijung771220@gmail.com",
            pass: "a7788529"
          }
        });
        let mailOptions = {
          from: "weijung771220@gmail.com",
          to: email,
          subject: "密碼設定",
          html: `
          <h1>親愛的會員您好,您的密碼是:${rows[0].password}</h1>
          <div>歡迎再度蒞臨初食網站<a href="http://localhost:3000">http://localhost:3000</a></div>
          ` 
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log(error)
            return res.json({
              status: "404",
              message: error
            });
          }
        });
      
        return res.json({
          status: "202",
          message: "重設密碼信件已發送,請至信箱確認"
        });
      } else {
        res.json({
          status: "404",
          message: "請輸入正確的資訊"
        });
      }
    });
    console.log(email);
  });
  router.post("/members/mailEdit", (req, res) => {
    let member_sid = req.body.member_sid;
    let member_password = req.body.member_password;
    let Member = new MemberEmailPWD("", "", member_sid, member_password);
    console.log(Member.editMemberPwd());
    db.query(Member.editMemberPwd(), (error, rows) => {
      console.log(rows.affectedRows);
      if (rows.affectedRows === 1) {
        res.json({
          status: "202",
          message: "修改成功"
        });
      } else {
        res.json({
          status: "404",
          message: "修改失敗"
        });
      }
    });
  });


// //忘記密碼
// router.post("/mail", (req, res) => {
//     let email = req.body.member_email;
//     let account = req.body.member_account;
//     let Member = new MemberEmailPWD(email, account);
//     console.log(email, account);
//     console.log(Member.getMemberPwd());
//     db.query(Member.getMemberPwd(), (error, rows) => {
//       console.log(rows);
//       if (rows.length >= 1) {
//         let transporter = nodemailer.createTransport({
//           service: "Gmail",
//           auth: {
//             user: "handmade20190927@gmail.com",
//             pass: "Aa27089433"
//           }
//         });
//         let mailOptions = {
//           from: "handmade20190927@gmail.com",
//           to: email,
//           subject: "密碼設定",
        //   html: `
        //   <h1>親愛的會員您好,您的密碼是:${rows[0].member_password}</h1>
        //   <div>若要修改密碼請點擊連結重新設定密碼<a href="http://localhost:3000/handmade/email/${rows[0].member_sid}">http://localhost:3000/handmade/email/${rows[0].member_sid}</a></div>
        //   `
//         };
//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             return res.json({
//               status: "404",
//               message: error
//             });
//           }
//         });
//         return res.json({
//           status: "202",
//           message: "重設密碼信件已發送,請至信箱確認"
//         });
//       } else {
//         res.json({
//           status: "404",
//           message: "請輸入正確的資訊"
//         });
//       }
//     });
//     console.log(email);
//   });
//   router.post("/mailEdit", (req, res) => {
//     let member_sid = req.body.member_sid;
//     let member_password = req.body.member_password;
//     let Member = new MemberEmailPWD("", "", member_sid, member_password);
//     console.log(Member.editMemberPwd());
//     db.query(Member.editMemberPwd(), (error, rows) => {
//       console.log(rows.affectedRows);
//       if (rows.affectedRows === 1) {
//         res.json({
//           status: "202",
//           message: "修改成功"
//         });
//       } else {
//         res.json({
//           status: "404",
//           message: "修改失敗"
//         });
//       }
//     });
//   });


  

class MemberEmailPWD {
    constructor(member_email) {
      this.member_email = member_email;
    //   this.member_account = member_account;
    }
    getMemberPwd() {
      let sql = `SELECT  password, customer_id
      FROM  customer_information WHERE email = "${this.member_email}"`;
      return sql;
    }
    editMemberPwd() {
      let sql = `UPDATE customer_information SET password="${this.member_password}" WHERE customer_id="${this.member_sid}"`;
      return sql;
    }
  }
  

// router.post('/members/register', (req, res) => {
//     const sql = `INSERT INTO customer_information (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}', '${new Date()}')`
//     db.query(sql, (error, result, field) => {
//         console.log(error)
//         console.log(fields)

//         res.json(result)
//     })
// })

// router.put('/members/detail/:memberId', (req, res) => {
//     let mId =  req.params.memberId
//     let member = new Member(
//         req.body.name, 
//         req.body.email, 
//         req.body.password, 
//         req.body.mobile, 
//         req.body.birthday, 
//         req.body.address,
//         req.body.about_me,
//         req.body.gender,
//         req.body.my_file,
//         req.body.created_at,
//         )
//     db.query(member.updateCommentByIdSQL(mId), (err, data) => {
//         if(!err){
//             if(data && data.length > 0) {
//                 res.status(200)
//                 res.json(data)
//             } else {
//                 res.status(200)
//                 res.json('Data not found')
//             }
//         }
//     }) 
// })
  

module.exports = router
