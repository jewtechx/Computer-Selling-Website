import React from 'react'
import computerdatas from '../../apiDatas/computersapi'
import { useOutletContext } from 'react-router-dom'
export default function HCDphotos(){
  const { contextdata } = useOutletContext();
    return(
        <div>
          <br/>
         <img src={contextdata.image} alt={contextdata.model} style={{borderRadius:'10px',width:'150px',height:'150px'}}/>
        </div>
    )
}