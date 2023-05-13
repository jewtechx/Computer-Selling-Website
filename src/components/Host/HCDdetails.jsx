import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HCDdetails() {
  const { contextdata } = useOutletContext();

  return (
    <div style={{ padding: '10px' }}>
      <h6>Category: <span style={{color:"#999999",fontSize:"14px",fontWeight:"light"}} >{contextdata.categoty}</span></h6>
      <h6>Description: <span style={{color:"#999999",fontSize:"14px",fontWeight:"light"}} >{contextdata.desc}</span></h6>
      <h6>Visibility: <span style={{color:"#999999",fontSize:"14px",fontWeight:"light"}} >{contextdata.visibility}</span></h6>
    </div>
  );
}
