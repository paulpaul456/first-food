import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

import Chef from '../../../assets/images/chef.png'
import Class1 from '../../../assets/images/class1.jpg'
import Class2 from '../../../assets/images/class2.jpg'

const HomeClass = props => {
    return (
        <>
            <div id="class" className="">
                <div className="container">
                    <div className="title row">
                        <h5 className="m-0">烹飪課程 </h5>
                        <img className="align-self-center" src={Chef} alt=""/>
                    </div>
                </div>
                <div className="titleLine row justify-content-between">
                    <div className="titleLine1"></div>
                    <div className="titleLine2"></div>
                </div>
                <div className="container">
                    <div className="row ">
                        <p className="col-8 col-sm-3 p-0">
                            金黃的湯頭喝起來溫順甘甜，最深得我心是肉片，薄嫩鮮甜好吃得不得了。粗麵條用的是筷子麵，口感紮實有勁道，相較細麵更為熱門，我們點完後就沒啦
                        </p>
                        <div className="vertical col-4 col-sm-2 ">
                            <div className="verticalHead row">
                                <div className="leftLine"></div>
                                <div className="rightLine"></div>
                            </div>
                            <p className="mx-auto">
                                快來報名烹飪課程吧
                                <br/>
                                五星主廚
                                <br/> 教你如何善用食材
                            </p>
                        </div>
                        <div className="col-12 col-sm-7 row">
                            <div className="col-6 px-0">
                                <NavLink key={7} to={'/coursesContent/7'}>
                                    <img src={Class1} alt=""/>
                                </NavLink>
                            </div>
                            <div className="col-6 pl-0">
                                <NavLink key={8} to={'/coursesContent/7'}>
                                    <img src={Class2} alt=""/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeClass
