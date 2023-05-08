import React from 'react'
export default function Footer(){
    return(
        <div className='footer' style={{
            backgroundColor:"#f3f3f3",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            color:"#111",
            fontSize:"16px",
            position:"fixed",
            bottom:0,
            width:"100%",
            height:"40px",
            paddingTop:"15px"
        }}>
            <p>© Copyright @ 2023 . All Rights Reserved - Website by <a href="#" style={{color:"crimson"}}>JewTech-X</a></p>
        </div>
    )
}