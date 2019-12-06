import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom";
const Test = (props) => {

    //設置 state
    const [num, setNum] = useState(0)

    //設置 lifecycle 注意update觸發順序
    useEffect(()=>{
        //順序2 componentDidMount 及 componentDidUpdate
        console.log(`更新後的 State `)

        //順序1 componentDidUpdate 及 componentWillUnmount
        return(()=>{
            console.log(`更新前的 State `)
        })
    },[])


    //改變 state
    const changeNum = e =>{
        setNum(num+1)
        console.log("changeNum")
    }


    return (
        <>
            <Link key={1} to={"/"}> home</Link>
            <button onClick={changeNum}>Test</button>
        </>
    )
}

export default Test