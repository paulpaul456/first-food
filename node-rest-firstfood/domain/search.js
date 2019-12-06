class Search {
    constructor(name,type) {
       this.name = name
       this.type = type
    }
    //main
    static getKeywordSQL(keyword) {
            let sql = `SELECT * FROM keysearch WHERE name LIKE '%${keyword}%' `
            return sql
        }
    getCourseSidSQL() {
            let sql = `SELECT * FROM course WHERE course_name LIKE '${this.name}' LIMIT 1 `
            return sql
        }
    getSidSQL(type) {
            let sql = `SELECT * FROM ${type} WHERE name LIKE '${this.name}' LIMIT 1 `
            return sql
        }

}

export default Search
