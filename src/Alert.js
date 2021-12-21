import React,{useEffect} from 'react'

function Alert({type,mgs,removeAlert,list}) {
    useEffect(()=>{
      const timeout = setTimeout(()=>{
       removeAlert()
      },2000)
      return ()=> clearTimeout(timeout)
    },[list])
    return (
      <p className={`alert alert-${type}`}>{mgs}</p>
    )
}

export default Alert
