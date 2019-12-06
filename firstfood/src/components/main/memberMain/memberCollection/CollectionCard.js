import React from 'react'
import { connect } from 'react-redux'
import {
  getFarmerProductCollection,
  getDinnerProductCollection,
  collectionGetCourse,
  getMemberCollection,
  getCourseCollection,
  getDinnerCollection,
  loadDinnerByIDAsyncMember,
} from '../../../../action/index'
class CollectionCard extends React.Component {
  handleClick = event => {
    let name = event.currentTarget.getAttribute('name')
    console.log(name)
    if (name === '食材') {
      console.log('hi 食材')
      // this.props.dispatch(getFarmerProductCollection(1))
      this.props.dispatch(getMemberCollection(1))
    } else if (name === '課程') {
      console.log('hi 課程')
      this.props.dispatch(getCourseCollection(1))
    } else if (name === '菜色') {
      console.log('hi 菜色')
      // this.props.dispatch(getDinnerCollection(1))
      this.props.dispatch(loadDinnerByIDAsyncMember(1))
    } else if (name === '討論區') {
    }
  }

  render() {
    // let F_P_Collection = []
    // let F_P_ID = []
    // if (this.props && this.props.farmerProductCollection) {
    //   // console.log(this.props.farmerProductCollection.collection.collection)
    //   F_P_Collection = this.props.farmerProductCollection.collection.collection
    //   // console.log(f_P_Collection)
    //   F_P_ID = F_P_Collection.map(item => {
    //     return item.farmer_product
    //   })
    //   console.log(F_P_ID)
    // }
    if (this.props && this.props.farmerProduct) {
      console.log(this.props.farmerProduct)
      // let allFarmerProductArray = []
      // let farmerProductObj = this.props.farmerProduct.data[0]
      // allFarmerProductArray.push(farmerProductObj)
      // // console.log(allFarmerProductArray)
      return (
        <>
          <div
            name={this.props.title}
            onClick={this.handleClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
              margin: '30px 20px',
              background: 'white',
            }}
          >
            <img
              src={this.props.image}
              alt=""
              style={{
                marginBottom: '-35px',
              }}
            />
            <p
              style={{
                color: '#c87373',
                fontWeight: 700,
                fontFamily: 'YuGothicUI-Bold, Yu Gothic UI',
                fontSize: '20px',
                margin: '0 20px',
              }}
            >
              {this.props.title}
            </p>
          </div>
          {/* {F_P_Collection.map(value => {
            console.log(value)
          })} */}
          {/* {this.props.farmerProduct.data.map(value => {
            return <div>{value.name}</div>
          })} */}
        </>
      )
    } else {
      return (
        <>
          <div
            name={this.props.title}
            onClick={this.handleClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
              margin: '30px 20px',
              background: 'white',
            }}
          >
            <img
              src={this.props.image}
              alt=""
              style={{
                marginBottom: '-35px',
              }}
            />
            <p
              style={{
                color: '#c87373',
                fontWeight: 700,
                fontFamily: 'YuGothicUI-Bold, Yu Gothic UI',
                fontSize: '20px',
                margin: '0 20px',
              }}
            >
              {this.props.title}
            </p>
          </div>
        </>
      )
    }
    // return (
    //   <>
    //     <div
    //       name={this.props.title}
    //       onClick={this.handleClick}
    //       style={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'space-around',
    //         boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
    //         overflow: 'hidden',
    //         margin: '30px 20px',
    //         background: 'white',
    //       }}
    //     >
    //       <img
    //         src={this.props.image}
    //         alt=""
    //         style={{
    //           marginBottom: '-35px',
    //         }}
    //       />
    //       <p
    //         style={{
    //           color: '#c87373',
    //           fontWeight: 700,
    //           fontFamily: 'YuGothicUI-Bold, Yu Gothic UI',
    //           fontSize: '20px',
    //           margin: '0 20px',
    //         }}
    //       >
    //         {this.props.title}
    //       </p>
    //     </div>
    //     {/* {F_P_Collection.map(value => {
    //       console.log(value)
    //     })} */}
    //   </>
    // )
  }
}

const mapStateToProps = state => ({
  // farmerProductCollection: state.domainData.farmerProducts,
  farmerProduct: state.memberReducer.farmerProduct,
})

export default connect(mapStateToProps)(CollectionCard)
