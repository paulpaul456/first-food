class FarmerProducts {
    constructor(name, price) {
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
    }

    addFarmerProductSQL() {
        let sql = `INSERT INTO farmer_product(name, price) \
                   VALUES('${this.prd_name}',${this.prd_price})`
        return sql
    }

    updateFarmerProductByIdSQL(prd_id) {
        let sql = `UPDATE farmer_product SET name="${this.prd_name}" , price="${this.prd_price}" WHERE sid=${prd_id} `
        return sql
    }

    static getFarmerProductByIdSQL(prd_id) {
        let sql = `SELECT * FROM farmer_product WHERE sid = ${prd_id}`
        return sql
    }

    static deleteFarmerProductByIdSQL(prd_id) {
        let sql = `DELETE FROM farmer_product WHERE sid = ${prd_id}`
        return sql
    }

    static getAllFarmerProductSQL() {
        let sql = `SELECT * FROM farmer_product`
        return sql
    }

    static getAllFarmerProductFarmersByIdSQL(prd_id) {
        let sql = `SELECT * FROM farmers AS a JOIN farmer_product AS b ON a.farmer_id= b.farmer_sid WHERE sid = ${prd_id}`
        return sql
    }

    static getFarmerProductForCookSQL() {
        let sql = `SELECT a.class_sid, a.name
        FROM product_class AS a
        JOIN dinnerproduct AS b ON a.class_sid= b.product_class
        GROUP BY a.class_sid`
        return sql
    }

}

export default FarmerProducts
