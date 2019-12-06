import React, { useEffect, useState } from 'react'
import ChartPie from './ChartPie'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import OrderCard from './OrderCard'
import TitleLogo from '../TitleLogo'
import { loadOrderMemAsync } from '../../../../action/index'
import { Doughnut } from 'react-chartjs-2'
import { Card, Dropdown } from 'react-bootstrap'

let orderadd = []
let name = []
let dad = []
let mom = []
let co = []
let co2 = []
let dad2 = []
let mom2 = []
let re = []
let re2 = []
let dad3 = []
let mom3 = []
let color = []
class MemberOrderCostData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tog:'食材',
      to:'waitblock active',
      to1:'waitblock',
      to2:'waitblock',
      sename1:'時間',
      sename2:'類別',
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.props.dispatch(loadOrderMemAsync(this.props.member.customer_id,13,13,'DESC'))
  }

  componentDidUpdate() {
    console.log(' componentDidUpdate')
  }
  handletog=(value)=>()=>{
    console.log('value')
    console.log(value)
   
    this.setState({ tog:value})
    this.setState({ to:'waitblock active',
    to1:'waitblock ',
    to2:'waitblock ',
    sename2:value,})
  }
  handletog1=(value)=>()=>{
    console.log('value')
    console.log(value)
   
    this.setState({ tog:value})
    this.setState({ to:'waitblock ',
    to1:'waitblock active',
    to2:'waitblock ',
    sename2:value,})
  }
  handletog2=(value)=>()=>{
    console.log('value')
    console.log(value)
   
    this.setState({ tog:value})
    this.setState({ to:'waitblock ',
    to1:'waitblock ',
    to2:'waitblock active',
    sename2:value,})
  }
  
  
  handleSelect=(value1,value2,value3,value4,value5)=>()=>{
    console.log("有拿到喔")
    console.log(value1)
    console.log(value2)
    console.log(value3)
    console.log(value4)
    console.log(value5)
    this.setState({ sename1:value5,})
   
    this.props.dispatch(loadOrderMemAsync(this.props.member.customer_id,value2,value3,'DESC'))
    }

  //渲染
  render() {
    if (!this.props.orderlist) {
      return <>資料載入中</>
    }

    console.log(this.props)
    console.log(this.props.forderlist)
    orderadd.push(
      this.props.forderlist.map(f => {
        return  f.price * f.quantity 
      })
    )
    name.push(
      this.props.forderlist.map(f => {
        return f.name + '(訂單:' + f.main_order + ')'
      })
    )
    co.push(
      this.props.corderlist.map(c => {
        return  c.quantity * c.cost 
      })
    )
    co2.push(
      this.props.corderlist.map(c => {
        return c.course_name + '(訂單:' + c.main_order + ')'
      })
    )
    re.push(
      this.props.rorderlist.map(r => {
        return  r.quantity * (r.cook+r.price)
      })
    )
    re2.push(
      this.props.rorderlist.map(r => {
        return r.rrname + '(訂單:' + r.main_order + ')'
      })
    )

    console.log('orderadd')
    console.log(orderadd)
    dad = orderadd.pop()
    mom = name.pop()
    dad2 = co.pop()
    mom2 = co2.pop()
    dad3 = re.pop()
    mom3 = re2.pop()
    console.log('dad3')
    console.log(dad3)

    color =[  '#C73E3A',
    '#0089A7',
    '#6A8372',
    '#A8D8B9',
    '#EEA9A9',
    '#376B6D',
    '#FFC408',
    '#E83015',
    '#268785',
    '#005CAF',
    '#E87A90',
    '#C73E3A',
    '#0089A7',
    '#6A8372',
    '#A8D8B9',
    '#EEA9A9',
    '#376B6D',
    '#FFC408',
    '#E83015',
    '#268785',
    '#005CAF',
    '#E87A90',
    '#C73E3A',
    '#0089A7',
    '#6A8372',
    '#A8D8B9',
    '#EEA9A9',
    '#376B6D',
    '#FFC408',
    '#E83015',
    '#268785',
    '#005CAF',
    '#E87A90',
    '#C73E3A',
    '#0089A7',
    '#6A8372',
    '#A8D8B9',
    '#EEA9A9',
    '#376B6D',
    '#FFC408',
    '#E83015',
    '#268785',
    '#005CAF',
    '#E87A90']

    const data = {
      labels: ['課程', '食材', '代客煮'],
      datasets: [
        {
          data: [
            this.props.corderlist.length,
            this.props.forderlist.length,
            this.props.rorderlist.length,
          ],
          backgroundColor: ['#C73E3A', '#0089A7', '#6A8372'],
          hoverBackgroundColor: ['#C73E3A', '#0089A7', '#6A8372'],
        },
      ],
    }
    const data2 = {
      labels: mom,
      datasets: [
        {
          data: dad,
          backgroundColor: color,
          hoverBackgroundColor: ['#C73E3A', '#0089A7', '#6A8372'],
        },
      ],
    }
    const data3 = {
      labels: mom2,
      datasets: [
        {
          data: dad2,
          backgroundColor: color,
          hoverBackgroundColor: ['#C73E3A', '#0089A7', '#6A8372'],
        },
      ],
    }
    const data4 = {
      labels: mom3,
      datasets: [
        {
          data: dad3,
          backgroundColor: color,
          hoverBackgroundColor: ['#C73E3A', '#0089A7', '#6A8372'],
        },
      ],
    }

    return (
      <>
        {console.log(this.props)}
        {/* <div className="d-flex justify-content-md-around">
          <div><Dropdown>
  <Dropdown.Toggle variant="danger" id="dropdown-basic">
    {this.state.sename1}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={this.handleSelect(this.props.member.customer_id,'08','09','ASC','8月')}>8月</Dropdown.Item>
    <Dropdown.Item onClick={this.handleSelect(this.props.member.customer_id,'09','10','ASC','9月')}>9月</Dropdown.Item>
    <Dropdown.Item onClick={this.handleSelect(this.props.member.customer_id,'10','11','ASC','10月')}>10月</Dropdown.Item>
    <Dropdown.Item onClick={this.handleSelect(this.props.member.customer_id,'11','12','ASC','11月')}>11月</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></div>
          <div><Dropdown>
  <Dropdown.Toggle variant="danger" id="dropdown-basic">
  {this.state.sename2}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={this.handletog('食材')}>食材消費支出(單位:NT$)</Dropdown.Item>
    <Dropdown.Item onClick={this.handletog1('課程')}>課程消費支出(單位:NT$)</Dropdown.Item>
    <Dropdown.Item onClick={this.handletog2('代客煮')}>代客煮消費支出(單位:NT$)</Dropdown.Item>   
  </Dropdown.Menu>
</Dropdown>
</div>
        </div> */}

        

        <TitleLogo />
        <div className="flex-wrap d-md-flex justify-content-md-center justify-content-lg-around my-5">
          <NavLink key={1} to={'/member/order'} className="hoverhovermeme">
            <OrderCard name={'歷史訂單'} img={'icon3'} />
          </NavLink>
          <NavLink key={2} to={'/member/order/cost'} className="hoverhovermeme">
            <OrderCard name={'消費數據'} img={'icon2'} />
          </NavLink>
        </div>
        
        <div className="d-flex justify-content-md-around">
          <div><Dropdown>
  <Dropdown.Toggle variant="danger" id="dropdown-basic">
    {this.state.sename1}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={this.handleSelect(this.props.member.customer_id,'08','09','ASC','9月')}>9月</Dropdown.Item>
    <Dropdown.Item onClick={this.handleSelect(this.props.member.customer_id,'09','10','ASC','10月')}>10月</Dropdown.Item>
    <Dropdown.Item onClick={this.handleSelect(this.props.member.customer_id,'10','11','ASC','11月')}>11月</Dropdown.Item>
    <Dropdown.Item onClick={this.handleSelect(this.props.member.customer_id,'11','12','ASC','12月')}>12月</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></div>
          <div><Dropdown>
  <Dropdown.Toggle variant="danger" id="dropdown-basic">
  {this.state.sename2}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={this.handletog('食材')}>食材消費支出(單位:NT$)</Dropdown.Item>
    <Dropdown.Item onClick={this.handletog1('課程')}>課程消費支出(單位:NT$)</Dropdown.Item>
    <Dropdown.Item onClick={this.handletog2('代客煮')}>代客煮消費支出(單位:NT$)</Dropdown.Item>   
  </Dropdown.Menu>
</Dropdown>
</div>
        </div>



        {/* <ChartPie/> */}
        <div className="ordercostlist">
          <div className="w100">
            <Card className="my-3">
              <h2 className="txtdanger">消費項目數量比(單位:筆數)</h2>
              <Doughnut data={data} />
            </Card>
   
  <div className={this.state.to}><Card className="my-3">
              <h2 className="txtdanger">食材消費支出(單位:NT$)</h2>
              <Doughnut data={data2} />
            </Card></div>  
  <div className={this.state.to1}><Card className="my-3">
              <h2 className="txtdanger">課程消費支出(單位:NT$)</h2>
              <Doughnut data={data3} />
            </Card></div>
  <div className={this.state.to2}><Card className="my-3">
              <h2 className="txtdanger">代客煮消費支出(單位:NT$)</h2>
              <Doughnut data={data4} />
            </Card></div>
       
         
            
           
          </div>
        </div>
      </>
    )
  }
}

// export default MemberOrderHistory
const mapStateToProps = store => {
  if (!store.GoodsFmReducer.ordermemdata)
    return {
      isLogin: store.loginReducer.isLogin,
    }
  return {
    isLogin: store.loginReducer.isLogin,
    orderlist: store.GoodsFmReducer.ordermemdata.orderlist,
    corderlist: store.GoodsFmReducer.ordermemdata.courseorderlist,
    forderlist: store.GoodsFmReducer.ordermemdata.forderlist,
    rorderlist: store.GoodsFmReducer.ordermemdata.rorderlist,
    member: store.loginReducer.member[0],
  }
}
export default connect(mapStateToProps)(MemberOrderCostData)
