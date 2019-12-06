import React, { useEffect, useState, Component } from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import { loadhotFmGoodsAsync } from '../../../action/index'

import Slider from 'react-slick'
// import { baseUrl } from "./config";

class HomeProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch(loadhotFmGoodsAsync())
  }

  render() {
    if (!this.props.hothot) {
      // console.log('this.props.product')
      return <>資料載入中</>
    }

    // console.log('aaaaaaaaaaaaaaa')
    // console.log(this.props.hothot)

    let h1n1 = []
    for (let i = 0; i < 6; i++) {
      h1n1.push(this.props.hothot[i])
      //  h1n1.push(`<h2>${this.props.hothot[i]}</h2>`)
    }
    // console.log(h1n1)
    // md以上顯示的slick
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 4,
      slidesToShow: 4,
    }
    // md以下顯示的slick
    let h2n2 = []
    h2n2.push(
      h1n1.map(value => {
        return JSON.parse(value.picture)[0]
      })
    )
    console.log(h2n2[0])

    // let dad=['fish (66)','fish (67)','fish (68)','fish (69)','fish (70)']
    const mdsettings = {
      customPaging: function(i) {
        return (
          <div className="m-3 container">
            <a className="bbbbbblockmakeup">
              {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
              <img
                src={`/assets/images/goods/${h2n2[0][i]}`}
                width="50px"
                height="50px"
                className=""
              />

              {/* <img src="/assets/images/product2.jpg" width="50px"/>
            <img src="/assets/images/product3.jpg" width="50px"/>
            <img src="/assets/images/product3.jpg" width="50px"/> */}
            </a>
          </div>
        )
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <>
        {/* {console.log('aaaaaaaaaaaaaaa')}
    {console.log(this.props.hothot)} */}
        <div id="product" className="container">
          {/* <div><div>{h1n1.map(value  => {
      return <h2>{value.name}</h2>
      })}</div></div> */}

          {/* {this.props.hothot.map((h,ind)=>{return(<h1 key={ind}>{JSON.parse(h.picture)[0]}</h1>)})} */}
          <div className="title row position-relative align-content-center">
            <div className="rhombus"></div>
            <h4 className="position-absolute row">
              <i className="fas fa-fish align-self-center mx-2"></i>
              暢銷榜
            </h4>
            <div className="dashLine align-self-center"></div>
            <div className="rhombus"></div>
          </div>
          {/* <div className="products row">
          <div className="pickup position-relative col-md-3 p-0">
            <div className="middleLine position-absolute"></div>
            <div className="middleLine position-absolute"></div>
            <h4 className="text-center">PICK UP</h4>
            <div className="bottomLine"></div>
            <p className="m-0 text-center">FIRST FOOD ONLINESHOP</p>
          </div>
          <div className="product col-md-3">
            <NavLink key={6} to={'/product'}>
              <img src="./assets/images/product1.jpg" alt="" />
              <p className="m-0 text-center">
                有機三星米
                <br />
                250元
              </p>
            </NavLink>
          </div>
          <div className="product col-md-3">
            <NavLink key={7} to={'/product'}>
              <img src="./assets/images/product2.jpg" alt="" />
              <p className="m-0 text-center">
                野生李梅醬
                <br />
                200元
              </p>
            </NavLink>
          </div>
          <div className="product col-md-3">
            <NavLink key={8} to={'/product'}>
              <img src="./assets/images/product3.jpg" alt="" />
              <p className="m-0 text-center">
                本土黑麻油
                <br />
                500元
              </p>
            </NavLink>
          </div>
        </div> */}

          <div className="homepagproductslider">
            <div className="sm-oo">
              <Slider {...mdsettings}>
                {h1n1.map((v, ind) => {
                  return (
                    <div className="product imgcenterboxfm m-3" key={ind}>
                      <NavLink key={ind} to={'/product'}>
                        <div className="phoimgfm2">
                          <img
                            src={
                              '/assets/images/goods/' + JSON.parse(v.picture)[0]
                            }
                            alt=""
                      
                          />
                        </div>

                        <p className="m-0 text-center txts16 txtw800 mt-2">
                          {v.name}
                          <br />
                          <div className="txtdanger txts16 txtw800">
                            {v.price}元
                          </div>
                        </p>
                        <p className="m-0 text-center">
                          <br />
                          <i className="fas fa-crown"></i>
                          {v.hot * 10}次
                        </p>
                      </NavLink>
                    </div>
                  )
                })}
              </Slider>
            </div>
            <div className="sm-xx">
              <Slider {...settings}>
                <div className="products px15">
                  <div className="pickup position-relative p-0 wcolwcol3">
                    <div className="middleLine position-absolute"></div>
                    <div className="middleLine position-absolute"></div>
                    <div className="topstone"></div>
                    <h4 className="text-center">PICK UP</h4>
                    <div className="bottomLine"></div>
                    <p className="m-0 text-center">FIRST FOOD ONLINESHOP</p>
                  </div>
                </div>
                {h1n1.map((value, ind) => {
                  return (
                    <div className="px15" key={value.sid}>
                      {/* <div className="crowntit">
                        <i className="fas fa-crown fa-3x mb-2">
                          <span className="topnum">{ind + 1}</span>
                        </i>
                      </div> */}
                      <NavLink
                        key={value.sid}
                        to={'/product/good/' + value.sid}
                      >
                        <div className="phoimgfm">
                          <img
                            src={
                              '/assets/images/goods/' +
                              JSON.parse(value.picture)[0]
                            }
                            alt=""
                          />
                        </div>

                        <p className="m-0 text-center txts16 txtw800 mt-2">
                          {value.name}
                          <br />
                          <div className="txtdanger txts16 txtw800">
                            {value.price}元
                          </div>
                        </p>
                        <p className="m-0 text-center">
                          <br />
                          <i className="fas fa-crown"></i>
                          {value.hot * 10}次
                        </p>
                      </NavLink>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
        {/* <div id="product">
        <div className="title row position-relative align-content-center">
          <div className="rhombus"></div>
          <h4 className="position-absolute row">
            小農市集<i className="fas fa-fish align-self-center"></i>
          </h4>
          <div className="dashLine align-self-center"></div>
          <div className="rhombus"></div>
        </div>
        <div className="products row">
          <div className="pickup position-relative col-md-3 p-0">
            <div className="middleLine position-absolute"></div>
            <div className="middleLine position-absolute"></div>
            <h4 className="text-center">PICK UP</h4>
            <div className="bottomLine"></div>
            <p className="m-0 text-center">FIRST FOOD ONLINESHOP</p>
          </div>
          <div className="product col-md-3">
            <NavLink key={6} to={'/product'}>
              <img src="./assets/images/product1.jpg" alt="" />
              <p className="m-0 text-center">
                有機三星米
                <br />
                250元
              </p>
            </NavLink>
          </div>
          <div className="product col-md-3">
            <NavLink key={7} to={'/product'}>
              <img src="./assets/images/product2.jpg" alt="" />
              <p className="m-0 text-center">
                野生李梅醬
                <br />
                200元
              </p>
            </NavLink>
          </div>
          <div className="product col-md-3">
            <NavLink key={8} to={'/product'}>
              <img src="./assets/images/product3.jpg" alt="" />
              <p className="m-0 text-center">
                本土黑麻油
                <br />
                500元
              </p>
            </NavLink>
          </div>
        </div>
      </div> */}
      </>
    )
  }
}

const mapStateToProps = store => {
  if (!store.FarmerProductReducer.hotdata) return {}
  return {
    hothot: store.FarmerProductReducer.hotdata,
  }
}
export default connect(mapStateToProps)(HomeProduct)
