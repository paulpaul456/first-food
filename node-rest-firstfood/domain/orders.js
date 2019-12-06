class Orders {
    constructor(name, price) {
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
    }

    addOrderSQL() {
        let sql = `INSERT INTO orders (name, price) \
                   VALUES('${this.prd_name}',${this.prd_price})`
        return sql
    }

    updateOrderByIdSQL(prd_id) {
        let sql = `UPDATE orders SET name="${this.prd_name}" , price="${this.prd_price}" WHERE sid=${prd_id} `
        return sql
    }

    static getOrderByIdSQL(prd_id) {
        let sql = `SELECT * FROM orders WHERE sid = ${prd_id}`
        return sql
    }

    static deleteOrderByIdSQL(prd_id) {
        let sql = `DELETE FROM orders WHERE sid = ${prd_id}`
        return sql
    }

    static getAllOrderSQL() {
        let sql = `SELECT * FROM orders`
        return sql
    }


}

export default Orders
