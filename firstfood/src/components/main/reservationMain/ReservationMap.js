import React, { useState } from 'react'

import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  InfoBox,
  StandaloneSearchBox,
} from '@react-google-maps/api'
import {connect} from "react-redux";

const ReservationMap = props => {
  const [mapInboxHidden, setMapInboxHidden] = useState(true)
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

  return (
    <>
      <LoadScript
        id="script-loader"
        googleMapsApiKey=""
        libraries={['places']}>
              {/*<figure className=""  >*/}
                <GoogleMap
                  id="example_map"
                  mapContainerStyle={{
                    height: '100%',
                    width: '100%',
                  }}
                  zoom={10}
                  center={{
                    lat,
                    lng,
                  }}
                  options={{
                    styles: exampleMapStyles,
                  }}
                >
                  <StandaloneSearchBox
                    // onLoad={ref => (this.searchBox = ref)}
                    //onPlacesChanged={
                      // () => console.log(this.searchBox.getPlaces())
                      // lat = this.searchBox.getPlaces()[0].geometry.location.lat()
                      // lng = this.searchBox.getPlaces()[0].geometry.location.lng()
                    //}
                  >
                    <input
                      type="text"
                      placeholder="請輸入地址"
                      style={{
                        boxSizing: `border-box`,
                        border: `1px solid transparent`,
                        width: `300px`,
                        height: `50px`,
                        padding: `0 12px`,
                        borderRadius: `3px`,
                        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                        fontSize: `14px`,
                        outline: `none`,
                        textOverflow: `ellipses`,
                        position: 'absolute',
                        top: '1%',
                        left: '1%',
                        // marginLeft: '-120px',
                      }}
                      // onChange={this.searchInputChange}
                      // onFocus={this.searchInputFocus}
                      // onBlur={this.searchInputBlur}
                      // value={
                      //   this.state.searchName
                      //     ? this.state.searchName
                      //     : this.state.searchInput
                      // }
                    />
                  </StandaloneSearchBox>
                  <Marker
                    // onLoad={Marker => {
                    //   console.log('Marker: ', Marker)
                    // }}
                    onClick={() => setMapInboxHidden(!mapInboxHidden)}
                    key={1}
                    position={{
                      lat,
                      lng,
                    }}
                    draggable={true}
                    // icon={icon}
                    options={{
                      labelAnchor: { x: 100, y: -60 },
                    }}
                  >
                  </Marker>
                </GoogleMap>
              {/*</figure>*/}
      </LoadScript>
    </>
  )
}

export default  ReservationMap
