import { encodeUnicode } from './encodeUnicode'

//中文轉字元
let testUnicode= (arr,val)=>{
  return arr.some(e=> encodeUnicode(e).test(val) )
}

//第一階段文字篩選
let productKey = ['買','賣','商品','產品']
let preferentialKey = ['優惠','促銷','好康']
let restaurantKey = ['餐廳','附近','商品','產品']
let reservationKey = ['預約','時段','預定','訂位','預訂']
let memberKey = ['會員','註冊','登入','忘記','帳號','密碼','帳戶','收藏','愛心','最愛','購物車','購物籃','購物','車','籃','訂單']
let logisticsKey = ['包裹','運送','寄']
let courseKey = ['上課','教學','做菜','烹飪','學','教','課程','課']
let greetKey = ['嗨','哈嘍','哈樓','哈摟','嘿','你好','您好','妳好','hello','hi']
export const testWordsByQuestionFirst = (value,steps,props)=>{
  console.log('testWordsByQuestionFirst',props)
  switch(true){
    case testUnicode(productKey,value):
      console.log('符合買賣商品')
      return 'Yes data'
      break;
    case testUnicode(preferentialKey,value):
      console.log('符合優惠')
      return 'preferential'
      break;
    case testUnicode(reservationKey,value):
      console.log('符合預約')
      return testWordsByReservation(value,steps)
      break;
    case testUnicode(restaurantKey,value):
      console.log('符合餐廳')
      return 'Yes data'
      break;
    case testUnicode(memberKey,value):
      console.log('符合會員')
      return testWordsByMember(value,steps,props)
      break;
    case testUnicode(logisticsKey,value):
      console.log('符合物流')
      return 'Yes data'
      break;
    case testUnicode(courseKey,value):
      console.log('符合課程')
      return 'courseChoose'
      break;
    case testUnicode(greetKey,value):
      console.log('符合打招呼')
      return 'sayHi'
      break;
    default:
      console.log('沒有符合')
      return 'NoUnderstand'
  }}

  //預約
let reservationSecondKey1 = ['課程','上課','烹飪','課']
let reservationSecondKey2 = ['餐廳','上館子']
export const testWordsByReservation = (value,steps)=>{
  switch(true){
    case testUnicode(reservationSecondKey1,value):
      console.log('符合預約課程')
      return 'reservationCourse'
      break;
    case testUnicode(reservationSecondKey2,value):
      console.log('符合預約餐廳')
      return 'reservationRestaurant'
      break;
    case testUnicode(reservationKey,value):
      console.log('符合預約2')
      return 'reservation'
      break;
    default:
      console.log('沒有符合預約')
      return 'NoReservation'
  }}

  //會員
let memberSecondKey1 = ['忘記','帳號','密碼','帳戶','個人','資料']
let memberSecondKey2 = ['註冊','登入']
let memberSecondKey3 = ['收藏','愛心','最愛']
let memberSecondKey4 = ['購物車','購物籃','購物','車','籃']
let memberSecondKey5 = ['地址','收件']
let memberSecondKey6 = ['訂單']
let memberSecondKey7 = ['優惠券', '券', '折扣']
export const testWordsByMember = (value,steps,props)=>{

    switch(true){
      case testUnicode(memberSecondKey1,value):
        console.log('符合帳戶')
        return `memberAccount ${props.isLogin?'':'option'}`
        break;
      case testUnicode(memberSecondKey2,value):
        console.log('符合登入註冊')
        return `memberLogin`
        break;
      case testUnicode(memberSecondKey3,value):
        console.log('符合收藏')
        return `memberCollection${props.isLogin?'':' option'}`
        break;
      case testUnicode(memberSecondKey4,value):
        console.log('符合購物車')
        return `memberCart${props.isLogin?'':' option'}`
        break;
      case testUnicode(memberSecondKey5,value):
        console.log('符合地址')
        return `memberAddress${props.isLogin?'':' option'}`
        break;
      case testUnicode(memberSecondKey6,value):
        console.log('符合訂單資訊')
        return `memberOrder${props.isLogin?'':' option'}`
        break;
      case testUnicode(memberSecondKey7,value):
        console.log('符合優惠券')
        return `memberCoupon${props.isLogin?'':' option'}`
        break;
      default:
        console.log('沒有符合會員2')
        return 'NoMember'
    }
}


