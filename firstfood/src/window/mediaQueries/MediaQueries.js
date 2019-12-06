import React from 'react'
import { connect } from 'react-redux'
import { breakpoints } from './breakpoints'
import { setActiveBreakpoint } from '../../action/index'

class MediaQueries extends React.Component {
  constructor(props){
    super(props)
    this.mediaQueryState = []
    this.keys = Object.keys( breakpoints )
  }
  componentDidMount() {
    this.keys.forEach(key=>{
      const query = window.matchMedia(`(max-width: ${breakpoints[key]}px)`)
      query.breakpoint = breakpoints[key]
      query.name = key
      const breakpointChange = (e) => {
        this.dispatchActiveQuery()
      }
      query.addListener(  breakpointChange )
      this.mediaQueryState.push(query)
    })
    this.dispatchActiveQuery()
  }
  componentWillUnmount() {
    this.keys.forEach(key=>{
      const query = window.matchMedia(`(max-width: ${breakpoints[key]}px)`)
      query.breakpoint = breakpoints[key]
      query.name = key
      const breakpointChange = (e) => {
        console.log('removeListener')
        this.dispatchActiveQuery()
      }
      query.removeListener(breakpointChange)
    })
  }
  test = (e) => {
    console.log(e)
  }
  dispatchActiveQuery = () => {
    const { dispatch } = this.props
    const activeQuery = this.mediaQueryState.reduce((prev,curr)=>{
      return curr.matches ? curr : prev && prev.matches ? prev : null
    },{})
    const breakpointName = activeQuery ? activeQuery.name : 'default'
    const breakpointSize = activeQuery && activeQuery.breakpoint

    dispatch(setActiveBreakpoint(breakpointName, breakpointSize))
  }
  render() {
    return(
      <>
        {this.props.children}
      </>
    )
  }
}
export default connect()( MediaQueries )
