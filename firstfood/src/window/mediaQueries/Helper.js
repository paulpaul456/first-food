
import { breakpoints } from './breakpoints'


const breakpointFromString = string => {
  const breakpoint = breakpoints[string]
  if(!breakpoint){
    throw new Error(`Bad breakpoint variable given: ${string}`)
  }
  return breakpoint

}

/*
 * @param {Object} breakpointToCompare
 * @param {number} currentBreakpointSize
 * @return {boolean}
 */

export const breakpointIsGreaterThan = (breakpointToCompare, currentBreakpointSize) => {
  const comparison = typeof breakpointToCompare === 'string' ? breakpointFromString(breakpointToCompare):breakpointToCompare
  if(currentBreakpointSize===null || currentBreakpointSize > comparison){
    return true
  }else{
    return false
  }
}
export const breakpointIsLessThan = (breakpointToCompare, currentBreakpointSize) => {
  const comparison = typeof breakpointToCompare === 'string' ? breakpointFromString(breakpointToCompare):breakpointToCompare
  if(currentBreakpointSize===null || currentBreakpointSize <= comparison){
    return true
  }else{
    return false
  }
}
