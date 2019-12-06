import React from 'react'
import HeaderFooter from '../container/HeaderFooter'
import ForumComponent from '../../components/main/ForumMain/ForumComponent.js'
import './css/Forum.scss'
import { connect } from 'react-redux'
import { getCatsNewer } from '../../action/forumAction'
// import background1 from '../assets/images/background.png'

class Forum extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.dispatch(getCatsNewer())
  }

  render() {
    const articles = this.props.forumContentNewer
    //對文章類別進行排序
    articles.sort(function(a, b) {
      return a.forum_class_id > b.forum_class_id ? 1 : -1
    })
    // //將登入資訊放入localStorage
    // if (this.props.member.length > 0 && this.props.isLogin) {
    //   localStorage.setItem('memberId', this.props.member[0].customer_id)
    //   localStorage.setItem('isLogin', true)
    //   if (
    //     this.props.member[0].my_file === '' ||
    //     this.props.member[0].my_file === null
    //   ) {
    //     localStorage.setItem(
    //       'memberPhoto',
    //       'data:image/jpeg;base64,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'
    //     )
    //   } else {
    //     localStorage.setItem(
    //       'memberPhoto',
    //       `http://localhost:6003/images/` + this.props.member[0].my_file
    //     )
    //   }
    // } else {
    //   localStorage.setItem('memberId', '')
    //   localStorage.setItem(
    //     'memberPhoto',
    //     'data:image/jpeg;base64,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'
    //   )
    //   localStorage.setItem('isLogin', false)
    // }
    return (
      <>
        <HeaderFooter location="討論區">
          <div className="forumWrapper">
            {articles.map(item => (
              <ForumComponent
                classId={item.forum_class}
                type={item.forum_class_desc} //"–　料理分享"
                title={item.forum_title} //"【分享】初學者也學得會的炸豬排！"
                img={item.forum_image} //"../../assets/images/forum/forum-02.jpg"
                content={item.forum_content} //" 簡單的炸豬排，外表沾層麵包粉炸成可口金黃色，外皮酥脆，吃起來咔茲咔茲好口味。"
                user={'薯條'} //"薯條"
                article_count={item.cnt} //"9487"
                key={item.forum_class}
              />
            ))}
          </div>
        </HeaderFooter>
        <img
          src="/assets/images/background.png"
          style={{ marginTop: '-1400px', zIndex: '-1000' }}
        />
      </>
    )
  }
}

// 綁定props.todos <=> store.todos
const mapStateToProps = state => {
  return {
    forumContentNewer: state.forumReducer.forumContentNewer,
    forum: state.forumReducer.forum,
    // isLogin: state.loginReducer.isLogin,
    // member: state.loginReducer.member,
  }
}
export default connect(mapStateToProps)(Forum)
