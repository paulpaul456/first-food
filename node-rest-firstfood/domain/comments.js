class Comments {
    constructor(name, price) {
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
    }

    addCommentSQL() {
        let sql = `INSERT INTO comments (name, price) \
                   VALUES('${this.prd_name}',${this.prd_price})`
        return sql
    }

    updateCommentByIdSQL(prd_id) {
        let sql = `UPDATE comments SET name="${this.prd_name}" , price="${this.prd_price}" WHERE sid=${prd_id} `
        return sql
    }

    static getCommentByIdSQL(prd_id) {
        let sql = `SELECT * FROM comments WHERE sid = ${prd_id}`
        return sql
    }

    static deleteCommentByIdSQL(prd_id) {
        let sql = `DELETE FROM comments WHERE sid = ${prd_id}`
        return sql
    }

    static getAllCommentSQL() {
        let sql = `SELECT * FROM comments`
        return sql
    }
    
}

export default Comments
