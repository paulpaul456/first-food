import { func } from "prop-types"

function getbuydata() {
  //取得最初史資料
  return function(dispatch) {
    let obj = [{}]
    dispatch({ type: 'getbuyinfor', payload: obj })
  }
}

function changeText(obj, item, value) {
  //改變欄位的值
  let newitem = item //設定要改的項目
  return function(dispatch) {
    obj[newitem] = value
    let data = obj
    dispatch({ type: 'update', payload: data })
  }
}

function equalbuyer(obj) {
  //同訂購人資料

  return function(dispatch) {
    dispatch({ type: 'equalbuyer', payload: obj })
  }
}
function getMember(member){
  return function(dispatch) {
    dispatch({ type: 'getmember', payload: member })
  }
}

function deleteMember(){
  let obj={
    name:'',
    email:'',
    mobile:'',
    address:'',
  }
  return function(dispatch) {
    dispatch({ type: 'deletemember', payload: obj })
  }
}

function deleteWithBuyer(){
  let obj={
    buyer:'',
    buyer_phone:'',
    buyer_mobile:'',
    buyer_email:'',
  }
  return function(dispatch) {
    dispatch({ type: 'deletewithbuyer', payload: obj })
  }
}

export { getbuydata, changeText, equalbuyer, getMember, deleteMember, deleteWithBuyer}
