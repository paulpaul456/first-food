import React from 'react'
import { NavLink } from 'react-router-dom'
import Moment from 'react-moment'
import 'moment/locale/zh-tw'

import { connect } from 'react-redux'

const veg = {
  葷: '提供葷食料理',
  素: '提供素食料理',
  都有: '葷素食皆提供',
}

const Littlecard = props => {
  // console.log(props)
  let name = Number(props.oldName)
  if (!name) {
    name = 0
  }

  let i = props.i

  let val = props.restaurant[i - 1]

  let week = {
    0: '週日',
    1: '週一',
    2: '週二',
    3: '週三',
    4: '週四',
    5: '週五',
    6: '週六',
  }

  return (
    <>
      <div
        className={
          props.hasRestaurant === val.name
            ? 'little_card active'
            : 'little_card'
        }
        key={val.id}
        onMouseEnter={props.handleCardHover(i)}
      >
        <div className="map_card_tag">
          <h6
            style={{
              transform: 'translate(12.5px, 90px)',
              color: 'white',
            }}
          >
            No.{i}
          </h6>
        </div>

        <div className="d-flex my_card">
          <div className="card_photo">
            <img src={`/assets/images/restaurant/${val.my_file}`} alt="" />
          </div>
          <div className="">
            <div className="d-flex">
              <NavLink
                key={1}
                to={'/restaurant/' + val.restaurant_id + '/' + name}
              >
                <h4 className="card_name">{val.name}</h4>
              </NavLink>

              <p className="card_veg">{veg[val.vegetarian]}</p>
            </div>

            <div className="d-flex comment">
              {val.star ? (
                <span>
                  {(val.star / val.com_num).toFixed(1)}
                  <i class="fas fa-star" style={{ color: '#C73E3A' }}></i>
                </span>
              ) : (
                ''
              )}

              {props.RWD ? (
                <>&emsp;</>
              ) : (
                <span>
                  &nbsp;(&nbsp;{val.com_num ? val.com_num : '0'}
                  &nbsp;則評論)&emsp;| &emsp;
                </span>
              )}

              <span style={{ fontWeight: 'bold' }}>均消 $ {val.pct}</span>
            </div>

            <div className="working_time">
              <p>營業時間 {val.businesstime}&emsp;| </p>{' '}
              {Object.keys(week).map(function(key) {
                if (key == val.holiday) {
                  return <p>&emsp;{week[key]}公休</p>
                }
              })}
            </div>

            <div className="d-flex">
              <p className="d-flex">
                代客煮日：
                {Object.keys(week).map(function(key) {
                  if (key == val.cooktime) {
                    return <>{week[key]}&emsp;</>
                  }
                })}{' '}
                |&emsp;{val.cooktype}
              </p>
            </div>

            <p>{val.address}</p>
          </div>
        </div>

        {props.RWD ? (
          ''
        ) : (
          <div className="d-flex justify-content-between">
            <div>
              <p>
                {val.nickname}
                {val.comment ? '：「 ' + val.comment + ' 」' : '尚無評論'}
              </p>
              {val.comment ? (
                <span>
                  {val.create_at ? val.create_at.slice(0, 10) : ''}
                  &emsp;|&emsp;
                  <Moment locale="zh-TW" toNow>
                    {val.create_at}
                  </Moment>
                </span>
              ) : (
                ''
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

// export default Littlecard

// 綁定props.todos <=> store.todos
const mapStateToProps = store => {
  // if(!store.RestaurantReducer.oldName) return {}
  // console.log(store)
  if (store.DinnerProductReducer.RWD)
    return {
      restaurant: store.RestaurantReducer.data,
      weekday: store.RestaurantReducer.weekday,
      hasRestaurant: store.RestaurantReducer.hasRestaurant,
      RWD: store.DinnerProductReducer.RWD,
      map_display: store.DinnerProductReducer.map_display,
    }
  return {
    restaurant: store.RestaurantReducer.data,
    weekday: store.RestaurantReducer.weekday,
    hasRestaurant: store.RestaurantReducer.hasRestaurant,
  }
}
export default connect(mapStateToProps)(Littlecard)
