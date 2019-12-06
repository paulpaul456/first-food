// 此專案請使用函式型元件 , 盡量不使用類別型 !
import React from 'react'

class Class extends React.Component {
  //初始建構
  constructor(props) {
    super(props)
    this.state = {}
  }
  //掛載後
  componentDidMount() {}
  //更新後
  componentDidUpdate(prevProps, prevState, snapshot) {}
  //卸載前
  componentWillUnmount() {}
  //渲染
  render() {
    return <></>
  }
}

export default Class
