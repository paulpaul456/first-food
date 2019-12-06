import React from 'react'
import '../../../../assets/scss/main/member/slotMachine.scss'
import { connect } from 'react-redux'
import { slotGetCoupon } from '../../../../action/fetchMemberDataAction'
import swal from '@sweetalert/with-react'

class SlotMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.ar = [
      '/assets/images/slotMachine/2.jpg',
      '/assets/images/slotMachine/dog.jpg',
      '/assets/images/slotMachine/1.jpg',
      '/assets/images/slotMachine/pika.jpg',
      '/assets/images/slotMachine/3.jpg',
    ]
    this.br = []
    this.cr = []
    this.dr = []
    this.fr = []
    // this.er = []
    // this.runSlot = this.runSlot.bind(this)
  }

  componentDidMount() {
    let rec = document.querySelectorAll('.card')
    rec.forEach(val => {
      this.fr.push(val)
    })

    console.log(this.fr)
    // let hid = document.querySelector('.hidden')
  }

  runSlot = () => {
    let er = []

    this.ar.sort(() => {
      return Math.random() - 0.2
    })

    this.br = this.ar.slice()
    this.br = this.br.sort(() => {
      return Math.random() - 0.2
    })
    // console.log(br);

    this.cr = this.ar.slice()
    this.cr = this.cr.sort(() => {
      return Math.random() - 0.2
    })

    this.dr = this.ar.slice()
    this.dr = this.dr.sort(() => {
      return Math.random() - 0.2
    })

    er.push(this.ar)
    er.push(this.br)
    er.push(this.cr)
    er.push(this.dr)
    console.log(er)
    // console.log(fr);

    // 如何不同框框放不同的圖？

    // fr.forEach(function (val) {
    //     let c;
    // let c = `<img src = "${v}">`;
    for (let i = 0; i < 4; i++) {
      let x = er[i]
      let c = `<img src = "${x[4]}">`
      //   console.log(c)
      this.fr[i].innerHTML = c
    }

    // });
  }

  handler = count => () => {
    // let count = countNum
    console.log(count)

    //指定次數
    if (count > 0) {
      if (count === 0) return
      this.runSlot()
      //   count = count - 1
      window.setTimeout(() => {
        console.log(this.handler(count - 1))
        return this.handler(count - 1)()
      }, 10)
    }
    if (
      count === 0 &&
      this.ar[4] === this.br[4] &&
      this.br[4] === this.cr[4] &&
      this.cr[4] === this.dr[4]
    ) {
      // alert('你要請飲料囉，認命吧顆顆')
      let customer_information = this.props.member[0].customer_id
      console.log(customer_information)
      let coupon_type = 0
      console.log(this.ar[4])

      let couponString = this.ar[4].slice(27)
      if (couponString === 'pika.jpg') {
        coupon_type = 50
      } else if (couponString === 'dog.jpg') {
        coupon_type = 51
      } else if (couponString === '1.jpg') {
        coupon_type = 52
      } else {
        coupon_type = 53
      }
      console.log(coupon_type)
      //   hid.classList.add('display')
      this.props.dispatch(
        slotGetCoupon(customer_information, coupon_type, () => {
          let couponDolor = 0
          if (coupon_type === 50) {
            couponDolor = 1000
          } else if (coupon_type === 51) {
            couponDolor = 500
          } else if (coupon_type === 52) {
            couponDolor = 300
          } else {
            couponDolor = 100
          }
          swal({
            icon: 'success',
            // text: 'You clicked the button!',
            title: `恭喜您中獎，獲得${couponDolor}元禮卷一張!`,
            timer: 2000,
          })
        })
      )
    }
    // if (count == null) {
    //   foo()
    // }
  }

  render() {
    return (
      <>
        <div className="slotMachine">
          <div className="card_wrap">
            <div
              className="card"
              // style={{
              //   background: 'url(assets/images/slotMachine/apple.jpg) center',
              // }}
            ></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
          <div className="btn_wrap" onMouseUp={this.handler(100)}>
            <a className="slot_btn" type="button">
              START
            </a>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  member: state.loginReducer.member,
})

export default connect(mapStateToProps)(SlotMachine)
