import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'

function Lightbox() {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  // 單個按燈箱
  const [toggler2, setToggler2] = useState(false)
  const [toggler3, setToggler3] = useState(false)
  // 燈箱群組
  const [toggler, setToggler] = useState(false)
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  })
  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    })
  }

  return (
    <>
      {/* <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button> */}

      <FsLightbox toggler={toggler3} sources={['/assets/images/3.jpg']} />
      <div className="m-3" onClick={() => setToggler3(!toggler3)}>
        <div className="row"></div>
        <img src="/assets/images/3.jpg" alt="" width="100%" className="col-4" />
      </div>
      <FsLightbox toggler={toggler2} sources={['/assets/images/2.jpg']} />
      <div className="m-3" onClick={() => setToggler2(!toggler2)}>
        <div className="row"></div>

        <img src="/assets/images/2.jpg" alt="" width="100%" className="col-4" />
      </div>
      <FsLightbox
        toggler={toggler}
        sources={['/assets/images/4.jpg', '/assets/images/5.jpg']}
        slide={lightboxController.slide}
      />
      <div className="m-3" onClick={() => setToggler(!toggler)}>
        <div className="row" onClick={() => openLightboxOnSlide(1)}>
          <img
            src="/assets/images/4.jpg"
            alt=""
            width="100%"
            className="col-4"
          />
        </div>
        <div className="row" onClick={() => openLightboxOnSlide(2)}>
          <img
            src="/assets/images/5.jpg"
            alt=""
            width="100%"
            className="col-4"
          />
        </div>
      </div>
    </>
  )
}

export default Lightbox
