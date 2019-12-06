import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'

import HeaderFooter from './container/HeaderFooter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadFarmerProductAsync } from '../action'

const FarmerProduct = props => {
  useEffect(() => {
    window.scrollTo(0, 0)
    props.loadFarmerProductAsync()
    return () => {}
  }, [])
  console.log(props)
  return (
    <>
      <HeaderFooter location="市集">
        <h1>小農市集</h1>
        <div className="row justify-content-center">
          {props.product.map(item => (
            <Card key={item.sid} className={'m-1'} style={{ width: '14rem' }}>
              <Card.Img variant="top" src="./assets/images/product1.jpg" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
                <Button variant="primary">{item.price}</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </HeaderFooter>
    </>
  )
}
// 綁定props.todos <=> store.todos
const mapStateToProps = store => ({ product: store.FarmerProductReducer })
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (payload)=>{ dispatch( addTodo(payload) ) }
//   }
// }
const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadFarmerProductAsync }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FarmerProduct)
