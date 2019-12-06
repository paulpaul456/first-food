import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

//components
import Header from '../../components/Header'
import Navbars from '../../components/Navbars'
import Footer from '../../components/Footer'
import Facebook from '../../components/smallComponents/Facebook'
import Up from '../../components/smallComponents/Up'
import DiscountCard from '../../components/main/memberMain/memberDiscount/DiscountCard'
import DiscountBlueCard from '../../components/main/memberMain/memberDiscount/DiscountBlueCard'
import SlotMachine from '../../components/main/memberMain/memberDiscount/SlotMachine'
import TitleLogo from '../../components/main/memberMain/TitleLogo'

//images
import background1 from '../../assets/images/background.png'
import background2 from '../../assets/images/background2.png'
import discount from '../../assets/images/member/discount.svg'
import discountBlue from '../../assets/images/member/discountBlue.svg'

//CSS
import '../../pages/member/member.css'

//action
import { getCoupon } from '../../action/fetchMemberDataAction'

class MemberDiscountPage extends React.Component {
  componentDidMount() {
    if (this.props.member && this.props.member[0]) {
      console.log(this.props.member[0].customer_id)
      console.log('123456')
      let customer_id = this.props.member[0].customer_id
      this.props.dispatch(getCoupon(customer_id))
    }
  }

  render() {
    // if (this.props.member && this.props.member[0]) {
    //   console.log(this.props.member[0].customer_id)
    // }
    // {
    //   console.log(
    //     this.props.coupon.map(v => {
    //       if (v.pm_event === 50) {
    //         return v.nam
    //       } else {
    //         return 0
    //       }
    //     })
    //   )
    // }
    let coupon_1000_number = 0
    let coupon_500_number = 0
    let coupon_300_number = 0
    let coupon_100_number = 0

    let coupon_1000 = this.props.coupon.map(v => {
      if (v.pm_event === 50) {
        return v.nam
      } else {
        return 0
      }
    })

    let coupon_500 = this.props.coupon.map(v => {
      if (v.pm_event === 51) {
        return v.nam
      } else {
        return 0
      }
    })

    let coupon_300 = this.props.coupon.map(v => {
      if (v.pm_event === 52) {
        return v.nam
      } else {
        return 0
      }
    })

    let coupon_100 = this.props.coupon.map(v => {
      if (v.pm_event === 53) {
        return v.nam
      } else {
        return 0
      }
    })

    for (let i = 0; i < coupon_1000.length; i++) {
      coupon_1000_number = coupon_1000_number + coupon_1000[i]
    }

    for (let i = 0; i < coupon_500.length; i++) {
      coupon_500_number = coupon_500_number + coupon_500[i]
    }

    for (let i = 0; i < coupon_300.length; i++) {
      coupon_300_number = coupon_300_number + coupon_300[i]
    }

    for (let i = 0; i < coupon_100.length; i++) {
      coupon_100_number = coupon_100_number + coupon_100[i]
    }

    console.log(
      coupon_1000_number,
      coupon_500_number,
      coupon_300_number,
      coupon_100_number
    )

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

            {/* <div className="">
              <div className="d-flex justify-content-center">
                <DiscountCard image={discount} title={'1000優惠卷x1'} />
                <DiscountBlueCard image={discountBlue} title={'500優惠卷x5'} />
              </div>
              <div className="d-flex justify-content-center">
                <DiscountBlueCard image={discountBlue} title={'300優惠卷x3'} />
                <DiscountCard image={discount} title={'100優惠卷x2'} />
              </div>
            </div> */}
            <section
              style={{ backgroundColor: '#d6b9b9', marginBottom: '50px' }}
            >
              <div className="d-flex">
                <div className="row">
                  <div className="col-md-6">
                    <DiscountCard
                      image={discount}
                      title={`1000優惠卷x${coupon_1000_number}`}
                    />
                  </div>
                  <div className="col-md-6">
                    <DiscountBlueCard
                      image={discountBlue}
                      title={`500優惠卷x${coupon_500_number}`}
                    />
                  </div>
                  <div className="col-md-6">
                    <DiscountBlueCard
                      image={discountBlue}
                      title={`300優惠卷x${coupon_300_number}`}
                    />
                  </div>
                  <div className="col-md-6">
                    <DiscountCard
                      image={discount}
                      title={`100優惠卷x${coupon_100_number}`}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                優惠拉霸區
              </h1>
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '20px',
                }}
              >
                天天登入，天天送優惠
              </p>
              <SlotMachine />
            </section>

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
  member: state.loginReducer.member,
  coupon: state.memberReducer.coupon,
})

export default withRouter(connect(mapStateToProps)(MemberDiscountPage))
