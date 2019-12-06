import React from 'react'
import { Link } from 'react-router-dom'
import HeaderFooter from '../container/HeaderFooter.js'
import ArticleComponent from '../../components/main/ForumMain/ArticleComponent.js'
import './css/Article.css'
import { connect } from 'react-redux'
import {
  getArticlesByForumClass,
  getForumClass,
} from '../../action/forumAction'

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      classType: [],
      articles: [],
      disArticles: [],
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    const classId = this.props.match.params.classId
    // this.props.dispatch(getArticlesByForumClass(classId))
    this.props.dispatch(getForumClass(classId))
    this.initArticle(classId)
    fetch(`http://localhost:6003/api/forum/getForumClassType/${classId}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        this.setState({
          classType: jsonObj,
        })
      })
  }
  initArticle(forumClass) {
    fetch(
      `http://localhost:6003/api/forum/getArticlesByForumClass/${forumClass}`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        this.setState({
          articles: jsonObj,
          disArticles: jsonObj,
        })
      })
  }

  showNoLogin() {
    console.log(this.props.isLogin)
    if (this.props.isLogin) {
      this.props.history.push(
        `/post_article/${this.props.match.params.classId}`
      )
    } else {
      alert('請先登入')
    }
  }
  articleFilter() {
    console.log(this.refs.classType.value)
    if (this.refs.classType.value === 'all') {
      this.setState({
        disArticles: this.state.articles,
      })
    } else {
      let tempArt = []
      this.state.articles.map(item => {
        if (item.forum_type === this.refs.classType.value) {
          tempArt.push(item)
        }
      })
      this.setState({
        disArticles: tempArt,
      })
    }
  }

  render() {
    const articles = this.state.disArticles
    console.log('articles:')
    return (
      <>
        <HeaderFooter location="討論區">
          {/* 大類名稱 */}
          <div>
            <div className="article-btn">
              <span className="btn-type">
                <button className="article_class">
                  {this.props.forumClass.forum_class_desc}
                </button>
              </span>
              <select
                className="post_class_article"
                ref="classType"
                onChange={() => {
                  this.articleFilter()
                }}
              >
                <option value="all">請選擇分類</option>
                {this.state.classType.map((item, i) => (
                  <option value={item.forum_type} key={i}>
                    {item.forum_type}
                  </option>
                ))}
              </select>
              <span className="btn-type">
                <Link to="/forum">
                  <button className="new_post">返回分類</button>
                </Link>
              </span>
              <span className="btn-type">
                <button
                  className="new_post"
                  onClick={() => {
                    this.showNoLogin()
                  }}
                >
                  新增文章
                </button>
              </span>
            </div>
          </div>
          {articles.map(item => (
            <ArticleComponent
              art_id={item.forum_id}
              art_class={item.forum_type}
              img={item.forum_image}
              title={item.forum_title}
              content={item.forum_content}
              author={item.name}
              save={item.forum_good}
              article_count={item.forum_collect}
              create_date={item.create_date}
              key={item.forum_id}
            />
          ))}
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

// 綁定props.todos <=> store.todos
const mapStateToProps = state => {
  return {
    // articles: state.forumReducer.articles,
    forumClass: state.forumReducer.forumClass,
    isLogin: state.loginReducer.isLogin,
    // member: state.loginReducer.member,
  }
}

export default connect(mapStateToProps)(Article)
