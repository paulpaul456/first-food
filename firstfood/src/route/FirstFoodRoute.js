import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from '../pages/Home'
import Restaurant from '../pages/Restaurant'
import FarmerProduct from '../pages/FarmerProduct'
import Dinnerlist from '../pages/Dinnerlist'
import Dinner from '../pages/Dinner'
import Choose from '../pages/Choose'
import OrderList from '../components/main/dinnerMain/OrderList'
import Forum from '../pages/forum/Forum'
import Article from '../pages/forum/Article'
import Article_Content from '../pages/forum/Article_Content'
import Post_article from '../pages/forum/Post_article.js'
import Class from '../pages/Class'
import RestaurantMap from '../pages/Map'
// import Member from './pages/Member'
import Test from '../test/test'
// 以下為購物車
import Cart from '../pages/Cart'
import BuyinforFinal from '../components/main/cartMain/buyinformation/BuyinforFinal'
import CouponFinal from '../components/main/cartMain/mycoupon/CouponFinal'
import LastcheckFinal from '../components/main/cartMain/mylastcheck/LastcheckFinal'
import CardFinal from '../components/main/cartMain/myCard/CardFinal'
import EndingFinal from '../components/main/cartMain/myEnding/EndingFinal'
import BuystepFinal from '../components/main/cartMain/buystep/BuystepFinal'
// courses Route
import CourseRoute from './CourseRoute'

import MemberLoginPage from '../pages/member/MemberLoginPage'
import MemberFrontPage from '../pages/member/MemberFrontPage'
import MemberDetailPage from '../pages/member/MemberDetailPage'
import MemberPasswordPage from '../pages/member/MemberPasswordPage'
import MemberAddressPage from '../pages/member/MemberAddressPage'
import MemberDiscountPage from '../pages/member/MemberDiscountPage'
import MemberCollectionPage from '../pages/member/MemberCollectionPage'
import MemberOrder from '../pages/member/MemberOrder'
import MemberCost from '../pages/member/MemberCost'
import Member from '../pages/Member'
import { wrap } from 'module'
import Goods from '../pages/Goods'
import LightBox from '../components/main/FarmerProductDetailsMain/LightBox'
import GoodsList from '../pages/GoodsList'
import Courses from '../pages/course/Courses'
import Mobile from '../components/mobile/Mobile'
import MemberGameCenter from '../pages/member/MemberGameCenter'
import WelcomePage from '../pages/member/WelcomePage'

const FirstFoodRoute = props => {
  const loginShow = props.store.loginReducer.showLoginBox
  return (
    <>
      {/* <WelcomePage /> */}
      <Router>
        {loginShow === 'none' ? <></> : <MemberLoginPage />}
        <Mobile />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/restaurant/:id?/:name?" component={Restaurant} />
          <Route exact path="/product/:select?" component={FarmerProduct} />
          <Route exact path="/product/good/:id" component={Goods} />
          <Route exact path="/dinnerlist/:id/:name?" component={Dinnerlist} />
          <Route exact path="/restaurant/:id" component={Restaurant} />
          <Route exact path="/dinnerlist/:id" component={Dinnerlist} />
          <Route exact path="/dinnerlist/:id/:dinner_id" component={Dinner} />
          <Route
            exact
            path="/dinnerlist/:id/:name?/:dinner_id"
            component={Dinner}
          />
          <Route
            exact
            path="/dinnerlist/:restaurant_id/:name/:dinner_id/:choose"
            component={Choose}
          />
          <Route exact path="/my_dinner_order" component={OrderList} />
          {/*<Route exact path="/courses" component={Courses} />*/}
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/map/:name?" component={RestaurantMap} />
          <Route exact path="/article/:classId" component={Article} />
          <Route
            exact
            path="/article_content/:art_id"
            component={Article_Content}
          />
          <Route exact path="/post_article/:classId" component={Post_article} />
          <Route exact path="/map" component={RestaurantMap} />
          <Route exact path="/member" component={MemberFrontPage} />
          {/* <Route exact path="/member/login" component={MemberLoginPage} /> */}
          <Route exact path="/member/detail" component={MemberDetailPage} />
          <Route exact path="/member/gameCenter" component={MemberGameCenter} />
          <Route exact path="/member/password" component={MemberPasswordPage} />
          <Route exact path="/member/address" component={MemberAddressPage} />
          <Route exact path="/member/discount" component={MemberDiscountPage} />
          <Route exact path="/member/order" component={MemberOrder} />
          <Route exact path="/member/order/cost" component={MemberCost} />
          <Route exact path="/test" component={LightBox} />
          <Route
            exact
            path="/member/collection"
            component={MemberCollectionPage}
          />

          <Route exact path="/cart" component={Cart} />
          <Route exact path="/Buyinfor" component={BuyinforFinal} />
          <Route exact path="/Coupon" component={CouponFinal} />
          <Route exact path="/Lastcheck" component={LastcheckFinal} />
          <Route exact path="/Card" component={CardFinal} />
          <Route exact path="/Ending" component={EndingFinal} />
          <Route exact path="/Buystep" component={BuystepFinal} />
          {/* 以上為MYCART */}
          <CourseRoute />

          <Route exact path="/test" component={Test} />
          {/*<Route path="/news" component={ () => <News userStatus={userStatus} /> }/>*/}
          {/*<Route path="/contact" render={(props) =><Contact {...props} userStatus={userStatus}/>}/>*/}
        </Switch>
      </Router>
      {/* </div> */}
    </>
  )
}

const mapStateToProps = store => ({ store: store })
export default connect(mapStateToProps)(FirstFoodRoute)
