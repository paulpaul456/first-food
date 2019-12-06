import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  InfoBox,
} from '@react-google-maps/api'
import Swal from '@sweetalert/with-react'

const CoursesContentMain = props => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  })
  const [mapInboxHidden, setMapInboxHidden] = useState(true)

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    })
  }

  const exampleMapStyles = [
    {
      stylers: [
        {
          saturation: -100,
        },
        {
          gamma: 1,
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.business',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.business',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.place_of_worship',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.place_of_worship',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'water',
      stylers: [
        {
          visibility: 'on',
        },
        {
          saturation: 50,
        },
        {
          gamma: 0,
        },
        {
          hue: '#50a5d1',
        },
      ],
    },
    {
      featureType: 'administrative.neighborhood',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#333333',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text',
      stylers: [
        {
          weight: 0.5,
        },
        {
          color: '#333333',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.icon',
      stylers: [
        {
          gamma: 1,
        },
        {
          saturation: 50,
        },
      ],
    },
  ]
  let lat = 25.034006
  let lng = 121.54337
  navigator.geolocation.watchPosition(position => {
    lat = position.coords.latitude
    lng = position.coords.longitude
  })

  const {
    addCart,
    collection,
    deleteCart,
    item,
    localAddCart,
    localAddCollection,
    getCourseData,
    collectionGetCourse,
    collectionAddCourse,
    collectionDeleteCourse,
    showLoginBox,
  } = props
  const c0 = item.course_content.split('*')[0].split(' ')[0]
  const c1 = item.course_content
    .split('*')[0]
    .split(' ')[1]
    .split('.')
  const c2 = item.course_content.split('*')[1].split('.')
  // console.log(item)
  const localCollection = localStorage.courseCollection
  const localCart = localStorage.courseCart
  let localCollectionArr = []
  let localCartArr = []
  if (localCollection) {
    localCollectionArr = localCollection.split(',').map(i => parseInt(i))
  }
  if (localCart) {
    localCartArr = localCart.split(',').map(i => parseInt(i))
  }
  //收藏
  let collectionArr = undefined
  if (!collection) {
    // console.log('收藏清單空',collection)
  } else {
    collectionArr = collection.collection
    // console.log('收藏清單有',collection.collection)
  }
  //加入與移除收藏
  const newADCollection = () => {
    if (props.isLogin) {
      let customerId = props.member[0].customer_id
      if (collectionArr) {
        if (collectionArr.some(el => el.course === item.course_id)) {
          collectionArr.forEach(i => {
            if (i.course === item.course_id) {
              collectionDeleteCourse(customerId, i.course_cart_id, () =>
                cartAlert('移除')
              )
            }
          })
        } else {
          collectionAddCourse(customerId, item, () => cartAlert('加入'))
        }

        // collectionGetCourse(customerId)
      } else {
        collectionAddCourse(customerId, item, () => cartAlert('加入'))
        // collectionGetCourse(customerId)
      }
    } else {
      loginAlert()
    }
  }
  //加入與移除購物車
  const newADCart = () => {
    if (props.isLogin) {
      let customerId = props.member[0].customer_id
      if (props.courseCart.some(el => el.course === item.course_id)) {
        // alert('移除購物車')
        props.courseCart.forEach(i => {
          if (i.course === item.course_id) {
            deleteCart(customerId, i.course_cart_id, () => cartAlert('移除'))
          }
        })
      } else {
        addCart(customerId, item, () => cartAlert('加入'))
        // console.log('getCourseData', getCourseData)
      }
      getCourseData(customerId)
    } else {
      loginAlert()
    }
  }
  //提示
  const cartAlert = text =>
    Swal({
      icon: 'success',
      text: `${text}成功`,
      button: false,
      timer: 2500,
    })
  const loginAlert = () =>
    Swal({
      title: '請先登入',
      // text: '請先登入',
      icon: 'info',
      buttons: {
        ok: '立即登入',
        no: '稍後',
      },
    }).then(value => {
      if (value == 'ok') {
        showLoginBox()
        window.scrollTo(0, 0)
        // alert("立即登入")
      }
    })
  // console.log(props)
  return (
    <>
      <LoadScript id="script-loader" googleMapsApiKey="">
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={[
            `/assets/images/courses/${item.my_file}`,
            `/assets/images/courses/${
              item.course_name == '鯖魚味噌煮' ? '鯖魚味噌煮' : '俄羅斯料理'
            }/1.jpg`,
            `/assets/images/courses/${
              item.course_name == '鯖魚味噌煮' ? '鯖魚味噌煮' : '俄羅斯料理'
            }/2.jpg`,
            `/assets/images/courses/${
              item.course_name == '鯖魚味噌煮' ? '鯖魚味噌煮' : '俄羅斯料理'
            }/3.jpg`,
            `/assets/images/classroom/${item.roomImages}`,
            // 'https://www.youtube.com/watch?v=xshEZzpS4CQ',
            // 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          ]}
          slide={lightboxController.slide}
        />
        <div className="coursesContent">
          <div className="row mb-4">
            <figure className="contentFigureMain col-12 col-sm-7">
              <img
                onClick={() => openLightboxOnSlide(1)}
                className="contentImageMain"
                src={`/assets/images/courses/${item.my_file}`}
                alt="課程"
              />
            </figure>
            <div className="contentData col-12 col-sm-5 text-center">
              <h3>{item.course_name}</h3>
              <div className="dataLine"></div>
              <h5 className="h5R">教室: {item.roomName}</h5>
              <h5 className="h5R">
                <i className="far fa-calendar-alt"></i>{' '}
                {new Date(item.course_date).getFullYear()}-
                {+new Date(item.course_date).getMonth() + 1}-
                {new Date(item.course_date).getDate()}
              </h5>
              <h5 className="h5R">
                <i className="fas fa-map-marker-alt"></i> {item.roomAddress}
              </h5>
              <div className="dataLine"></div>
              <div className="row justify-content-around ">
                <div
                  onClick={() => {
                    // localAddCollection(item.course_id)
                    newADCollection()
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <i
                    className={`${
                      collectionArr
                        ? collectionArr.some(i => i.course === item.course_id)
                          ? 'active'
                          : ''
                        : ''
                    } dataIcon fas fa-heart mx-1 fa-lg`}
                  />
                  <span> 500</span>
                </div>
                <div>
                  <i className="dataIcon fas fa-comment-alt mx-1 fa-lg"></i>
                  <span> 120</span>
                </div>
              </div>
              <br />
              <h4 className="d-inline"> 價 格 </h4>
              <h3 className="d-inline price"> {item.price} NT (含稅)</h3>
              <div
                className="dataButton"
                onClick={() => {
                  // localAddCart(item.course_id)
                  newADCart()
                }}
              >
                <h5 className="mb-0">
                  {/* eslint-disable-next-line no-undef */}
                  {/*{localCartArr.some(i => i === item.course_id)*/}
                  {/*  ? '移除購物車'*/}
                  {/*  : '加入購物車'}*/}
                  {props.courseCart !== 0
                    ? props.courseCart.some(
                        el => el.course_id === item.course_id
                      )
                      ? '移除購物車'
                      : '加入購物車'
                    : '加入購物車'}
                  <i className="fas fa-shopping-cart fa-lg"></i>
                </h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-7">
              <figure className="contentFigureSmall">
                <img
                  onClick={() => openLightboxOnSlide(2)}
                  className="ml-0"
                  src={`/assets/images/courses/${
                    item.course_name == '鯖魚味噌煮'
                      ? '鯖魚味噌煮'
                      : '俄羅斯料理'
                  }/1.jpg`}
                  alt=""
                />
                <img
                  onClick={() => openLightboxOnSlide(3)}
                  src={`/assets/images/courses/${
                    item.course_name == '鯖魚味噌煮'
                      ? '鯖魚味噌煮'
                      : '俄羅斯料理'
                  }/2.jpg`}
                  alt=""
                />
                <img
                  onClick={() => openLightboxOnSlide(4)}
                  src={`/assets/images/courses/${
                    item.course_name == '鯖魚味噌煮'
                      ? '鯖魚味噌煮'
                      : '俄羅斯料理'
                  }/3.jpg`}
                  alt=""
                />
                <img
                  onClick={() => openLightboxOnSlide(4)}
                  className="mr-0"
                  src={`/assets/images/classroom/${item.roomImages}`}
                  alt="教室"
                />
              </figure>
              <p>上課地點：</p>
              <p>{item.roomAddress}</p>
              <figure className="contentFigureMap">
                {/*<img src="/assets/images/courses/course_map.png" alt="" />*/}
                <GoogleMap
                  id="example_map"
                  mapContainerStyle={{
                    height: '100%',
                    width: '100%',
                  }}
                  zoom={13}
                  center={{
                    lat: item.lat,
                    lng: item.lng,
                  }}
                  options={{
                    styles: exampleMapStyles,
                  }}
                >
                  <Marker
                    // onLoad={Marker => {
                    //   console.log('Marker: ', Marker)
                    // }}
                    onClick={() => setMapInboxHidden(!mapInboxHidden)}
                    key={item.course_id}
                    position={{
                      lat: item.lat,
                      lng: item.lng,
                    }}
                    draggable={true}
                    // icon={icon}
                    options={{
                      labelAnchor: { x: 100, y: -60 },
                    }}
                  >
                    <InfoBox
                      // onLoad={infoBox => {
                      //   console.log('infoBox: ', infoBox)
                      // }}
                      options={{
                        closeBoxURL: '',
                        enableEventPropagation: true,
                        isHidden: mapInboxHidden,
                        // boxClass: location.name,
                      }}
                      position={{
                        lat: item.lat,
                        lng: item.lng,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: 'grey',
                          opacity: 0.9,
                          padding: 12,
                          borderRadius: '10px',
                        }}
                      >
                        <div style={{ fontSize: 16, fontColor: `#051523` }}>
                          {item.roomName}
                        </div>
                      </div>
                    </InfoBox>
                  </Marker>
                </GoogleMap>
              </figure>
            </div>
            <div className="contentCard col-12 col-sm-5">
              <br />
              <h4 className="courseNote">{item.course_note}</h4>

              <p>
                {c0} {c1[0]}
                <br />. {c1[1]}
                <br />. {c1[2]}
                <br />. {c1[3]}
              </p>
              <p>
                {c2[0]}
                <br />. {c2[1]}
                <br />. {c2[2]}
                <br />. {c2[3]}
              </p>
            </div>
          </div>
        </div>
      </LoadScript>
    </>
  )
}

export default CoursesContentMain
