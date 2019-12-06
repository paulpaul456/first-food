class Forums {
    constructor(forum_title, forum_class, forum_type, forum_good, forum_collect, forum_content, create_date, create_user, forum_image, forum_browse) {
        this.forum_id = 0
        this.forum_title = forum_title
        this.forum_class = forum_class
        this.forum_type = forum_type
        this.forum_good = forum_good
        this.forum_collect = forum_collect
        this.forum_content = forum_content
        this.forum_content = forum_content
        this.create_date = create_date
        this.create_user = create_user
        this.forum_image = forum_image
        this.forum_browse = forum_browse
    }

    addForumSQL() {
        let sql = `INSERT INTO forum_categories (forum_title, forum_class, forum_type, \
                    forum_good, forum_collect, forum_content, create_date, create_user, forum_image, forum_browse) \
                   VALUES('${this.forum_title}','${this.forum_class}','${this.forum_type}' \
                   ,'${this.forum_good}','${this.forum_collect}','${this.forum_content}' \
                   , sysdate(), '${this.create_user}', '${this.forum_image}', '${this.forum_browse}')`
        return sql
    }

    static getArticleById(artId) {
        let sql = `select * from forum_categories fc , customer_information ci where fc.create_user = ci.customer_id and  forum_id = '${artId}'`
        return sql
    }

    static getArticlesByForumClass(forumClass) {
        let sql = `SELECT * FROM forum_categories fc, customer_information ci where fc.create_user = ci.customer_id and forum_class = '${forumClass}' `
        return sql
    }
   
    static getForumClass(forumClass) {
        let sql = `SELECT * FROM forum_class where forum_class_id = '${forumClass}' `
        return sql
    }

    static getForumContentNewer(forumClass) {
        let sql =`select * from forum_categories fc, forum_class fcs, (select count(forum_id) as cnt from forum_categories where forum_class = '${forumClass}' ) ct where fc.forum_class = fcs.forum_class_id and forum_class = '${forumClass}' order by forum_id desc  Limit 0,1`
        return sql
    }


    static getForumCats() {
        let sql = `select distinct forum_class from forum_categories order by forum_class`
        return sql
    }

    static getForum() {
        let sql = `select * from forum_class`
        return sql
    }

    static getMsgByForumId(forumId) {
        let sql = `SELECT * FROM forum_message fm, customer_information ci where fm.create_user = ci.customer_id and forum_id =  '${forumId}'`
        return sql
    }

    static getCollectionByCustomerId(customer_id, forum_id, collect_good_Type) {
        let sql = `SELECT count(*) count FROM forum_collection where customer_id = ${customer_id} and forum_id = ${forum_id} and collect_good_Type = '${collect_good_Type}'`
        return sql
    }

    static getMessageCntByForumId(forum_id) {
        let sql = `SELECT count(*) count from forum_message where forum_id = '${forum_id}'`
        return sql
    }

    static addforumBrowseByForumId(forum_id) {
        let sql = `update forum_categories set forum_browse = (forum_browse +1) where forum_id = '${forum_id}'`
        return sql
    }

    static addCollectionCntByForumId(type, forumId){
        let sql = `update forum_categories set ${type} = ${type} + 1 where forum_id = ${forumId}`
        return sql
    }

    static addCollectionDetailByForumId(custId , forumId , type){
        let sql = `insert into forum_collection(customer_id,forum_id,collect_good_Type) values ( ${custId} , ${forumId} , '${type}');`
        return sql
    }

    static subCollectionCntByForumId(type, forumId){
        let sql = `update forum_categories set ${type} = ${type} - 1 where forum_id = ${forumId}`
        return sql
    }

    static delCollectionByForumId(custId , forumId , type){
        let sql = `delete from forum_collection where customer_id = ${custId} and forum_id = ${forumId} and collect_good_Type = '${type}'`
        return sql
    }

    static insertMessage(messageContent, forumId, custId){
        let sql = `insert into forum_message (message_content, forum_id,create_user, create_date) values ('${messageContent}', ${forumId}, ${custId}, sysdate())`
        return sql
    }
   
    static getForumClassType(forumId){
        let sql = `SELECT distinct forum_type FROM forum_class where forum_class_id = ${forumId}`
        return sql
    }

    static insertArticle(forum_title, forum_class, forum_type, forum_content, create_user, forum_image) {
        let sql = `insert into forum_categories (forum_title, forum_class, forum_type, forum_good, forum_collect, forum_content, create_date, create_user,forum_image, forum_browse) values ('${forum_title}', ${forum_class} , '${forum_type}', 0 , 0 ,'${forum_content}',sysdate(),${create_user},'${forum_image}',0)`
        return sql
    }

}

export default Forums
