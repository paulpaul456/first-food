import React, { Component } from 'react'
import Slider from 'react-slick'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadFMProductRecommendByClassAsync, } from '../../../action/index'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Slickcom extends Component {
  constructor(props) {
    super(props)

  }
  
  componentDidMount() {
      console.log('this.props.product.class_sid')
      console.log(this.props.product.class_sid)
   
//    this.props.dispatch(loadFMProductRecommendByClassAsync(this.props.product.class_sid))
  }
  
  render() {
    if (!this.props.ggoods) {
        return <>資料載入中</>
      }

      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return (
        <>  
        <div>
        {/* <h2>為啥壞掉</h2> */}
        {console.log(this.props)}
        {console.log(this.props.pa)}
        {console.log(this.props.pa.match.params.id)}
        {console.log(this.props.product.class_sid)}
        {console.log(this.props.ggoods)}
        {/* {this.props.match.params.id} */}

        <div className="iamslickonrow">
        <div className="rowcar d-flex align-items-center my-5"><h2>相關推薦商品</h2> <div className="mx-3"><img src='/assets/images/truck.png'  alt="" width="41px" height="19px"/></div> </div>
        <Slider {...settings}>
        {this.props.ggoods.map((value,ind)=>{return(
            <div className="slickrowfm" key={value.sid}><NavLink
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
                      </NavLink></div>
                      )})}
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
      </div>
      <div className="iamalinebot"></div>
      </>
      
    
    )
  }
}

const mapStateToProps = store => {
  if (!store.FarmerProductReducer) return {
    isLogin: store.loginReducer.isLogin,
    // product: '',
  }
  return {
    // product: store.FarmerProductReducer.data[0],
    // comment: store.FarmerProductReducer.data[1],
    // member: store.loginReducer.member,
    isLogin: store.loginReducer.isLogin,
    product: store.FarmerProductReducer.fmiddata.fmid[0],
    ggoods: store.GoodsFmReducer.recommendfmdata
    // member: store.loginReducer.member,

  }
}
export default connect(mapStateToProps)(Slickcom)
