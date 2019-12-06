import React from 'react'
import HeaderFooter from '../container/HeaderFooter.js'
import { Link } from 'react-router-dom'
import './css/Article_Content.scss'
import ArticleContentComponent from '../../components/main/ForumMain/ArticleContentComponent.js'
import ArticleMessageComponent from '../../components/main/ForumMain/ArticleMessageComponent.js'
import {
  getMsgByForumId,
  insertMessage,
  addforumBrowseByForumId,
  getMessageCntByForumId,
} from '../../action/forumAction'
import { connect } from 'react-redux'
import swal from 'sweetalert'

class Article_Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      article: {},
    }
  }
  async componentDidMount() {
    window.scrollTo(0, 0)
    const art_id = this.props.match.params.art_id
    const response = await fetch(
      `http://localhost:6003/api/forum/getArticleById/${art_id}`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
    if (!response.ok) throw new Error(response.statusText)

    const jsonObject = await response.json()
    await this.setState({ article: jsonObject })

    await this.props.dispatch(getMsgByForumId(art_id))
    await this.props.dispatch(addforumBrowseByForumId(art_id))
    await this.props.dispatch(getMessageCntByForumId(art_id))
  }
  componentDidUpdate() {
    const msgCnt = this.props.messageCnt
    if (msgCnt.length > 0) {
      this.refs.msgCnt.innerHTML = '留言 / 共 ' + msgCnt[0].count + ' 筆'
    } else {
      this.refs.msgCnt.innerHTML = '留言 / 共 0 筆'
    }
  }
  sendMessage() {
    if (this.props.isLogin) {
      const messageContent = this.refs.messageContent.value
      swal({
        title: '確定要送出留言嗎？',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then(isSend => {
        if (isSend) {
          this.props.dispatch(
            insertMessage(
              messageContent,
              this.props.match.params.art_id,
              this.props.member[0].customer_id
            )
          )
          swal('已送出留言！', '您已成功送出留言了。', 'success')
        }
        this.refs.messageContent.value = ''
        this.props.dispatch(getMsgByForumId(this.props.match.params.art_id))
        window.scrollTo(0, document.body.scrollHeight)
      })
      this.props.messageCnt[0].count++
      this.props.dispatch(getMsgByForumId(this.props.match.params.art_id))
      this.forceUpdate()
    } else {
      alert('請先登入會員')
    }
  }
  render() {
    console.log(this.state.article)
    console.log(this.props.member)
    return (
      <>
        <HeaderFooter location="討論區">
          <div className="articleContentWrapper">
            <span className="btn-type">
              <Link to={`/article/${this.state.article.forum_class}`}>
                <button className="new_post">返回列表</button>
              </Link>
            </span>
            {this.state.article.forum_id ? (
              <ArticleContentComponent
                {...this.props}
                user_name={this.state.article.name}
                user_img={this.state.article.my_file}
                title_con={this.state.article.forum_title}
                article_time={this.state.article.create_date}
                article_icon_eye={this.state.article.forum_browse}
                article_icon_heart={this.state.article.forum_collect}
                content={this.state.article.forum_content}
                key={this.state.article.forum_id}
              />
            ) : (
              <div></div>
            )}
            <div>
              <div>
                <div className="card_mass">
                  <div className="mass-name">
                    <div ref="msgCnt">留言 / {this.props.messageCnt.count}</div>
                  </div>
                  <hr className="content-hr"></hr>
                  <div>
                    <div className="img_mess_class">
                      {this.props.isLogin ? (
                        <img
                          className="user-icon-mass-img"
                          src={`http://localhost:6003/images/${this.props.member[0].my_file}`}
                          alt=""
                          // src={this.props.mass_img}
                        ></img>
                      ) : (
                        <img
                          className="user-icon-mass-img"
                          alt=""
                          // src={this.props.mass_img}
                          src="data:image/jpeg;base64,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"
                        ></img>
                      )}
                    </div>
                    <div className="textarea-mess-class">
                      <textarea
                        className="text-con-text"
                        placeholder="請輸入文字"
                        ref="messageContent"
                      ></textarea>
                    </div>
                    <button
                      className="time-con_post"
                      onClick={() => this.sendMessage()}
                    >
                      送出
                    </button>
                  </div>
                  <hr className="content-hr" />
                  {this.props.messages.map(item => (
                    <ArticleMessageComponent
                      // class_img={article.mass_class_img}
                      class_img={item.my_file}
                      class_user={item.name}
                      mass_class_content={item.message_content}
                      class_time={item.create_date}
                      key={item.message_id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </HeaderFooter>
        <img
          src="/assets/images/background.png"
          style={{
            marginTop: '-880px',
            zIndex: '-1000',
            width: '100vw',
            height: '50vh',
          }}
        />
      </>
    )
  }
}
const mapStateToProps = reduce_state => {
  return {
    messages: reduce_state.forumReducer.messages,
    isLogin: reduce_state.loginReducer.isLogin,
    messageCnt: reduce_state.forumReducer.messageCnt,
    member: reduce_state.loginReducer.member,
  }
}

export default connect(mapStateToProps)(Article_Content)
