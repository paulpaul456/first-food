class Courses {
    constructor(cartId, courseId, classroomId, name = '俄羅斯料理', price = 1620) {
        this.cartId = cartId
        this.courseId = courseId
        this.classroomId = classroomId
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
    }

    addCourseSQL() {
        let sql = `INSERT INTO course (name, price) \
                   VALUES('${this.prd_name}',${this.prd_price})`
        return sql
    }
    addCourseCartSQL() {
        // console.log('sqllll',this.cartId,this.courseId,this.classroomId)
        let sql = `INSERT INTO course_cart (main_cart, course, class_room, quantity, status, create_at) \
                   VALUES(${this.cartId},${this.courseId},${this.classroomId},1,'購物中',NOW())`
        return sql
    }

    updateCourseByIdSQL(prd_id) {
        let sql = `UPDATE course SET name="${this.prd_name}" , price="${this.prd_price}" WHERE sid=${prd_id} `
        return sql
    }

    static getCourseByIdSQL(prd_id) {
        let sql = `SELECT c.*,r.name roomName,r.address roomAddress,r.room_images roomImages, r.lat lat, r.lng lng FROM course c LEFT JOIN class_room r ON c.room_sid = r.room_sid WHERE c.course_id = ${prd_id}`
        return sql
    }

    static deleteCourseByIdSQL(prd_id) {
        let sql = `DELETE FROM course WHERE sid = ${prd_id}`
        return sql
    }
    static deleteCourseCartByIdSQL(cart_id) {
        let sql = `DELETE FROM course_cart WHERE course_cart_id = ${cart_id}`
        return sql
    }

    static getAllCourseSQL() {
        let sql = `SELECT c.*,r.name roomName,r.address roomAddress,r.room_images roomImages,r.lat lat,r.lng lng FROM course c LEFT JOIN class_room r ON c.room_sid = r.room_sid `
       // let sql = `SELECT c.*,r.name roomName,r.address roomAddress,rest.name restaurantName FROM course c LEFT JOIN class_room r ON c.room_sid = r.room_sid LEFT JOIN restaurant rest ON c.restaurant_id = rest.restaurant_id`
        return sql
    }

    static getCartByIdSQL(ct_id) {
        console.log('ct_id',ct_id)
        let sql = `SELECT * FROM main_cart WHERE customer_information = ${ct_id}`
        return sql
    }


}

export default Courses
