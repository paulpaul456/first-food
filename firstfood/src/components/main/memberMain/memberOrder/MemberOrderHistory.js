import React, { useEffect, useState } from 'react'
import { Card, Accordion, Dropdown } from 'react-bootstrap'
import OrderCard from './OrderCard'
import OrderTable from './OrderTable'
import TitleLogo from '../TitleLogo'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadOrderMemAsync } from '../../../../action/index'

// 數字清空
let foodtoatl = 0
let coutoatl = 0
let rtoatl = 0
let totalall = 0 

class MemberOrderHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: '時間',
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    console.log(this.props.member.customer_id)
    // let toadd = document.querySelector('.toadd')
    // toadd.setAttribute='hahaha'
    // let totaladd = document.querySelector('.totaladd')
    // totaladd.innerHTML='<h3>安安</h3>'

    this.props.dispatch(loadOrderMemAsync(this.props.member.customer_id,13,13,'DESC'))
  }

  componentDidUpdate() {
    console.log(' componentDidUpdate')
  }
// 石材每次算
  fadd() {
    console.log('food計算計算計算機')
    foodtoatl += this.fp
        // console.log(foodtoatl)
    return foodtoatl
  }
  // 課程每次算
  cxadd() {
    console.log('cou計算計算計算機')
    coutoatl += this.xp
        // console.log(coutoatl)
    return coutoatl
  }
  // 代客煮每次算
  radd() {
    console.log('rrrr計算計算計算機')
    rtoatl += this.rp
        // console.log(rtoatl)
    return rtoatl
  }
  // 訂單總表每次算
  allfadd() {
    console.log('計算計算計算機')
    if(!this.addxp){this.addxp=0}
    if(!this.addrp){this.addrp=0} 
    if(!this.addfp){this.addfp=0} 
    // console.log('this.addrp')
    // console.log(this.addrp)
    // console.log('this.addfp')
    // console.log(this.addfp)
    // console.log('this.addxp')
    // console.log(this.addxp)
    // console.log('this.disp') 
    // console.log(this.disp) 
    // console.log('this.carp')
    // console.log(this.carp)
  


    // totalall = Number(this.addfp) + Number(this.addxp) + Number(this.addrp) + Number(this.carp)- Number(this.disp)
    totalall = Number(this.addfp) + Number(this.addxp) + Number(this.addrp) - Number(this.disp)
    // console.log(totalall)
    // console.log(typeof(totalall))
    return totalall
  }
  // 
  clean(){
     foodtoatl = 0
     coutoatl = 0
     rtoatl = 0
     totalall= 0
     this.addrp=0
     this.addxp=0
     this.addfp=0

    // console.log(foodtoatl)
    // console.log(coutoatl)
    // console.log(rtoatl)
    // console.log(totalall)
  }

  handleSelect=(value1,value2)=>()=>{
    console.log("有拿到喔")
    console.log(value1)
    console.log(value2)
    this.setState({ time:value2})
    if(value2=='最新'){
      value2='DESC'
    }else {
      value2='ASC'
    }
    this.props.dispatch(loadOrderMemAsync(this.props.member.customer_id,13,13,value2))
    }
  //渲染
  render() {
    if (!this.props.orderlist) {
      return <>資料載入中</>
    }
    if (!this.props.corderlist) {
      return <>資料載入中</>
    }
    if (!this.props.forderlist) {
      return <>資料載入中</>
    }
    if (!this.props.rorderlist) {
      return <>資料載入中</>
    }


    return (
      <>
        {console.log(this.props)}
        <TitleLogo />
        <div className="flex-wrap d-md-flex justify-content-md-center justify-content-lg-around my-5">
          <NavLink key={1} to={'/member/order'} className="hoverhovermeme">
            <OrderCard name={'歷史訂單'} img={'icon3'}/>
          </NavLink>
          <NavLink key={2} to={'/member/order/cost'} className="hoverhovermeme">
            <OrderCard name={'消費數據'} img={'icon2'}/>
          </NavLink>
        </div>

        <div className="ordertable">
          {/* <div>{this.props.orderlist.map((v,ind)=>{return (<div><h1>{v.order_id}</h1>
      <div>
          {this.props.corderlist.map((x,ind)=>{if(x.main_order==v.order_id){return(
                <div>
            
             
                    <div>商品{x.course_name}</div>
                    <div>價格1620</div>
                    <div>數量{x.quantity}</div>
                    <div className="total">小計{x.quantity*1620}</div>
                 
                </div>
              )}})}</div></div>
       
      )})}</div> */}
          <div className="d-flex justify-content-between">  <h2 className="all">
            共<i className=" txtdanger mx-2">{this.props.orderlist.length}</i>筆
          </h2>
          <Dropdown>
  <Dropdown.Toggle variant="danger" id="dropdown-basic">
  {this.state.time}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={this.handleSelect(this.props.member.customer_id,'最新')}>最新</Dropdown.Item>
    <Dropdown.Item onClick={this.handleSelect(this.props.member.customer_id,'最舊')}>最舊</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown></div>

         

          <div>
            {this.props.orderlist.map((v, ind) => {
              return (
                <Accordion key={ind} className="my-2">
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="bigtittle clickmeplzakabig"
                    >
                      <div className="sm-12">
                        <div className="d-flex justify-content-around">
                          <div className="d-sm-flex w50">
                            <div className="pr-3 iamaw700">訂單編號</div>
                            <div className="">{v.order_id}</div>
                          </div>
                          <div className="btn1 w25 d-flex align-items-center justify-content-center">
                            已完成
                          </div>
                        </div>
                      </div>
                      <div className="sm-0">
                        <div className="d-flex justify-content-between borbot py-2">
                          <div className="d-flex w33">
                            <div className="pr-3 iamaw700">訂單編號</div>
                            <div>OA{v.order_id}</div>{' '}
                          </div>
                          <div className="d-flex w33">
                            <div className="pr-3 iamaw700">訂單成立</div>
                            <div>{v.create_at}</div>{' '}
                          </div>
                          <div className="d-flex w33">
                            <div className="pr-3 iamaw700">狀態</div>
                            <div>已完成</div>{' '}
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <div>
                          <div className="d-flex w50">
                            <div className="pr-3">訂單編號</div>
                            <div className="">OA{v.order_id}</div>
                          </div>
                          <div className="d-flex justify-content-around title py-2">
                            <div>商品</div>
                            <div>價格</div>
                            <div>數量</div>
                            <div>小記</div>
                          </div>

                          {this.props.forderlist.map((f, ind) => {
                            if (f.main_order == v.order_id) {
                              return (
                                <div
                                  className="d-flex justify-content-around borbot"
                                  key={ind}
                                >
                         
                                  <div className="w25">{f.name}</div>
                                  <div className="w25">NT${f.price}</div>
                                  <div className="w25">{f.quantity}</div>
                                  <div className="w25 toadd">
                                    NT${(this.fp = parseInt(f.quantity * f.price))}

                                  </div>{' '}
                                  <p className="txtgreen xx">{this.addfp=this.fadd()}</p>
                                </div>
                              )
                            }
                          })}
                          {this.props.corderlist.map((x, ind) => {
                            if (x.main_order == v.order_id) {
                              return (
                                <div
                                  className="d-flex justify-content-around borbot"
                                  key={ind}>
                   
                                  <div className="w25">{x.course_name}</div>
                                  <div className="w25">NT${x.cost}</div>
                                  <div className="w25">{x.quantity}</div>
                                  <div className="w25 toadd">
                                    NT${this.xp = parseInt(x.quantity * x.cost)}
                                  </div>
                                  <p className="txtdanger xx">{this.addxp=this.cxadd()}</p>
                                </div>
                              )
                            }
                          })}

                          {this.props.rorderlist.map((r, ind) => {
                            if (r.main_order == v.order_id) {
                              return (
                                <div
                                  className="d-flex justify-content-around borbot"
                                  key={ind}
                                >
                                  <div className="w25">
                                    {r.rrname}
                                    ({r.name}/{r.cooktype})
                                  </div>
                                  <div className="w25">NT${r.cook+r.price}</div>
                                  <div className="w25">{r.quantity}</div>
                                  <div className="w25 toadd">
                                    NT${this.rp = parseInt(r.quantity * (r.cook+r.price))}
                                    {console.log('this.rp')}
                                    {console.log(this.rp)}
                                  </div>
                                  <p className="txtblue xx" >{this.addrp=this.radd()}</p>
                                </div>
                              )
                            }
                          })}

                          {/* <div className="d-flex justify-content-end">
                            <div className="w25">運費</div>
                            <div className="w25">NT${this.carp=100}</div>
                          </div> */}
                          <div className="d-flex justify-content-end">
                            <div className="w25">折扣</div>
                            <div className="w25 txtdanger">-NT${this.disp=v.discount}</div>
                          </div>
                          <div className="d-flex justify-content-end">
                            <div className="w25">總金額</div>
                            <div className="w25 fw700">NT${this.allfadd()}</div>
                       
                            <p>{this.clean()}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              )
            })}
          </div>

          {/* SELECT * FROM `main_order` WHERE `customer_information` = 1 */}
          {/* 比對 3張表 */}
          {/* 撈4次 */}
          {/* 時間排序 */}
          {/* SELECT * FROM `main_order`AS a JOIN `course_order` AS b ON a.`order_id` = b.`main_order` WHERE `customer_information` = 1 */}
        </div>
        {/* <OrderTable /> */}
      </>
    )
  }
}

// export default MemberOrderHistory
const mapStateToProps = store => {
  if (!store.FarmerProductReducer.fmdata)
    return {
      isLogin: store.loginReducer.isLogin,
      // member: store.loginReducer.member,
      // product: '',
    }
  return {
    // member: store.loginReducer.member,
    // qq: store.loginReducer,
    isLogin: store.loginReducer.isLogin,
    orderlist: store.GoodsFmReducer.ordermemdata.orderlist,
    corderlist: store.GoodsFmReducer.ordermemdata.courseorderlist,
    forderlist: store.GoodsFmReducer.ordermemdata.forderlist,
    rorderlist: store.GoodsFmReducer.ordermemdata.rorderlist,
    member: store.loginReducer.member[0],
    // qq: store.loginReducer,
    // isLogin: store.loginReducer.isLogin,
  }
}
export default connect(mapStateToProps)(MemberOrderHistory)
