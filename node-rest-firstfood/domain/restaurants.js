import db from '../db/database'

class Restaurants {
    constructor(name, price) {
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
    }

    addRestaurantSQL() {
        let sql = `INSERT INTO restaurant (name, price) \
                   VALUES('${this.prd_name}',${this.prd_price})`
        return sql
    }

    updateRestaurantByIdSQL(prd_id) {
        let sql = `UPDATE restaurant SET name="${this.prd_name}" , price="${this.prd_price}" WHERE sid=${prd_id} `
        return sql
    }

    static getRestaurantByIdSQL(prd_id) {
        let sql = `SELECT * FROM restaurant WHERE restaurant_id = ${prd_id}`
        return sql
    }

    static getAllRestaurantSQL(lat, lng, distance, cookday, foodclass, cooktype, number1, number2, vegetarian) { 
        let where = 'WHERE 1'
        // console.log(foodclass)
        // console.log(cookday)
        // console.log(cooktype)
        // console.log(number1)
        // console.log(number2)
        // console.log(vegetarian)
        // console.log('loadResafterlogin')

        if(foodclass !== 0){
            where += ' AND foodclass = ' + db.pool.escape(foodclass);
        }
        if(cookday !== 8){
            where += ' AND cooktime = ' + db.pool.escape(cookday);
        }
        if(cooktype !== 0){
            where += ' AND cooktype = ' + db.pool.escape(cooktype);
        }
        if(number1 > -1){
            where += ' AND pct BETWEEN ' + db.pool.escape(number1) + ' AND ' + db.pool.escape(number2)
        }
        if(vegetarian !== ''){
            where += ' AND vegetarian = ' + db.pool.escape(vegetarian);
        }

        let sql = `SELECT * FROM restaurant ${where} AND lat BETWEEN ${lat} - ${distance} AND ${lat} + ${distance} AND lng BETWEEN ${lng} - ${distance} AND ${lng} + ${distance}` 
        // console.log(sql)
        return sql
    }

    static getAllRestaurantNewestCommentSQL(lat, lng, distance, cookday, foodclass, cooktype, number1, number2, vegetarian){
        let where = 'WHERE 1'

        if(foodclass !== 0){
            where += ' AND b.foodclass = ' + db.pool.escape(foodclass);
        }
        if(cookday !== 8){
            where += ' AND b.cooktime = ' + db.pool.escape(cookday);
        }
        if(cooktype !== 0){
            where += ' AND b.cooktype = ' + db.pool.escape(cooktype);
        }
        if(number1 > -1){
            where += ' AND b.pct BETWEEN ' + db.pool.escape(number1) + ' AND ' + db.pool.escape(number2)
        }
        if(vegetarian !== ''){
            where += ' AND b.vegetarian = ' + db.pool.escape(vegetarian);
        }

        let sql = `select a.restaurant as restaurant, a.comment as comment, b.nickname, a.create_at, b.com_num, b.star
        from res_comment as a
        join (
            select a.restaurant, max(create_at) create_at, c.nickname, a.comment, count(a.comment) as com_num, SUM(a.stars) as star
            from res_comment as a
            join restaurant as b on a.restaurant = b.restaurant_id
            join customer_information as c on a.customer_information = c.customer_id
            ${where} AND b.lat BETWEEN ${lat} - ${distance} AND ${lat} + ${distance} AND b.lng BETWEEN ${lng} - ${distance} AND ${lng} + ${distance}
            group by restaurant) as b
        on a.restaurant = b.restaurant and a.create_at = b.create_at
        ORDER BY b.star DESC`
        // console.log(sql)
        return sql
    }

    static getAllRestaurantCommentNumberSQL(cookday, foodclass, cooktype, number1, number2, vegetarian){
        let sql = `
                SELECT b.restaurant_id, count(a.comment) as comment_num
                FROM res_comment as a
                JOIN restaurant AS b ON restaurant = b.restaurant_id
                JOIN customer_information AS c ON a.customer_information = c.customer_id              
            GROUP BY restaurant_id`

        return sql
    } 

    static getAllRestaurantNumberSQL(lat, lng, distance, cookday, foodclass, cooktype, number1, number2, vegetarian) {
        let where = 'WHERE 1'
        // console.log(cookday)
        // console.log(foodclass)
        // console.log(cooktype)
        // console.log(number1)
        // console.log(number2)
        // console.log(vegetarian)

        if(foodclass !== 0){
            where += ' AND foodclass = ' + db.pool.escape(foodclass);
        }
        if(cookday !== 8){
            where += ' AND cooktime = ' + db.pool.escape(cookday);
        }
        if(cooktype !== 0){
            where += ' AND cooktype = ' + db.pool.escape(cooktype);
        }
        if(number1 > -1){
            where += ' AND pct BETWEEN ' + db.pool.escape(number1) + ' AND ' + db.pool.escape(number2)
        }
        if(vegetarian !== ''){
            where += ' AND vegetarian = ' + db.pool.escape(vegetarian);
        }

        let sql = `SELECT COUNT(1) as NUMBER FROM restaurant ${where} AND lat BETWEEN ${lat} - ${distance} AND ${lat} + ${distance} AND lng BETWEEN ${lng} - ${distance} AND ${lng} + ${distance}`
        return sql
    }

    static getAllRestaurantForCookSQL(lat, lng, distance, farmer_sid, cookday, foodclass, cooktype, number1, number2, vegetarian) {
        let where = 'WHERE 1'
    
        if(farmer_sid !== 0){
            where += ' AND d.sid = ' + db.pool.escape(farmer_sid);
            console.log(farmer_sid)
        }
        if(foodclass !== 0){
            where += ' AND foodclass = '+ db.pool.escape(foodclass);
        }
        if(cookday !== 8){
            where += ' AND cooktime = '+ db.pool.escape(cookday);
        }
        if(cooktype !== 0){
            where += ' AND cooktype = '+ db.pool.escape(cooktype);
        }
        if(number1 > -1){
            where += ' AND pct BETWEEN ' + db.pool.escape(number1) + ' AND ' + db.pool.escape(number2)
        }
        if(vegetarian){
            where += ' AND vegetarian = ' + db.pool.escape(vegetarian);
        }

        let sql = `SELECT c.*
    FROM
        dinner_list AS a
        JOIN dinnerproduct AS b ON a.dinner_id = b.dinner_list
        LEFT JOIN restaurant AS c ON a.restaurant_id = c.restaurant_id
        JOIN farmer_product AS d ON d.class_sid = b.product_class
        JOIN product_class AS e ON d.class_sid = e.class_sid
    ${where} AND c.lat BETWEEN ${lat} - ${distance} AND ${lat} + ${distance} AND c.lng BETWEEN ${lng} - ${distance} AND ${lng} + ${distance}
    GROUP BY c.restaurant_id`
    // console.log(sql)
        return sql
    }

    static getAllRestaurantNumberForCookSQL(lat, lng, distance, farmer_sid, cookday, foodclass, cooktype, number1, number2, vegetarian){
        let where = 'WHERE 1'
    
        if(farmer_sid !== 0){
            where += ' AND d.sid = ' + db.pool.escape(farmer_sid);
            console.log(farmer_sid)
        }
        if(foodclass !== 0){
            where += ' AND foodclass = '+ db.pool.escape(foodclass);
        }
        if(cookday !== 8){
            where += ' AND cooktime = '+ db.pool.escape(cookday);
        }
        if(cooktype !== 0){
            where += ' AND cooktype = '+ db.pool.escape(cooktype);
        }
        if(number1 > -1){
            where += ' AND pct BETWEEN ' + db.pool.escape(number1) + ' AND ' + db.pool.escape(number2)
        }
        if(vegetarian){
            where += ' AND vegetarian = ' + db.pool.escape(vegetarian);
        }

        let sql = `select count(1) as NUMBER from (SELECT a.*
            FROM
                restaurant AS a
                JOIN dinner_list AS b ON a.restaurant_id = b.restaurant_id
                JOIN dinnerproduct AS c ON b.dinner_id = c.dinner_list
                JOIN farmer_product AS d ON d.class_sid = c.product_class
                JOIN product_class AS e ON d.class_sid = e.class_sid
            ${where} AND a.lat BETWEEN ${lat} - ${distance} AND ${lat} + ${distance} AND a.lng BETWEEN ${lng} - ${distance} AND ${lng} + ${distance}
            GROUP BY a.restaurant_id) f`

        return sql
    }

    // 這個沒有用喔喔喔喔喔喔喔喔喔喔喔
    // static getAllRestaurantNumberForCookSQL(farmer_sid, cookday, foodclass, cooktype, number1, number2) {
    //     let where = 'WHERE 1'
    
    //     if(farmer_sid){
    //         where += ' AND d.sid = ' + db.pool.escape(farmer_sid);
    //     }
    //     if(foodclass !== 0){
    //         where += ' AND foodclass = '+ db.pool.escape(foodclass);
    //     }
    //     if(cookday !== 8){
    //         where += ' AND cooktime = '+ db.pool.escape(cookday);
    //     }
    //     if(cooktype !== 0){
    //         where += ' AND cooktype = '+ db.pool.escape(cooktype);
    //     }
    //     if(number1 > -1){
    //         where += ' AND pct BETWEEN ' + db.pool.escape(number1) + ' AND ' + db.pool.escape(number2)
    //     }

    //     let sql = `SELECT
    //     COUNT(c.*) AS NUMBER
    // FROM
    //     dinner_list AS a
    //     JOIN dinnerproduct AS b ON a.dinner_id = b.dinner_list
    //     JOIN restaurant AS c ON a.restaurant_id = c.restaurant_id
    //     JOIN farmer_product AS d ON d.class_sid = b.product_class
    //     JOIN product_class AS e ON d.class_sid = e.class_sid
    // WHERE d.sid = ${farmer_sid} ${where}
    // GROUP BY c.restaurant_id`
    //     return sql
    // }
    
}

export default Restaurants
