import React from 'react'
import computerdatas from '../../apiDatas/computersapi'
import { useOutletContext } from 'react-router-dom'
export default function HCDpricing(){
  const {contextdata}  = useOutletContext()
    return(
        <div>
          <br/>
          <h6>{contextdata.price} / <strike style={{color:"#999999"}}>{Math.floor(110 / 100 * contextdata.price.slice(3))}</strike></h6>
        </div>
    )
}