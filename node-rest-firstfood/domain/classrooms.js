class ClassRooms {
    constructor(name, price) {
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
    }

    addClassRoomSQL() {
        let sql = `INSERT INTO class_room(name, price) \
                   VALUES('${this.prd_name}',${this.prd_price})`
        return sql
    }

    updateClassRoomByIdSQL(prd_id) {
        let sql = `UPDATE class_room SET name="${this.prd_name}" , price="${this.prd_price}" WHERE sid=${prd_id} `
        return sql
    }

    static getClassRoomByIdSQL(prd_id) {
        let sql = `SELECT * FROM class_room WHERE sid = ${prd_id}`
        return sql
    }

    static deleteClassRoomByIdSQL(prd_id) {
        let sql = `DELETE FROM class_room WHERE sid = ${prd_id}`
        return sql
    }

    static getAllClassRoomSQL() {
        let sql = `SELECT * FROM class_room`
        return sql
    }


}

export default ClassRooms
