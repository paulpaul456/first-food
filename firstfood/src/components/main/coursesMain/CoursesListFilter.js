import React, { useEffect,useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Datepicker,StatefulCalendar } from 'baseui/datepicker'
import { ThemeProvider, createTheme, lightThemePrimitives } from 'baseui'

import { SHOW_ALL } from '../../../action/course/coursesActionType'

const transDate = (seconds)=>{
  let dateObj = new Date(seconds)
  return `${dateObj.getFullYear()}/${+dateObj.getMonth()+1}/${dateObj.getDate()} `
}

const CoursesListFilter = props => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  }, [])

  //const { type } = props.match.params
  //地區
  let dropdownList = []
  let coursesArea = new Set()
  props.domainData.forEach(i => coursesArea.add(i.roomAddress.slice(0, 3)))
  let coursesAreaArray = [...coursesArea]
  coursesAreaArray.forEach((value, index, array) => {
    dropdownList.push(
      <Dropdown.Item
        key={index}
        active={props.areaFilter === value ? true : false}
        onClick={() => props.selectArea(value)}
        // disabled={props.areaFilter === SHOW_ALL ? false : (props.areaFilter===value)? false : true}
      >
        {value}
      </Dropdown.Item>
    )
  })
  //日期
  let coursesDay = new Set()
  // props.domainData.forEach(element => console.log('日期',new Date(element.course_date) ) )
  if (props.areaFilter === SHOW_ALL) {
    props.domainData.forEach(i => {
      coursesDay.add(new Date(i.course_date).getTime())
    })
  } else {
    props.domainData.forEach(i => {
      if (i.roomAddress.slice(0, 3) === props.areaFilter) {
        console.log(i.roomAddress.slice(0, 3))
        coursesDay.add(new Date(i.course_date).getTime())
      }
    })
  }
  const coursesDayArray = [...coursesDay]
  return (
    <>
      <p className="ml-4">選擇課程地點 、 時間</p>
      <div className="row mb-5">
        <Dropdown className="dropdownWrapper">
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            className="dropdownToggle ml-3 position-relative"
            style={{
              boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.15)',
              marginRight: '30px',
            }}
          >
            <i
              className="fas fa-map-marker-alt position-absolute"
              style={{ left: '10px', top: '10px' }}
            ></i>
            {props.areaFilter === SHOW_ALL ? '全部區域' : props.areaFilter}
          </Dropdown.Toggle>

          <Dropdown.Menu
            style={{
              border: 'none',
              boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.15)',
              width:'80%'
            }}
            className="dropdownMenu"
          >
            <Dropdown.Item
              active={props.areaFilter == SHOW_ALL ? true : false}
              onClick={() => props.selectArea(SHOW_ALL)}
            >
              全部區域
            </Dropdown.Item>
            {dropdownList}
          </Dropdown.Menu>
        </Dropdown>
        <div className="row px-3 justify-content-between align-items-center datepicker position-relative ">
          <i
            className="far fa-calendar-alt"
            onClick={()=>setOpen(!open)}
          ></i>
          <p
          onClick={()=>setOpen(!open)}
          >{
            props.dateFilter === SHOW_ALL
              ? 'YYYY/MM/DD'
              : transDate(props.dateFilter)
          }</p>
          <a
            className=""
            style={{ height: '38px' }}
            onClick={() => {
              setOpen(false)
              props.selectDate(SHOW_ALL)
              // props.selectArea(SHOW_ALL)
            }}
          >
            <i
              style={{ lineHeight: '38px' }}
              className="fas fa-redo ml-3"
            ></i>
          </a>
          <div className={`courseCalendar ${open?'':'active'} position-absolute`}>
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
              value={
                props.dateFilter === SHOW_ALL
                  ? null
                  : new Date(props.dateFilter)
              }
              // onChange={({ date }) => setSingleDate(date)}
              onDayClick={e => {
                setOpen(false)
                props.selectDate(e.date.getTime())
              }}
              filterDate={date => {
                return coursesDayArray.some(c => date.getTime() == c)
              }}
              maxDate={new Date('2020-1-31')}
              minDate={new Date('2019-12-1')}
              overrides={{
                InputWrapper: {
                  style: ({ $theme }) => {
                    return {
                      width: '200px',
                      borderRadius: '.25rem',
                      height: '38px',
                      overflow: 'hidden',
                      boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.15)',
                    }
                  },
                },
              }}
            />
          </ThemeProvider>
          </div>
        </div>
      </div>
      {/*<h1 className="text-center">*/}
      {/*  - {type == 'dinner' ? '正餐' : type == 'dessert' ? '甜點' : ''} 課程 -*/}
      {/*</h1>*/}
    </>
  )
}

export default CoursesListFilter
