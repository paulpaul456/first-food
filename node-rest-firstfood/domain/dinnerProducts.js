import db from '../db/database'

class DinnerProducts {
    constructor(name, price,cartId,bookWeekday,bookTime,bookPerson) {
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
        this.cartId = cartId
        this.bookWeekday = bookWeekday
        this.bookTime = bookTime
        this.bookPerson = bookPerson
    }
    updateDnCartsBeforeBookSQL(mainCartId) {
        console.log('hiiiiiiii',mainCartId,this.bookWeekday,this.bookTime,this.bookPerson,this.cartId)
        let sql = `UPDATE dn_goods_cart SET book_weekday="${this.bookWeekday}",
        book_time="${this.bookTime}",person="${this.bookPerson}",
        status = "購物中", create_at = NOW() WHERE main_cart = ${mainCartId} AND dn_goods_cart_id IN (${this.cartId})`
        return sql
    }
    static getMainCartIdByCustomerIdSQL(customer_id){
        let sql = `SELECT cart_id FROM main_cart WHERE customer_information = ` + db.pool.escape(customer_id)

        return sql
    }

    static addDnCartsBeforeBookSQL(cart_id, res_id, dinner_id, class_sid, sid, inputTEXT, spicy, quantity, status) {
        let sql = `INSERT INTO dn_goods_cart (dn_goods_cart_id, main_cart, restaurant, dinner_list, product_class, farmer_product, special_request, spicy, quantity, book_weekday, book_time, person, status, create_at) VALUES(NULL, ${cart_id}, ${res_id}, ${dinner_id}, ${class_sid}, ${sid}, '${inputTEXT}', ${spicy}, ${quantity}, NULL, NULL, NULL, '${status}', NULL)`
        return sql
    }

    static readDnCartsBeforeBookSQL(cart_id){
        cart_id = db.pool.escape(cart_id)
        let sql = `SELECT a.dn_goods_cart_id, a.restaurant, b.name as restaurant_name, b.cooktype, c.name as dinner_name, d.name as ingredient, e.name as product, a.special_request, a.spicy, a.quantity 
        FROM dn_goods_cart as a
        JOIN restaurant as b ON a.restaurant = b.restaurant_id
        JOIN dinner_list as c ON a.dinner_list = c.dinner_id
        JOIN product_class as d ON a.product_class = d.class_sid
        JOIN farmer_product as e ON a.farmer_product = e.sid
        WHERE 1 AND status = '點餐中' AND main_cart = ${cart_id}
        ORDER BY dn_goods_cart_id DESC`
        return sql
    }

    static readDnCartsNumberBeforeBookSQL(cart_id){
        let sql = `SELECT count(1) as NUMBER FROM dn_goods_cart WHERE 1 AND status = '點餐中' AND main_cart = ` + db.pool.escape(cart_id) 
        return sql
    }

    static deleteDnCartsBeforeBookSQL(cart_id){
        let new_cart_id = db.pool.escape(cart_id)
        // console.log(new_cart_id)
        let sql = `DELETE FROM dn_goods_cart WHERE dn_goods_cart_id IN (${new_cart_id})`
        return sql
    }

    static loveDnCartsBeforeBookSQL(cart_id) {
        let new_cart_id = db.pool.escape(cart_id)
        let sql = `UPDATE dn_goods_cart SET status='收藏中' WHERE dn_goods_cart_id=${new_cart_id}`
        return sql
    }

    static deletedinnerproductByIdSQL(prd_id) {
        let sql = `DELETE FROM dinner_list WHERE sid = ${prd_id}`
        return sql
    }

    static getDinnerNumberByIdSQL(res_id, small_cat, veg_type, flavor){
        let where = ' WHERE 1 '
        if(res_id){
            where += ' AND restaurant_id = ' + db.pool.escape(res_id)
        }
        if(small_cat){
            where += ' AND small_cat = ' + db.pool.escape(small_cat)
        }
        if(veg_type){
            where += ' AND veg_type = ' + db.pool.escape(veg_type)
        }if(flavor){
            where += ' AND flavor = ' + db.pool.escape(flavor)
        }

        let sql = `SELECT COUNT(1) AS NUMBER FROM dinner_list ${where}`
        return sql
    }

    static getAllDinnerProductSQL(res_id, small_cat, veg_type, flavor) {
        let where = ' WHERE 1 '
        if(res_id){
            where += ' AND c.restaurant_id = ' + db.pool.escape(res_id)
        }
        if(small_cat){
            where += ' AND c.small_cat = ' + db.pool.escape(small_cat)
        }
        if(veg_type){
            where += ' AND c.veg_type = ' + db.pool.escape(veg_type)
        }if(flavor){
            where += ' AND c.flavor = ' + db.pool.escape(flavor)
        }

        let sql = `SELECT c.*, a.price, d.cook 
        FROM farmer_product as a
        JOIN dinnerproduct as b on b.farmer_product = a.sid
        JOIN dinner_list as c on b.dinner_list = c.dinner_id
        JOIN restaurant as d on c.restaurant_id = d.restaurant_id
        ${where}
        GROUP BY b.dinner_list`
        return sql
    }

    // SELECT c.*, a.price, d.cook FROM farmer_product as a JOIN dinnerproduct as b on b.farmer_product = a.sid JOIN dinner_list as c on b.dinner_list = c.dinner_id JOIN restaurant as d on c.restaurant_id = d.restaurant_id 
    // WHERE c.restaurant_id = 40 
    // GROUP BY b.dinner_list

    static getDinnerCommentStarSQL (res_id, tag_id, small_cat, veg_type, flavor){
        let where = ' WHERE 1 '

        if(res_id){
            where += ' AND b.restaurant_id = ' + db.pool.escape(res_id)
        }
        if(small_cat){
            where += ' AND b.small_cat = ' + db.pool.escape(small_cat)
        }
        if(veg_type){
            where += ' AND b.veg_type = ' + db.pool.escape(veg_type)
        }if(flavor){
            where += ' AND b.flavor = ' + db.pool.escape(flavor)
        }
        if(tag_id){
            where += ' AND c.tag_id = ' + db.pool.escape(tag_id)
        }

        let sql = `select a.dinner_list as dinner, a.create_at, b.star, b.com_num 
        from dn_goods_comment as a 
        join ( select a.dinner_list, a.create_at, SUM(a.stars) as star, COUNT(a.comment) as com_num 
        from dn_goods_comment as a 
        join dinner_list as b on a.dinner_list = b.dinner_id 
        JOIN tag_dinner as c on b.dinner_id = c.dinner_id 
        ${where}
        group by dinner_list) as b 
        on a.dinner_list = b.dinner_list and a.create_at = b.create_at 
        ORDER BY b.star DESC`

        return sql
    }

    static getCostumerDnLoveBySQL (customer_id){
        let sql = `SELECT * FROM dn_goods_cart as a JOIN customer_information as b ON a.main_cart = b.customer_id WHERE b.customer_id = ${customer_id} AND a.status = '收藏中' GROUP BY a.dinner_list`

        return sql
    }

    static getSingleDnCommentSQL (dinner_id) {
        let sql = `select a.dinner_list as dinner, a.create_at, b.star, b.com_num 
        from dn_goods_comment as a 
        join ( select a.dinner_list, a.create_at, SUM(a.stars) as star, COUNT(a.comment) as com_num 
        from dn_goods_comment as a 
        join dinner_list as b on a.dinner_list = b.dinner_id 
        WHERE b.dinner_id = ${dinner_id}
        group by dinner_list) as b 
        on a.dinner_list = b.dinner_list and a.create_at = b.create_at 
        ORDER BY b.star DESC`
        return sql
    }

    static getDinnerProductByTagSQL(res_id, tag_id, small_cat, veg_type, flavor) {
        let where = ' WHERE 1 '
        if(res_id){
            where += ' AND c.restaurant_id = ' + db.pool.escape(res_id)
        }
        if(tag_id){
            where += ' AND d.tag_id = ' + db.pool.escape(tag_id)
        }
        if(small_cat){
            where += ' AND c.small_cat = ' + db.pool.escape(small_cat)
        }
        if(veg_type){
            where += ' AND c.veg_type = ' + db.pool.escape(veg_type)
        }if(flavor){
            where += ' AND c.flavor = ' + db.pool.escape(flavor)
        }

        let sql = `SELECT c.*, a.price, e.cook
        FROM farmer_product as a
        JOIN dinnerproduct as b on b.farmer_product = a.sid
        JOIN dinner_list as c on b.dinner_list = c.dinner_id
        JOIN tag_dinner as d ON c.dinner_id = d.dinner_id
        JOIN restaurant as e on c.restaurant_id = e.restaurant_id
        ${where}
        GROUP BY d.dinner_id`
        return sql
    }

    static getDinnerNumberByTagSQL(res_id, tag_id, small_cat, veg_type, flavor) {
        let where = ' WHERE 1 '
        if(res_id){
            where += ' AND a.restaurant_id = ' + db.pool.escape(res_id)
        }
        if(tag_id){
            where += ' AND b.tag_id = ' + db.pool.escape(tag_id)
        }
        if(small_cat){
            where += ' AND a.small_cat = ' + db.pool.escape(small_cat)
        }
        if(veg_type){
            where += ' AND a.veg_type = ' + db.pool.escape(veg_type)
        }if(flavor){
            where += ' AND a.flavor = ' + db.pool.escape(flavor)
        }

        let sql = `SELECT count(1) as NUMBER
        FROM dinner_list as a
        JOIN tag_dinner as b ON a.dinner_id = b.dinner_id
        ${where}`
        return sql
    }

    // 沒有用到了
    // static getMainDinnerSQL(res_id, small_cat) {
    //     let sql = `SELECT * FROM dinner_list WHERE small_cat = '${small_cat}' AND restaurant_id = ${res_id}`
    //     return sql
    // }

    // static getMainDinnerNumberByIdSQL(res_id, small_cat){
    //     let sql = `SELECT COUNT(1) AS NUMBER FROM dinner_list WHERE small_cat = '${small_cat}' AND  restaurant_id = ${res_id}`
    //     return sql
    // }

    static getDinnerProductForCookByTagSQL(res_id, name, tag_id, small_cat, veg_type, flavor) {
        let where = ' WHERE 1 '
        if(res_id){
            where += ' AND a.restaurant_id = ' + db.pool.escape(res_id)
        }
        if(name){
            where += ' AND d.sid = ' + db.pool.escape(name)
        }
        if(tag_id){
            where += ' AND b.tag_id = ' + db.pool.escape(tag_id)
        }
        if(small_cat){
            where += ' AND a.small_cat = ' + db.pool.escape(small_cat)
        }
        if(veg_type){
            where += ' AND a.veg_type = ' + db.pool.escape(veg_type)
        }if(flavor){
            where += ' AND a.flavor = ' + db.pool.escape(flavor)
        }

        let sql = `SELECT a.*
        FROM dinner_list as a
        JOIN tag_dinner as b ON a.dinner_id = b.dinner_id
        JOIN dinnerproduct as c on a.dinner_id = c.dinner_list
        JOIN farmer_product as d on c.farmer_product = d.sid
        ${where}
        group by a.dinner_id`
        return sql
    }

    static getDinnerNumberForCookByTagSQL(res_id, name, tag_id, small_cat, veg_type, flavor) {
        let where = ' WHERE 1 '
        if(res_id){
            where += ' AND a.restaurant_id = ' + db.pool.escape(res_id)
        }
        if(name){
            where += ' AND d.sid = ' + db.pool.escape(name)
        }
        if(tag_id){
            where += ' AND b.tag_id = ' + db.pool.escape(tag_id)
        }
        if(small_cat){
            where += ' AND a.small_cat = ' + db.pool.escape(small_cat)
        }
        if(veg_type){
            where += ' AND a.veg_type = ' + db.pool.escape(veg_type)
        }if(flavor){
            where += ' AND a.flavor = ' + db.pool.escape(flavor)
        }

        let sql = `SELECT count(1) as number
        FROM dinner_list as a
        JOIN tag_dinner as b ON a.dinner_id = b.dinner_id
        JOIN dinnerproduct as c on a.dinner_id = c.dinner_list
        JOIN farmer_product as d on c.farmer_product = d.sid
        ${where}
        group by a.dinner_id`
        return sql
    }

    static getDinnerByIdSQL(dinner_id){
        let sql = `SELECT * FROM dinner_list WHERE dinner_id = ${dinner_id}`
        return sql
    }

    static getDinnerCommentByIdSQL(dinner_id) {
        let sql = `select b.star, b.com_num
        from dn_goods_comment as a 
        join ( select b.* , a.create_at, SUM(a.stars) as star, COUNT(a.comment) as com_num 
        from dn_goods_comment as a 
        JOIN dinner_list as b on a.dinner_list = b.dinner_id
        WHERE b.dinner_id = ${dinner_id}
        group by dinner_list) as b 
        on a.dinner_list = b.dinner_id and a.create_at = b.create_at`
        return sql
    }

    static getAllProductClassSQL() {
        let sql = `SELECT class_sid, name, picture FROM product_class`
        return sql
    }

    static getDinnerProductClassByIdSQL(dinner_id) {
        let sql = `SELECT
        product_class.class_sid, product_class.name, product_class.picture
    FROM
        product_class
        JOIN dinnerproduct ON product_class.class_sid = dinnerproduct.product_class
    WHERE
        dinnerproduct.dinner_list = ${dinner_id}`
        return sql
    }

    // 暫時不用了
    static getDinnerPriceByResIdSQL(res_id) {
        let sql = `SELECT a.price, d.cook FROM farmer_product as a
        JOIN dinnerproduct as b on b.farmer_product = a.sid
        JOIN dinner_list as c on b.dinner_list = c.dinner_id
        JOIN restaurant as d on c.restaurant_id = d.restaurant_id
        WHERE c.restaurant_id = ${res_id}
        GROUP BY b.dinner_list`
        return sql
    }

    static getDefaultDinnerProductClassByIdSQL(dinner_id) {
        let sql = `SELECT product_class.class_sid, product_class.name, product_class.picture
    FROM
        product_class
        JOIN dinnerproduct ON product_class.class_sid = dinnerproduct.product_class
    WHERE
        dinnerproduct.dinner_list = ${dinner_id}
    GROUP BY dinnerproduct.dinner_list`
        return sql
    }

    static getNewDefaultProductClassByIdSQL(class_sid){
        let sql = `SELECT class_sid, name, picture FROM product_class WHERE class_sid = ${class_sid}`
        return sql
    }

    static getDefaultFarmerProductByIdSQL(class_sid, dinner_id) {
        let sql = `SELECT
        farmer_product.sid, farmer_product.name, farmer_product.picture, farmer_product.price, farmer_product.writing
    FROM
        farmer_product
        JOIN dinnerproduct ON farmer_product.sid = dinnerproduct.farmer_product
    WHERE
        dinnerproduct.product_class = ${class_sid} AND dinnerproduct.dinner_list = ${dinner_id}`
        return sql
    }

    static getDinnerFarmerProductByIdSQL(class_sid) {
        let sql = `SELECT sid, name, price, picture, writing FROM farmer_product WHERE class_sid = ${class_sid}`
        return sql
    }

    static getAllDinnerForCookSQL(res_id, name, small_cat, veg_type, flavor) {
        let where = ' WHERE 1 '
        if(res_id){
            where += ' AND c.restaurant_id = ' + db.pool.escape(res_id)
        }
        if(name){
            where += ' AND d.sid = ' + db.pool.escape(name)
        }
        if(small_cat){
            where += ' AND a.small_cat = ' + db.pool.escape(small_cat)
        }
        if(veg_type){
            where += ' AND a.veg_type = ' + db.pool.escape(veg_type)
        }if(flavor){
            where += ' AND a.flavor = ' + db.pool.escape(flavor)
        }

        let sql = `SELECT
        a.*
    FROM
        dinner_list as a
        JOIN dinnerProduct as b ON a.dinner_id = b.dinner_list
        JOIN restaurant as c on a.restaurant_id = c.restaurant_id
        JOIN farmer_product as d on d.class_sid = b.product_class
    ${where}
    GROUP BY a.dinner_id`
        return sql
    }

    static getDinnerNumberForCookSQL(res_id, name, small_cat, veg_type, flavor) {
        let where = ' WHERE 1 '
        if(res_id){
            where += ' AND c.restaurant_id = ' + db.pool.escape(res_id)
        }
        if(name){
            where += ' AND d.sid = ' + db.pool.escape(name)
        }
        if(small_cat){
            where += ' AND a.small_cat = ' + db.pool.escape(small_cat)
        }
        if(veg_type){
            where += ' AND a.veg_type = ' + db.pool.escape(veg_type)
        }if(flavor){
            where += ' AND a.flavor = ' + db.pool.escape(flavor)
        }

        let sql = `SELECT COUNT(1) AS NUMBER
    FROM
        dinner_list as a
        JOIN dinnerProduct as b ON a.dinner_id = b.dinner_list
        JOIN restaurant as c on a.restaurant_id = c.restaurant_id
        JOIN farmer_product as d on d.class_sid = b.product_class
    ${where}
    GROUP BY a.dinner_id`
        return sql
    }

    static getMainDinnerForCookSQL(res_id, name, small_cat) {
        let sql = `SELECT a.*
    FROM
        dinner_list as a
        JOIN dinnerProduct as b ON a.dinner_id = b.dinner_list
        JOIN restaurant as c on a.restaurant_id = c.restaurant_id
        JOIN farmer_product as d on d.class_sid = b.product_class
    WHERE
        d.sid = ${name} and c.restaurant_id = ${res_id} and a.small_cat = '${small_cat}'
    GROUP BY a.dinner_id`
        return sql
    }

    static getDinnerProductClassForCookByIdSQL(dinner_id, name) {
        let sql = `SELECT
        b.class_sid, b.name, b.picture
    FROM
        farmer_product as a
    JOIN product_class as b ON b.class_sid = a.class_sid
    WHERE
        a.sid = ${name}`
        return sql
    }

    static getDinnerFarmerProductForCookByIdSQL(dinner_id, name, class_sid) {
        let where = ' WHERE 1 AND b.dinner_list = ' + db.pool.escape(dinner_id)
        if(name){
            where += ' AND a.sid = ' + db.pool.escape(name)
        }
        if(name && class_sid){
            where =  `WHERE 1 AND b.dinner_list = ${dinner_id} AND b.product_class = ` + db.pool.escape(class_sid)
        }

        let sql = `SELECT
        a.sid, a.name, a.price, a.picture, a.writing
    FROM
        farmer_product as a
    JOIN dinnerproduct as b on a.sid = b.farmer_product
    ${where}`
        return sql
    }


    static getProductClassNameForCookByNameSQL(name) {
        let sql = `SELECT
        a.name
    FROM
        product_class as a
    JOIN farmer_product as b ON a.class_sid = b.class_sid
    WHERE
        b.sid = ${name}`
        return sql
    }

    
    static addResCommentSQL(res_id, customer_id, stars, comment, creat_at) {
        customer_id = db.pool.escape(customer_id)
        res_id = db.pool.escape(res_id)
        stars = db.pool.escape(stars)
        comment = db.pool.escape(comment)

        let sql = `INSERT INTO res_comment(res_comment_id, customer_information, restaurant, stars, comment, create_at, p_like, p_dislike) VALUES (NULL,${customer_id},${res_id},${stars},${comment},'${creat_at}', NULL, NULL)`
        return sql
    }

    static clickResCommentSQL(res_comment_id, customer_id, like_or_not) {
        res_comment_id = db.pool.escape(res_comment_id)
        customer_id = db.pool.escape(customer_id)
        like_or_not = parseInt(like_or_not)
        let p_like = null
        let p_dislike = null
        // console.log('不該近來')

        if(like_or_not === 1){
            // console.log('enter')
            p_like = 1
        }else{
            p_dislike = 1
        }
        let sql = `INSERT INTO who_res_comment(who_res_comment_id, customer_information, res_comment, p_like, p_dislike) VALUES (NULL, ${customer_id},${res_comment_id},${p_like},${p_dislike})`
        return sql
    }

    static UPDATEclickResCommentSQL(res_comment_id, customer_id, like_or_not) {
        res_comment_id = db.pool.escape(res_comment_id)
        customer_id = db.pool.escape(customer_id)
        like_or_not = parseInt(like_or_not)
        let p_like = null
        let p_dislike = null
        
        if(like_or_not === 3){
            p_like = 1
            p_dislike = null
        }else{
            p_like = null
            p_dislike = 1
        }
        let sql = `UPDATE who_res_comment SET p_like=${p_like},p_dislike=${p_dislike} WHERE res_comment = ${res_comment_id} AND customer_information = ${customer_id}`
        return sql
    }

    static DELETEclickResCommentSQL(res_comment_id, customer_id) {
        res_comment_id = db.pool.escape(res_comment_id)
        customer_id = db.pool.escape(customer_id)
        
        let sql = `DELETE FROM who_res_comment WHERE customer_information = ${customer_id} AND res_comment = ${res_comment_id}`
        return sql
    }

    static getResCommentLikeOrNotSQL(res_comment_id) {
        let sql = `SELECT a.res_comment_id, count(b.p_like) as 'like', count(b.p_dislike) as 'dislike'
        FROM res_comment AS a  
        JOIN who_res_comment AS b ON a.res_comment_id = b.res_comment
        JOIN restaurant AS c ON a.restaurant = c.restaurant_id
        WHERE b.res_comment = ${res_comment_id} AND (b.p_like = 1 OR b.p_dislike = 1)`

        return sql
    }

    static updateResCommentSQL(res_comment_id, p_like, p_dislike) {
        let sql = `UPDATE res_comment SET p_like=${p_like},p_dislike=${p_dislike} WHERE res_comment_id = ${res_comment_id}`

        return sql
    }
    
    static readResCommentSQL(res_id, count) {
        res_id = db.pool.escape(res_id)
        count = Number(count)
       
        let limit = 3 * count

        let sql = `SELECT d.name, d.my_file, a.res_comment_id, a.comment, a.p_like as 'like', a.p_dislike as 'dislike', a.create_at
        FROM res_comment AS a  
        JOIN restaurant AS c ON a.restaurant = c.restaurant_id
        JOIN customer_information as d ON a.customer_information = d.customer_id
        WHERE c.restaurant_id = ${res_id}
        order by create_at desc LIMIT ${limit}`

        console.log(sql)

        return sql
    }

    static readResCommentNumberSQL(res_id) {
        res_id = db.pool.escape(res_id)

        let sql = `SELECT count(1) as number FROM res_comment WHERE restaurant = ${res_id} order by create_at desc`
        return sql
    }

    static readWhoLikeCommentSQL(res_id, customer_id) {
        let where = ' WHERE a.p_like = 1 '
        if(res_id){
            where += ' AND b.restaurant = ' + db.pool.escape(res_id)
        }
        if(customer_id){
            where += ' AND a.customer_information = ' + db.pool.escape(customer_id)
        }

        let sql = `SELECT a.res_comment
        FROM who_res_comment as a
        JOIN res_comment as b ON a.res_comment = b.res_comment_id
        ${where}
        order by create_at desc`
        return sql
    }

    static readWhoDislikeCommentSQL(res_id, customer_id) {
        let where = ' WHERE a.p_dislike = 1 '
        if(res_id){
            where += ' AND b.restaurant = ' + db.pool.escape(res_id)
        }
        if(customer_id){
            where += ' AND a.customer_information = ' + db.pool.escape(customer_id)
        }

        let sql = `SELECT a.res_comment, a.customer_information
        FROM who_res_comment as a
        JOIN res_comment as b ON a.res_comment = b.res_comment_id
        ${where}
        order by create_at desc`
        return sql
    }

    static addDnCommentSQL(dinner_id, customer_id, stars, comment, creat_at) {
        customer_id = db.pool.escape(customer_id)
        dinner_id = db.pool.escape(dinner_id)
        stars = db.pool.escape(stars)
        comment = db.pool.escape(comment)
        creat_at = db.pool.escape(creat_at)

        let sql = `INSERT INTO dn_goods_comment(dn_goods_comment_id, customer_information, dinner_list, stars, comment, create_at) VALUES (NULL ,${customer_id},${dinner_id},${stars},${comment},${creat_at})`
        return sql
    }

    static readDnCommentSQL(dinner_id) {
        dinner_id = db.pool.escape(dinner_id)

        let sql = `SELECT d.name, d.my_file, a.dn_goods_comment_id, a.comment, a.p_like as 'like', a.p_dislike as 'dislike', a.create_at
        FROM dn_goods_comment AS a  
        JOIN dinner_list AS c ON a.dinner_list = c.dinner_id
        JOIN customer_information as d ON a.customer_information = d.customer_id
        WHERE c.dinner_id = ${dinner_id}
        order by create_at desc`
        return sql
    }

    static readDnCommentNumberSQL(dinner_id) {
        dinner_id = db.pool.escape(dinner_id)

        let sql = `SELECT count(1) as number FROM dn_goods_comment WHERE dinner_list = ${dinner_id} order by create_at desc`
        return sql
    }

    static readWhoLikeDnCommentSQL(dinner_id, customer_id) {
        let where = ' WHERE a.p_like = 1 '
        if(dinner_id){
            where += ' AND b.dinner_list = ' + db.pool.escape(dinner_id)
        }
        if(customer_id){
            where += ' AND a.customer_information = ' + db.pool.escape(customer_id)
        }

        let sql = `SELECT a.dn_goods_comment
        FROM who_dn_goods_comment as a
        JOIN dn_goods_comment as b ON a.dn_goods_comment = b.dn_goods_comment_id
        ${where}
        order by create_at desc`
        return sql
    }

    static readWhoDislikeDnCommentSQL(dinner_id, customer_id) {
        let where = ' WHERE a.p_dislike = 1 '
        if(dinner_id){
            where += ' AND b.dinner_list = ' + db.pool.escape(dinner_id)
        }
        if(customer_id){
            where += ' AND a.customer_information = ' + db.pool.escape(customer_id)
        }

        let sql = `SELECT a.dn_goods_comment, a.customer_information
        FROM who_dn_goods_comment as a
        JOIN dn_goods_comment as b ON a.dn_goods_comment = b.dn_goods_comment_id
        ${where}
        order by create_at desc`
        return sql
    }


}

export default DinnerProducts
