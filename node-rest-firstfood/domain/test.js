class Product {
    constructor(name, price) {
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
    }

    addTestSQL() {
        let sql = `INSERT INTO test(name, price) \
                   VALUES('${this.prd_name}',${this.prd_price})`
        return sql
    }

    updateTestByIdSQL(prd_id) {
        let sql = `UPDATE test SET name="${this.prd_name}" , price="${this.prd_price}" WHERE sid=${prd_id} `
        return sql
    }

    static getTestByIdSQL(prd_id) {
        let sql = `SELECT * FROM test WHERE sid = ${prd_id}`
        return sql
    }

    static deleteTestByIdSQL(prd_id) {
        let sql = `DELETE FROM test WHERE sid = ${prd_id}`
        return sql
    }

    static getAllTestSQL() {
        let sql = `SELECT * FROM test`
        return sql
    }


}

export default Product
