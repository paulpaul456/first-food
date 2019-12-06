import React from 'react'
import { Link } from 'react-router-dom'

class ForumComponent extends React.Component {
  componentDidMount() {
    let content = this.props.content
    if (content.length > 40) {
      content = content.substring(0, 39)
    }
    this.refs.content.innerHTML = '<p>' + content + '</p>'
  }
  render() {
    return (
      <>
        <Link to={`/article/${this.props.classId}`}>
          <div className="dox d-flex">
            <div className="div-img">
              <img className="for-img" alt="" src={this.props.img} />
            </div>
            <div className="div_body">
              <div className="type">
                <div>{this.props.type}</div>
              </div>
              <div className="title">
                <div>{this.props.title}</div>
              </div>
              <div className="for_p" ref="content"></div>
              <div className="far_icon">
                <i>
                  <i className="far">版主: {this.props.user} </i>
                  <i className="forum-article-totle"> 文章總數
                    {' '}
                    {this.props.article_count}
                  </i>
                </i>
              </div>
            </div>
          </div>
        </Link>
      </>
    )
  }
}
export default ForumComponent
