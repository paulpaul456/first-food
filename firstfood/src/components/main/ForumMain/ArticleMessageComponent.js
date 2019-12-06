import React from 'react'

class ArticleMessageComponent extends React.Component {
  componentDidMount() {
    let date = new Date(this.props.class_time)

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
  render() {
    return (
      <>
        <div>
          <div>
            <div className="img_mess_class">
              {this.props.class_img ? (
                <img
                  className="user-icon-mass-img"
                  alt=""
                  src={`http://localhost:6003/images/${this.props.class_img}`}
                ></img>
              ) : (
                <img
                  className="user-icon-mass-img"
                  alt=""
                  src="data:image/jpeg;base64,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"
                ></img>
              )}
            </div>
            <div className="text-con textarea-mess-class">
              <div>{this.props.class_user}</div>
              <div>
                {this.props.mass_class_content}
                <div>
                  <span ref="createDate">{this.props.class_time}</span>
                  {/* <button className="time-con">回覆</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="content-hr" />
      </>
    )
  }
}
export default ArticleMessageComponent
