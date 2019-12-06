import React from 'react'
import { Link } from 'react-router-dom'
import HeaderFooter from '../container/HeaderFooter'
import './css/Post_article.css'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { insertArticle, uploadPhoto } from '../../action/forumAction'
import swal from 'sweetalert'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import FileBase64 from 'react-file-base64'

class Post_article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classType: [],
      data: '',
      img: '',
      files: {},
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    const classId = this.props.match.params.classId
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
  getContent() {
    const classId = this.props.match.params.classId
    const custId = this.props.member[0].customer_id
    console.log(custId)
    console.log(this.refs.classType.value)
    console.log(this.refs.articleTitle.value)
    console.log(classId)
    console.log(custId)
    console.log(this.state.data)
    if (this.refs.classType.value === '') {
      swal({
        title: '請選擇分類',
        icon: 'warning',
      })
      return false
    } else if (this.refs.articleTitle.value === '') {
      swal({
        title: '請輸入文章標題',
        icon: 'warning',
      })
      return false
    } else if (this.state.data.length < 10) {
      swal({
        title: '文章內容不可小於10個字',
        icon: 'warning',
      })
      return false
    }

    swal({
      title: '確定要發表文章嗎？',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(isSend => {
      if (isSend) {
        this.props.dispatch(
          insertArticle(
            this.refs.articleTitle.value,
            classId,
            this.refs.classType.value,
            this.state.data,
            custId,
            this.state.img
          )
        )
        swal('已發表文章！', '您已成功發表文章了。', 'success').then(() => {
          this.props.history.push('/article/' + classId)
        })
      }
    })
  }

  getFiles(files) {
    this.setState({ files: files }, function() {
      console.log(files.file)
      const formData = new FormData()
      formData.append('image', files.file)
      const custId = this.props.member[0].customer_id
      console.log(custId)
      fetch(`http://localhost:6003/api/forum/upload_img/${custId}`, {
        method: 'POST',
        headers: {},
        body: formData,
      })
        .then(response => {
          console.log(response)
          return response.json()
        })
        .then(jsonObj => {
          console.log(jsonObj)
          this.setState(
            {
              img: jsonObj.file,
            },
            function() {
              console.log(this.state.img)
            }
          )
        })
        .catch(error => {
          console.log(error)
        })
    })
    console.log()
  }

  render() {
    return (
      <>
        <HeaderFooter location="討論區">
          <span className="btn-type-post">
            <Link to={`/article/${this.props.match.params.classId}`}>
              <button className="new_post">返回列表</button>
            </Link>
          </span>
          <div className="card_post">
            <div className="text_post">發表新文章</div>
            <div className="post_class">
              <FileBase64 multiple={false} onDone={this.getFiles.bind(this)} />
              {this.state.files.base64 ? (
                <img
                  className="reviewImg"
                  alt="reviewImg"
                  src={this.state.files.base64}
                ></img>
              ) : (
                <img
                  className="reviewImg"
                  alt="reviewImg"
                  src={this.state.files.base64}
                  style={{ display: 'none' }}
                ></img>
              )}
            </div>
            <div>
              <select className="post_class" ref="classType">
                <option value="">請選擇分類</option>
                {this.state.classType.map((item, i) => (
                  <option value={item.forum_type} key={i}>
                    {item.forum_type}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="title_post"
                placeholder="請輸入文章標題"
                ref="articleTitle"
              ></input>
            </div>
            <div className="article">
              <CKEditor
                editor={ClassicEditor}
                data=""
                onInit={editor => {}}
                onChange={(event, editor) => {
                  const data = editor.getData()
                  this.setState({
                    data: data,
                  })
                }}
                config={{
                  toolbar: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'blockQuote',
                    'link',
                    'numberedList',
                    'bulletedList',
                    // 'imageUpload',
                    'insertTable',
                    'tableColumn',
                    'tableRow',
                    'mergeTableCells',
                    'mediaEmbed',
                    '|',
                    'undo',
                    'redo',
                  ],
                }}
              />
            </div>
            <br />
            <div>
              <button
                className="time-post time-bro"
                data={this.state.data}
                onChange={this.onEditorChange}
                onClick={() => this.getContent()}
              >
                發佈文章
              </button>
            </div>
          </div>
        </HeaderFooter>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    insertArticle: state.forumReducer.insertArticle,
    isLogin: state.loginReducer.isLogin,
    member: state.loginReducer.member,
  }
}

export default withRouter(connect(mapStateToProps)(Post_article))
