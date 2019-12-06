class Farmers {
    constructor(name, price) {
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
    }

    addFarmerSQL() {
        let sql = `INSERT INTO farmers(name, price) \
                   VALUES('${this.prd_name}',${this.prd_price})`
        return sql
    }

    updateFarmerByIdSQL(prd_id) {
        let sql = `UPDATE farmers SET name="${this.prd_name}" , price="${this.prd_price}" WHERE sid=${prd_id} `
        return sql
    }

    static getFarmerByIdSQL(prd_id) {
        let sql = `SELECT * FROM farmers WHERE sid = ${prd_id}`
        return sql
    }

    static deleteFarmerByIdSQL(prd_id) {
        let sql = `DELETE FROM farmers WHERE sid = ${prd_id}`
        return sql
    }

    static getAllFarmerSQL() {
        let sql = `SELECT * FROM farmers`
        return sql
    }


}

export default Farmers
