import React from "react"
// import "./buton.css"
import ButonStyle from  "./buton.module.css"

const Buton = ({ btn }) => {
  console.log(btn)
  return (
    <div className={ButonStyle.title} >
      <button className={ButonStyle["btn-blue"]}>{btn} </button>
    </div>
  )
};

export default Buton;

// rafce , rafc kısa yol