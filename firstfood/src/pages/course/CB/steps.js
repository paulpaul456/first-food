import { testWordsByQuestionFirst } from './intent'

//開頭
export const greet = [
  {
    id: 'Greet',
    message: '歡迎來到 ～初食～',
    trigger: 'introduce',
  }, {
    id: 'introduce',
    message: '我是諮詢機器人，這裡有賣新鮮有機食材與提供代客煮服務喲，有任何問題都可以詢問我！',
    trigger: 'Waiting user input',
  },
  {
    id: 'sayHi',
    message: '哈嘍 您好，請問怎麼稱呼您呢？',
    trigger: 'Waiting user input for name',
  },
  {
    id: 'Waiting user input for name',
    user: true,
    trigger: 'user name sayHi',
  },
  {
    id: 'user name sayHi',
    message: '{previousValue} 您好，請問有什麼可以幫到你的',
    trigger: 'Waiting user input',
  },
]

//課程
export const course = [
  // {
  //   id: 'course',
  //   message: '請問你是需要預約烹飪課還是預定餐廳呢？',
  //   trigger: 'NoReservation option',
  // },
  {
    id: 'courseChoose',
    message: '請問你需要什麼課程呢，我們有異國料理、台式料理、主題料理～',
    trigger: 'ReservationCourse option',
  },
]

//預約
export const reservation = [
  {
    id: 'reservation',
    message: '請問你是需要預約烹飪課還是預定餐廳呢？',
    trigger: 'NoReservation option',
  },
  {
    id: 'reservationCourse',
    message: '請問你需要什麼課程呢，我們有異國料理、台式料理、主題料理～',
    trigger: 'ReservationCourse option',
  },
  {
    id: 'reservationRestaurant',
    message: '請問你需要什麼種類呢，我們有中式與西式的',
    trigger: 'ReservationRestaurant option',
  },
]
export const reservationOption = (props) => (
  [{
    id: 'ReservationCourse option',
    options: [
      {
        value: '異國料理',
        label: '異國料理',
        trigger: () => {
          props.history.push('/coursesContent/1')
          return 'Done'
        },
      },
      {
        value: '台式料理',
        label: '台式料理',
        trigger: () => {
          props.history.push('/coursesContent/22')
          return 'Done'
        },
      },
      {
        value: '主題料理',
        label: '主題料理',
        trigger: () => {
          props.history.push('/coursesContent/6')
          return 'Done'
        },
      },
    ],
  },
    {
      id: 'ReservationRestaurant option',
      options: [
        {
          value: '西式',
          label: '西式餐廳',
          trigger: () => {
            props.history.push('/map')
            return 'Done'
          },
        },
        {
          value: '中式餐廳',
          label: '中式餐廳',
          trigger: () => {
            props.history.push('/map')
            return 'Done'
          },
        },
      ],
    },
  ]
)
//會員
export const member = [
  {
    id: 'memberAccount',
    message: '你好，有關於個人帳戶資料，請妥善保管，將會跳轉至會員帳戶',
    trigger: 'memberAccount option',
  },
  {
    id: 'memberLogin',
    message: '將會跳轉至會員登入註冊頁面',
    trigger: 'memberLogin option',
  },
  {
    id: 'memberCollection',
    message: '將會跳轉至會員收藏頁面',
    trigger: 'memberCollection option',
  },
  {
    id: 'memberCart',
    message: '將會跳轉至會員購物車頁面',
    trigger: 'memberCart option',
  },
  {
    id: 'memberAddress',
    message: '將會跳轉至會員收件地址頁面',
    trigger: 'memberAddress option',
  },
  {
    id: 'memberOrder',
    message: '將會跳轉至會員訂單頁面',
    trigger: 'memberOrder option',
  },
  {
    id: 'memberCoupon',
    message: '將會跳轉至會員優惠券頁面',
    trigger: 'memberCoupon option',
  },
]
export const memberOption = (props) => {
  if(!props.isLogin){
    return [{
      id: 'memberAccount option',
      message: '你好，請先入再詢問有關會員的相關資訊',
      trigger: 'memberNoLog option',
    },{
      id: 'memberLogin option',
      options: [
        {
          value: true,
          label: '是',
          trigger: () => {
            props.showLoginBox()
            return 'Done'
          },
        },
        {
          value: 'false',
          label: '詢問其他',
          trigger: 'DoneContinue',
        },
      ],
    },
      {
      id: 'memberCollection option',
      message: '你好，請先入再詢問有關會員的相關資訊',
      trigger: 'memberNoLog option',
    },{
      id: 'memberCart option',
      message: '你好，請先入再詢問有關會員的相關資訊',
      trigger: 'memberNoLog option',
    },{
      id: 'memberAddress option',
      message: '你好，請先入再詢問有關會員的相關資訊',
      trigger: 'memberNoLog option',
    },{
      id: 'memberOrder option',
      message: '你好，請先入再詢問有關會員的相關資訊',
      trigger: 'memberNoLog option',
    },{
      id: 'memberCoupon option',
      message: '你好，請先入再詢問有關會員的相關資訊',
      trigger: 'memberNoLog option',
    }]
  }else{
    return [{
      id: 'memberAccount option',
      options: [
        {
          value: true,
          label: '是',
          trigger: () => {
            props.history.push('/member')
            return 'Done'
          },
        },
        {
          value: 'false',
          label: '詢問其他',
          trigger: 'DoneContinue',
        },
      ],
    },
      {
        id: 'memberLogin option',
        options: [
          {
            value: true,
            label: '是',
            trigger: 'Done'
          },
          {
            value: 'false',
            label: '詢問其他',
            trigger: 'DoneContinue',
          },
        ],
      },
      {
        id: 'memberCollection option',
        options: [
          {
            value: true,
            label: '是',
            trigger: () => {
              props.history.push('/member/collection')
              return 'Done'
            },
          },
          {
            value: 'false',
            label: '詢問其他',
            trigger: 'DoneContinue',
          },
        ],
      },
      {
        id: 'memberCart option',
        options: [
          {
            value: true,
            label: '是',
            trigger: () => {
              props.history.push('/cart')
              return 'Done'
            },
          },
          {
            value: 'false',
            label: '詢問其他',
            trigger: 'DoneContinue',
          },
        ],
      },
      {
        id: 'memberAddress option',
        options: [
          {
            value: true,
            label: '是',
            trigger: () => {
              props.history.push('/member/address')
              return 'Done'
            },
          },
          {
            value: 'false',
            label: '詢問其他',
            trigger: 'DoneContinue',
          },
        ],
      },
      {
        id: 'memberOrder option',
        options: [
          {
            value: true,
            label: '是',
            trigger: () => {
              props.history.push('/member/order')
              return 'Done'
            },
          },
          {
            value: 'false',
            label: '詢問其他',
            trigger: 'DoneContinue',
          },
        ],
      },
      {
        id: 'memberCoupon option',
        options: [
          {
            value: true,
            label: '是',
            trigger: () => {
              props.history.push('/member/discount')
              return 'Done'
            },
          },
          {
            value: 'false',
            label: '詢問其他',
            trigger: 'DoneContinue',
          },
        ],
      },
    ]
  }
}
export const memberNoLog = (props) => (
 [ {
    id: 'memberNoLog option',
    options: [
      {
        value: true,
        label: '是',
        trigger: () => {
          props.showLoginBox()
          return 'Done'
        },
      },
      {
        value: 'false',
        label: '等等再登入或註冊',
        trigger: 'DoneContinue',
      },
    ],
  }]
)

//優惠
export const preferential = [
  {
    id: 'preferential',
    message: '我們有提供拉霸遊戲機，有很高的機率可以中獎唷',
    trigger: 'preferential option',
  },
]
export const preferentialOption = (props) => (
  [{
    id: 'preferential option',
    options: [
      {
        value: true,
        label: '前往拉霸機',
        trigger: () => {
          props.history.push('/member/discount')
          return 'Done'
        },
      },
      {
        value: 'false',
        label: '繼續詢問',
        trigger:  'Waiting user input'
      },
    ],
  }
  ]
)

//沒資料
export const noData = [
  {
    id: 'NoUnderstand',
    message: '不好意思 我聽不太懂你說的{previousValue} 可以試試 "想買西瓜" "有什麼課程" "會員註冊"',
    trigger: 'Waiting user input',
  },
  {
    id: 'NoData',
    message: '不好意思 我們目前沒有提供{previousValue} !! 可以點選以下連結查看目前有的商品喲',
    trigger: 'NoData option',
  },
  {
    id: 'NoReservation',
    message: '不好意思 我們目前沒有提供您要的預約{previousValue}項目 !! 可以點選以下連結查看目前有的預約喲',
    trigger: 'NoReservation option',
  },
  {
    id: 'NoMember',
    message: '不好意思 無法找到你需要的會員服務',
    trigger: 'DoneContinue',
  },
]
export const noDataOption = (props) => (
  [{
    id: 'NoReservation option',
    options: [
      {
        value: true,
        label: '課程預約',
        trigger: () => {
          props.history.push('/coursesContent')
          return 'Done'
        },
      },
      {
        value: 'false',
        label: '餐廳預訂',
        trigger: () => {
          props.history.push('/map')
          return 'Done'
        },
      },
    ],
  },
    {
      id: 'NoData option',
      options: [
        {
          value: true,
          label: '新鮮有機食材',
          trigger: () => {
            props.history.push('/product')
            return 'Done'
          },
        },
        {
          value: 'false',
          label: '美味餐廳挑選',
          trigger: () => {
            props.history.push('/map')
            return 'Done'
          },
        },
        {
          value: '繼續詢問',
          label: '繼續詢問',
          trigger: 'Waiting user input'
        },
      ],
    },
  ]
)
//結尾
export const done = [
  {
    id: 'Done',
    message: '歡迎隨時詢問我!!',
    end: true,
  },
  {
    id: 'DoneContinue',
    message: '歡迎隨時詢問我!!',
    trigger: 'Waiting user input',
  },
]



