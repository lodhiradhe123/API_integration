import React, { useEffect } from 'react'

function Service() {
    useEffect(()=>{
        console.log('Service Component Mounted')
        return ()=>{
            console.log("service component is unmounted");
        }
    })
  return (
    <div>Service</div>
  )
}

export default Service