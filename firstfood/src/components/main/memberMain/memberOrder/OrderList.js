import React, { useEffect, useState } from 'react'
import { Card, Accordion } from 'react-bootstrap'

const OrderList = props => {
  //設置 state
  const [name, setName] = useState('default value')

  //設置 lifecycle 注意update觸發順序
  useEffect(
    () => {
      // componentDidMount 及 componentDidUpdate 更新時順序2
      console.log(`更新後的 State ${name}`)

      // componentDidUpdate 及 componentWillUnmount 更新時順序1
      return () => {
        console.log(`更新前的 State ${name}`)
      }
    }
    // , [使用方框放置第二參數]
  )

  //改變 state
  const changeListName = e => {
    setName(e.target.value)
    console.log(name)
  }

  //渲染
  return (
    <>
      <div className="">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="bigtittle clickmeplz"
            >
              <div className="sm-12">
                <div className="d-flex justify-content-around">
                  <div className="d-sm-flex w50">
                    <div className="pr-3">訂單編號</div>
                    <div className="">468174874</div>
                  </div>
                  <div className="btn1 w25 d-flex align-items-center justify-content-center">
                    點我更多
                  </div>
                </div>
              </div>
              <div className="sm-0">
                <div className="d-flex justify-content-between borbot py-2">
                  <div className="d-flex w33">
                    <div className="pr-3 ">訂單編號</div>
                    <div>9418</div>{' '}
                  </div>
                  <div className="d-flex w33">
                    <div className="pr-3">實付金額</div>
                    <div>9NT$</div>{' '}
                  </div>
                  <div className="d-flex w33">
                    <div className="pr-3">狀態</div>
                    <div>已完成</div>{' '}
                  </div>
                  <div></div>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <div className="d-flex w33">
                    <div className="pr-3">訂單成立</div>
                    <div>2019-12-12</div>{' '}
                  </div>
                  <div className="d-flex w33">
                    <div className="pr-3">運費</div>
                    <div>9NT$</div>{' '}
                  </div>
                  <div className="d-flex w33">
                    <div className="pr-3">??</div>
                    <div>????</div>{' '}
                  </div>
                  <div></div>
                </div>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div>
                  <div className="d-flex w50">
                    <div className="pr-3">訂單編號</div>
                    <div className="">132321</div>
                  </div>
                  <div className="d-flex justify-content-around title py-2">
                    <div>商品</div>
                    <div>價格</div>
                    <div>數量</div>
                    <div>小記</div>
                  </div>
                  <div className="d-flex justify-content-around borbot">
                    <div className="w25">天天樂西瓜1箱</div>
                    <div className="w25">NT$200</div>
                    <div className="w25">1</div>
                    <div className="w25">NT$200</div>
                  </div>
                  <div className="d-flex justify-content-around borbot">
                    <div className="w25">艾蜜莉義大利麵手作教學</div>
                    <div className="w25">NT$800</div>
                    <div className="w25">2</div>
                    <div className="w25">NT1600</div>
                  </div>
                  <div className="d-flex justify-content-around borbot">
                    <div className="w25">鼎泰豐素餃子(更換南瓜)</div>
                    <div className="w25">NT$250</div>
                    <div className="w25">1</div>
                    <div className="w25">NT$250</div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="w25">運費</div>
                    <div className="w25">NT$100</div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="w25">總金額</div>
                    <div className="w25">NT$2150</div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="bigtittle clickmeplz"
            >
              <div className="sm-12">
                <div className="d-flex justify-content-around">
                  <div className="d-sm-flex w50">
                    <div className="pr-3">訂單編號</div>
                    <div className="">468174874</div>
                  </div>
                  <div className="btn1 w25 d-flex align-items-center justify-content-center">
                    點我更多
                  </div>
                </div>
              </div>
              <div className="sm-0">
                <div className="d-flex justify-content-between borbot py-2">
                  <div className="d-flex w33">
                    <div className="pr-3 ">訂單編號</div>
                    <div>9418</div>{' '}
                  </div>
                  <div className="d-flex w33">
                    <div className="pr-3">實付金額</div>
                    <div>9NT$</div>{' '}
                  </div>
                  <div className="d-flex w33">
                    <div className="pr-3">狀態</div>
                    <div>已完成</div>{' '}
                  </div>
                  <div></div>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <div className="d-flex w33">
                    <div className="pr-3">訂單成立</div>
                    <div>2019-12-12</div>{' '}
                  </div>
                  <div className="d-flex w33">
                    <div className="pr-3">運費</div>
                    <div>9NT$</div>{' '}
                  </div>
                  <div className="d-flex w33">
                    <div className="pr-3">??</div>
                    <div>????</div>{' '}
                  </div>
                  <div></div>
                </div>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div>
                  <div className="d-flex w50">
                    <div className="pr-3">訂單編號</div>
                    <div className="">132321</div>
                  </div>
                  <div className="d-flex justify-content-around title py-2">
                    <div>商品</div>
                    <div>價格</div>
                    <div>數量</div>
                    <div>小記</div>
                  </div>
                  <div className="d-flex justify-content-around borbot">
                    <div className="w25">天天樂西瓜1箱</div>
                    <div className="w25">NT$200</div>
                    <div className="w25">1</div>
                    <div className="w25">NT$200</div>
                  </div>
                  <div className="d-flex justify-content-around borbot">
                    <div className="w25">艾蜜莉義大利麵手作教學</div>
                    <div className="w25">NT$800</div>
                    <div className="w25">2</div>
                    <div className="w25">NT1600</div>
                  </div>
                  <div className="d-flex justify-content-around borbot">
                    <div className="w25">鼎泰豐素餃子(更換南瓜)</div>
                    <div className="w25">NT$250</div>
                    <div className="w25">1</div>
                    <div className="w25">NT$250</div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="w25">運費</div>
                    <div className="w25">NT$100</div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="w25">總金額</div>
                    <div className="w25">NT$2150</div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Click me222222!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Click me2222!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </>
  )
}

export default OrderList
