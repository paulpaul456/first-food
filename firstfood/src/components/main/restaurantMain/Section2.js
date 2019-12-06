import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
//action
import { restaurantShowCalendar } from '../../../action'
//月曆
import {
  LightTheme,
  BaseProvider,
  styled,
  ThemeProvider,
  createTheme,
  lightThemePrimitives,
} from 'baseui'
import { StatefulCalendar } from 'baseui/datepicker'
import { Provider as StyletronProvider } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'

const engine = new Styletron()

let week = {
  0: '週日',
  1: '週一',
  2: '週二',
  3: '週三',
  4: '週四',
  5: '週五',
  6: '週六',
}

class Section2 extends React.Component {
  handleClickCalendar = () => {
    this.props.restaurantShowCalendar(!this.props.showCalendar)
  }
  render() {
    const { showCalendar } = this.props
    // console.log(this.props)
    let name = Number(this.props.oldName)
    if (!name) {
      name = 0
    }

    if (!this.props.restaurant) {
      return <>資料載入中</>
    }
    return (
      <>
        <div className="my_section2">
          <div className="container my">
            <div className="row my">
              <div className="col-md-8 left">
                <div className="row information">
                  <div className="col-md-8">
                    <p>Restaurant Information</p>
                    <p className="section2-text1">
                      <i className="fas fa-dot-circle"></i>
                      餐廳電話&emsp;&emsp;&emsp;{this.props.restaurant.mobile}
                    </p>
                    <p className="section2-text2">
                      <i className="fas fa-dot-circle"></i>
                      地址&emsp;&emsp;&emsp;{this.props.restaurant.address}
                    </p>

                    <p className="section2-text3">
                      <i className="fas fa-dot-circle"></i>
                      代客煮服務費&emsp;&emsp;&emsp;{this.props.restaurant.cook}
                      元
                    </p>
                  </div>

                  <div className="col-md-4 section2-text4">
                    <div>{this.props.restaurant.intro}</div>
                  </div>
                </div>

                <div
                  className={`restaurantCalendar ${
                    showCalendar ? '' : 'active'
                  } row justify-content-center mt-5`}
                  style={{ overflow: 'hidden' }}
                >
                  <p>
                    <i class="fas fa-concierge-bell"></i>可預約代客煮日期
                  </p>
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
                          // onChange={({ date }) => console.log(date)}
                          filterDate={date => {
                            return (
                              date.getDay() == this.props.restaurant.cooktime
                            )
                          }}
                          maxDate={new Date('2020-1-31')}
                          minDate={new Date('2019-12-1')}
                        />
                      </ThemeProvider>
                    </BaseProvider>
                  </StyletronProvider>
                </div>
              </div>

              <div className="col-md-4 right">
                <div className="right_up">
                  <div className="menu_wrap clickmeplz">
                    <NavLink
                      key={2}
                      to={
                        '/dinnerlist/' + this.props.restaurant_id + '/' + name
                      }
                    >
                      <div
                        style={{
                          width: '90%',
                          height: '250px',
                          border: '1px solid #aaa',
                          margin: 'auto',
                        }}
                      >
                        <figure
                          style={{
                            margin: 'auto',
                            lineHeight: '200px',
                            width: '100%',
                            height: '85%',
                            textAlign: 'center',
                          }}
                        >
                          <img
                            src="/assets/images/restaurant/logo/logo.png"
                            alt=""
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                          <h5>菜單</h5>
                        </figure>
                      </div>
                    </NavLink>
                  </div>

                  <div className="section2-right1">
                    <div class="love_comment">
                      <div className="comment">
                        <i className="fas fa-minus-square"></i>
                        <p>
                          {this.props.comment_data
                            ? this.props.comment_data.number.number
                            : ''}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p>Cook For You</p>
                  <div className="section2-right2">
                    <p>
                      {' '}
                      代客煮日：
                      <span>{week[this.props.restaurant.cooktime]}</span>
                    </p>
                  </div>
                  <div className="section2-right3">
                    <p>
                      {' '}
                      代客煮時段：
                      {JSON.parse(this.props.restaurant.cookhour).map(val => {
                        return <span>{val}</span>
                      })}
                    </p>
                  </div>
                  <div className="right4_wrap">
                    <div
                      className="section2-right4 clickmeplz"
                      onClick={this.handleClickCalendar}
                    >
                      <p>隱藏可代客煮日期</p>
                    </div>
                  </div>
                </div>
                <div className="right_down">
                  <p className="my_oneComment">COMMENTS</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </>
    )
  }
}

// 綁定 props <=> store
const mapStateToProps = store => {
  if (store.RestaurantReducer.data.length === 0) {
    return {}
  }

  if (store.RestaurantReducer.comment_data.length !== 0)
    return {
      restaurant: store.RestaurantReducer.data[0],
      restaurant_id: store.RestaurantReducer.data[0].restaurant_id,
      oldName: store.RestaurantReducer.oldName,
      cooktype: store.RestaurantReducer.cooktype,
      showCalendar: store.ui.componentUi.web.restaurant.calendarIsShow,
      comment_data: store.RestaurantReducer.comment_data,
      clickResComment: store.RestaurantReducer.clickResComment,
      count: store.RestaurantReducer.count,
    }

  return {
    restaurant: store.RestaurantReducer.data[0],
    restaurant_id: store.RestaurantReducer.data[0].restaurant_id,
    oldName: store.RestaurantReducer.oldName,
    cooktype: store.RestaurantReducer.cooktype,
    showCalendar: store.ui.componentUi.web.restaurant.calendarIsShow,
  }
}
export default connect(mapStateToProps, { restaurantShowCalendar })(Section2)
