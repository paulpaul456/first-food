import React from 'react'
import { Link } from 'react-router-dom'

class ArticleComponent extends React.Component {
  componentDidMount() {
    let content = this.props.content
    if (content.length > 40) {
      content = content.substring(0, 39)
    }
    this.refs.content.innerHTML = '<p>' + content + '</p>'
    let date = new Date(this.props.create_date)
    console.log(this.props.create_date)

    const year = date.getFullYear()
    const month =
      date.getMonth() + 1 < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1
    const date_str = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const min =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const sec =
      date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    const createDate =
      year + '-' + month + '-' + date_str + ' ' + hour + ':' + min + ':' + sec
    this.refs.createDate.innerHTML = createDate
  }
  componentDidUpdate() {
    let content = this.props.content
    if (content.length > 40) {
      content = content.substring(0, 39)
    }
    this.refs.content.innerHTML = '<p>' + content + '</p>'
  }
  render() {
    return (
      <>
        <div className="article-table">
          <div className="card_art">
            <Link to={`/article_content/${this.props.art_id}`}>
              <div className="art_class">
                <span>{this.props.art_class}</span>
              </div>
              <div className="for_img">
                <img alt="" className="article-img" src={this.props.img} />
              </div>
              <div className="art_p">
                <div className="article-title">{this.props.title}</div>
                <div className="article_component" ref="content">
                  {this.props.content}
                </div>
                {/* <div className="article_time">發布時間 {this.props.time}</div> */}
                <i className="article_i">
                  <i className="fa-name">作者: {this.props.author}</i>
                  <i className="fa-heart-article">按讚: {this.props.save}</i>
                  <i className="art_new">
                    收藏:
                    {this.props.article_count}
                  </i>
                </i>
                <i className="create_date" ref="createDate"></i>
              </div>
            </Link>
          </div>
        </div>
      </>
    )
  }
}
export default ArticleComponent
