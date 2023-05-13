import React from 'react'
export default function Footer(){
    return(
        <div className='footer' style={{
            backgroundColor:"#111",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            color:"#fff",
            fontSize:"1.4vw",
            position:"fixed",
            bottom:0,
            width:"100%",
            fontFamily:'courier',
            height:"40px",
            paddingTop:"13px"
        }}>
            <p>© Copyright @ 2023 . All Rights Reserved - Website by <a href="#" style={{color:"yellow"}}>JewTech-X</a></p>
        </div>
    )
}