class Collection {
    constructor(courseId, classroomId) {
        this.courseId = courseId
        this.classroomId = classroomId
    }
    //main
    static getMainCartByIdSQL(customer_id) {
            let sql = `SELECT * FROM main_cart WHERE customer_information = ${customer_id}`
            return sql
        }

    //course
    addCourseCollectionSQL(cartId) {
        console.log(`addCourseCollectionSQL ${cartId}, ${this.courseId}, ${this.classroomId}`)
        let sql = `INSERT INTO course_cart (main_cart, course, class_room, quantity, status, create_at) \
                   VALUES(${cartId},${this.courseId},${this.classroomId},1,'收藏中',NOW())`
        return sql
    }
    static getCourseCollectionByIdSQL(mainCartId) {
        let sql = `SELECT * FROM course_cart WHERE main_cart = ${mainCartId} AND status='收藏中'`
        return sql
    }

    static deleteCourseCollectionByIdSQL(mainCartId,cart_id) {
        let sql = `DELETE FROM course_cart WHERE course_cart_id = ${cart_id} AND main_cart = ${mainCartId}`
        return sql
    }

    //dinnerProducts
    static getDnCollectionByIdSQL(mainCartId) {
        let sql = `SELECT * FROM dn_goods_cart WHERE main_cart = ${mainCartId} AND status='收藏中'`
        return sql
    }

    static deleteDnCollectionByIdSQL(cartId) {
        let sql = `DELETE FROM dn_goods_cart WHERE dn_goods_cart_id = ${cartId}`
        return sql
    }

    //farmerProducts
    static getFmCollectionByIdSQL(mainCartId) {
            let sql = `SELECT * FROM fm_goods_cart WHERE main_cart = ${mainCartId} AND status='收藏中'`
            return sql
        }

    static deleteFmCollectionByIdSQL(cartId) {
        let sql = `DELETE FROM fm_goods_cart WHERE fm_goods_cart_id = ${cartId}`
        return sql
    }
    //restaurants
    static getRestaurantCollectionByIdSQL(mainCartId) {
        let sql = `SELECT * FROM fm_goods_cart WHERE main_cart = ${mainCartId} AND status='收藏中'`
        return sql
    }

    static deleteRestaurantCollectionByIdSQL(cartId) {
        let sql = `DELETE FROM fm_goods_cart WHERE fm_goods_cart_id = ${cartId}`
        return sql
    }
}

export default Collection
