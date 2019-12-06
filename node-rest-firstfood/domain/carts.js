class Carts {
    constructor(name, price) {
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
    }

    addCartSQL() {
        let sql = `INSERT INTO cart (name, price) \
                   VALUES('${this.prd_name}',${this.prd_price})`
        return sql
    }

    updateCartByIdSQL(prd_id) {
        let sql = `UPDATE cart SET name="${this.prd_name}" , price="${this.prd_price}" WHERE sid=${prd_id} `
        return sql
    }

    static getCartByIdSQL(prd_id) {
        let sql = `SELECT * FROM main_cart WHERE cart_id = ${prd_id}`
        return sql
    }

    static deleteCartByIdSQL(prd_id) {
        let sql = `DELETE FROM cart WHERE sid = ${prd_id}`
        return sql
    }

    static getAllCartSQL() {
        let sql = `SELECT * FROM cart `
        return sql
    }


}

export default Carts
