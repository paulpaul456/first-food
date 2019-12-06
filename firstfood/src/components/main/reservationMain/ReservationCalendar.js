import React, { useEffect, useState } from 'react'
//月曆
import { LightTheme, BaseProvider, styled, ThemeProvider, createTheme, lightThemePrimitives } from 'baseui'
import { StatefulCalendar } from 'baseui/datepicker'
import { Provider as StyletronProvider } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'
const engine = new Styletron()

const ReservationCalendar = props => {
  const excludeDates  = [];
  for(let i=0;i<7;i++){
    excludeDates[i]= new Date(new Date().setDate(new Date().getDate()+i))
  }
  // console.log('ReservationCalendar',props)
 const {setDate, date} = props
  return (
    <div className="" style={{zIndex:1007}}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
              colors: {
                inputFill: '#f9f9f9',
                calendarHeaderBackground: '#F3E5CB',
                calendarHeaderForeground: '#000',
              },
            })}
          >
            <StatefulCalendar
              // use the 'onChange' prop to pull data from the component into your application state
              initialState={{value: new Date()}}
              onChange={({ date }) => setDate(date)}
              filterDate={date => {
                return date.getDay() == props.restaurant[0].cooktime
              }}
              // monthsShown={2}
              excludeDates={
                excludeDates
              }
              overrides={{
                CalendarContainer: {
                  style: ({ $theme }) => {
                    return {
                      width:'310px',
                      height:'230px'
                    };
                  }
                }
              }}
              maxDate={new Date('2020-1-31')}
              minDate={new Date()}
            />
          </ThemeProvider>
        </BaseProvider>
      </StyletronProvider>
    </div>
  )
}

export default ReservationCalendar
