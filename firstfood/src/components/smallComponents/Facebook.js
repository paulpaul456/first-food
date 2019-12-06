import React from 'react'
import {NavLink} from 'react-router-dom'
import {LineShareButton,LineIcon } from 'react-share'

const shareUrl = 'http://localhost:3000';
const title = 'Firstfood 初食' +'                                                                  '+
  '這網站真豐富，真心推薦！' +'                                                                  ' +
  '有機食材新鮮又美味，還提供代客煮服務，怎麼吃都吃得健康～';

const Facebook = props => {
  return (
    <>
      {/*<NavLink*/}
      {/*  to={'/courses'}*/}
      {/*  id="facebook"*/}
      {/*  className="row justify-content-center align-content-center position-absolute"*/}
      {/*>*/}
        <LineShareButton
          url={shareUrl}
          title={title}
          className="facebook position-absolute row justify-content-center">
          <img src="/assets/images/line.png" alt=""/>
        </LineShareButton>

        {/*<i className="fab fa-facebook-f fa-1x"></i>*/}
      {/*</NavLink>*/}
    </>
  )
}
export default Facebook
