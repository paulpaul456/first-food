import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import swal from 'sweetalert'

//components
import Header from '../../components/Header'
import Navbars from '../../components/Navbars'
import Footer from '../../components/Footer'
import Facebook from '../../components/smallComponents/Facebook'
import Up from '../../components/smallComponents/Up'
import CollectionCard from '../../components/main/memberMain/memberCollection/CollectionCard'
import TitleLogo from '../../components/main/memberMain/TitleLogo'

//images
import background1 from '../../assets/images/background.png'
import background2 from '../../assets/images/background2.png'
import ingredient from '../../assets/images/member/ingredient.svg'
import course from '../../assets/images/member/course.svg'
import cuisine from '../../assets/images/member/cuisine.svg'
import discuss from '../../assets/images/member/discuss.svg'

//CSS
import './member.css'
import '../../assets/scss/main/dinner/dinner.scss'

//action
import { handleCancelClickAsync } from '../../action/index'

const spicy = {
  0: '不辣',
  1: '小辣',
  2: '中辣',
  3: '大辣',
  4: '特辣',
}

const room = {
  1: '西門成都',
  2: '環球板橋教室',
  3: '北車懷寧',
  4: '永和頂溪',
  5: '台北101旗艦教室',
  6: '南港教室',
  7: '大葉高島屋教室',
  8: '禾沐生活學苑',
  9: '漫廚廚藝教室',
  10: '瑞輝烹飪教室',
  11: '做做手藝',
  12: '樂樂',
}

class MemberCollectionPage extends React.Component {
  // 單筆取消
  handleCancelClick = sid => () => {
    // let customer_id = this.props.customer_id
    let customer_id = 1

    swal({
      title: '確定取消嗎？',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        this.props.dispatch(handleCancelClickAsync(customer_id, sid))
        swal('取消成功！', '您已成功取消此筆點餐', 'success')
      }
    })
  }

  // 課程單筆取消
  handleCancelCourse = sid => () => {
    // let customer_id = this.props.customer_id
    let customer_id = 1

    swal({
      title: '確定取消嗎？',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        this.props.dispatch(handleCancelClickAsync(customer_id, sid))
        swal('取消成功！', '您已成功取消此筆課程', 'success')
      }
    })
  }

  render() {
    // if (this.props.dinnerProduct) {
    //   console.log(this.props.dinnerProduct.length)
    // }

    let listName = ''

    if (this.props.farmerProduct.length) {
      listName = '食材'
    } else if (this.props.courses.length) {
      listName = '課程'
    } else if (this.props.dinnerProduct.length) {
      listName = '菜色'
    }
    return (
      <>
        <div id="wrapper" className="position-relative">
          <Facebook />
          <Up />
          <div className="container">
            <Header />
            <Navbars />
            {/* {this.props.children} */}
            {/* <Footer location={this.props.location} /> */}

            <div className="my-5">
              {' '}
              <TitleLogo />
            </div>

            <div className="collectionNav d-flex">
              <CollectionCard image={ingredient} title={'食材'} />
              <CollectionCard image={course} title={'課程'} />
              <CollectionCard image={cuisine} title={'菜色'} />
              <CollectionCard image={discuss} title={'討論區'} />
            </div>

            {/* <div>
              {this.props.farmerProduct.map(value => {
                return (
                  <>
                    <div>{value.name}</div>
                    <div>{value.price}</div>
                  </>
                )
              })}
            </div> */}

            <div className="container dn_orderlist">
              <h2>{listName}</h2>
              {/* <div className="dn_orderlist_nav">
                <NavLink key={1} to={''}>
                  批次預約
                </NavLink>
              </div> */}
              {console.log(this.props.dinnerProduct)}
              {this.props.dinnerProduct.map(el => {
                return (
                  <div className="dn_card">
                    <div className="row">
                      <div className="col-md-9 left">
                        <h4>菜色：{el.dinner_name}</h4>
                        <div className="part1">
                          <span>餐廳名：</span>
                          <p>{el.restaurant_name}</p>
                          <span>食材：</span>
                          <p>{el.ingredient}</p>
                          <span>食材商品：</span>
                          <p>{el.product}</p>
                        </div>
                        <div className="part2">
                          <span>特殊要求：</span>
                          <p>{el.special_request}</p>
                          <span>辣度：</span>
                          <p>{spicy[el.spicy]}</p>
                          <span>數量：</span>
                          <p>{el.quantity}</p>
                        </div>
                      </div>
                      <div className="col-md-3 right">
                        <div
                          className="cancel"
                          onClick={this.handleCancelClick(el.dn_goods_cart_id)}
                        >
                          <p>取消此筆點餐</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              {this.props.farmerProduct.map(el => {
                return (
                  <div className="dn_card">
                    <div className="row">
                      <div className="col-md-9 left">
                        <h4>食材：{el.name}</h4>
                        <div className="part1">
                          <span>內容物：</span>
                          <p>{el.content}</p>
                          <span>產地：</span>
                          <p>{el.place}</p>
                          <span>計算方法：</span>
                          <p>{el.specification}</p>
                        </div>
                        <div className="part2">
                          <span>認證機構：</span>
                          <p>{el.approve_sid}</p>
                          <span>價格：</span>
                          <p>{el.price}</p>
                          <span>數量：</span>
                          <p>1</p>
                        </div>
                      </div>
                      <div className="col-md-3 right">
                        <div
                          className="cancel"
                          onClick={this.handleCancelClick(el.dn_goods_cart_id)}
                        >
                          <p>取消此筆點餐</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              {this.props.courses.map(el => {
                return (
                  <div className="dn_card">
                    <div className="row">
                      <div className="col-md-9 left">
                        <h4>課程：{el.course_name}</h4>
                        <div className="part1">
                          <span>上課地點：</span>
                          <p>{room[el.room_sid]}</p>
                          <span>日期：</span>
                          <p>{el.course_date.slice(0, 10)}</p>
                          <span>時間：</span>
                          <p>{el.course_time}</p>
                        </div>
                        <div className="part2">
                          <span>注意：</span>
                          <p>{el.course_note}</p>
                          <span>價格：</span>
                          <p>NT1620</p>
                          <span>上課人數：</span>
                          <p>{el.course_number_limit}</p>
                        </div>
                      </div>
                      <div className="col-md-3 right">
                        <div
                          className="cancel"
                          onClick={this.handleCancelCourse(1)}
                        >
                          <p>取消此筆點餐</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <Footer />
          </div>
          {this.props.home ? (
            <>
              <img src={background1} className="bg1 position-absolute" alt="" />
              <img src={background2} className="bg2 position-absolute" alt="" />
              <div className="bottomLine position-absolute"></div>
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="backimg">
          <img src={background1} className="bg005 position-absolute" alt="" />
          {/* <img
                src={background2}
                className="bg004 position-absolute"
                alt=""
              /> */}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  farmerProduct: state.memberReducer.farmerProduct,
  courses: state.memberReducer.courses,
  dinnerProduct: state.memberReducer.dinnerProduct,
})

export default withRouter(connect(mapStateToProps)(MemberCollectionPage))
