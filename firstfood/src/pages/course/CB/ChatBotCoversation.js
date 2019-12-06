import React from 'react'
import { course, greet, noData, noDataOption, done, reservation, reservationOption,member,memberOption,memberNoLog,preferential,preferentialOption } from './steps'
import { ChatBotFetch } from './ChatBotFetch'
import { testWordsByQuestionFirst } from './intent'


export const stepsTest = (props) => {
  return [
    ...greet,
    {
      id: 'Waiting user input',
      user: true,
      placeholder: 'ex. 想買西瓜 要預訂餐廳',
      trigger: ({value,steps})=>testWordsByQuestionFirst(value,steps,props),
    },
    // {
    //   id: 'Asking options to eat',
    //   replace:true,
    //   component: <ChatBotFetch />,
    //   waitAction: true,
    // message: 'Hi {previousValue}, nice to meet you!',
    // trigger: 'Done',
    // },
    {
      id: 'Yes data',
      message: '你好 我們有以下選擇供你前往',
      trigger: 'data option',
    },
    {
      id: 'data option',
      options: [
        {
          value: true,
          label: '有機食材',
          trigger: () => {
            console.log(props)
            props.history.push('/product')
            return 'Done'
          },
        },
        {
          value: 'false',
          label: '烹煮菜色',
          trigger: () => {
            console.log(props)
            props.history.push('/coursesList/dinner')
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

      ...member,
      ...memberOption(props),
    ...memberNoLog(props),

    ...preferential,
    ...preferentialOption(props),

    ...course,

    ...reservation,
    ...reservationOption(props),

    ...noData,
    ...noDataOption(props),

    ...done,
  ]
}

export const steps = [
  {
    id: 'Greet',
    message: '歡迎來到 ～初食～',
    trigger: 'Ask Name',
  },
  {
    id: 'Ask Name',
    message: '請問怎麼稱呼您呢',
    trigger: 'Waiting user input for name',
  },
  {
    id: 'Waiting user input for name',
    user: true,
    trigger: 'Asking options to eat',
  },
  {
    id: 'Asking options to eat',
    message: ' {previousValue} 您好, 想找尋什麼呢！',
    trigger: 'Waiting user input for product',
  },
  {
    id: 'Waiting user input for product',
    user: true,
    trigger: 'Displaying options to eat',
  },
  {
    id: 'Displaying options to eat',
    options: [
      {
        value: 'pizza',
        label: '大紅西瓜',
        trigger: 'Asking for deal with waterMellon',
      },
      {
        value: 'burger',
        label: '小玉西瓜',
        trigger: 'waterMellon Not available',
      },
    ],
  },
  {
    id: 'waterMellon Not available',
    message: '不好意思，我們西瓜目前賣光了，給你些其他選項',
    trigger: 'Asking for waterMellon after other',
  },
  {
    id: 'Asking for waterMellon after other',
    options: [
      {
        value: true,
        label: 'Yes',
        trigger: 'Done',
      },
      {
        value: 'false',
        label: 'No',
        trigger: 'Done',
      },
    ],
  },
  {
    id: 'Asking for deal with waterMellon',
    message: '你需要做成果汁嗎 還是做成料理',
    trigger: 'deal waterMellon options',
  },
  {
    id: 'deal waterMellon options',
    options: [
      {
        value: true,
        label: '果汁',
        trigger: () => {
          // this.props.eventHandler('tomato')
          alert('跳去果汁頁面')
          return 'Done'
        },
      },
      {
        value: 'false',
        label: '料理',
        trigger: () => {
          // this.props.eventHandler('tomato')
          alert('跳去菜色頁面')
          return 'Done'
        },
      },
    ],
  },
  {
    id: 'Done',
    message: 'Have a great day !!',
    end: true,
  },
]

const chatBotFetch = (val, steps) => {
  let result = 'hi'
  let test = async () => {

    const response = await fetch(
      `http://localhost:6003/api/collection/courses/1`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      },
    )

    // if (!response.ok) throw new Error(response.statusText)

    const data = await response.json()
    alert('data', data)
  }
  test()
  console.log(val, steps)
  return result
}
