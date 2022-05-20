import React from 'react'
import Style from "./Data.module.css"
const Datalist = ({data}) => {

  return (
    
        <div className={Style.container}>
        <div className={Style.parent}>
   <div className={Style.div}>
   <p className={Style.p}>{data.date}</p>
   <img className={Style.image} src={data.img} />
   </div>
   
   <button className={Style.button}>{data.btnText}</button>
   <h1>{data.text1}</h1>
   <h1>{data.text2}</h1>
   <div className={Style.icons}>
   <p className={Style.ps}>{data.text3}</p>
   <i id={Style.i} className={data.icon}></i>
   </div>
   
</div>
 </div>
      


  )
}

export default Datalist