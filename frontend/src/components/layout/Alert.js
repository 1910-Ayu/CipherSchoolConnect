import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {
  const { alert }= useSelector((state)=> state.alert);

 
    alert.map((alertt) => (
      <div key={alertt.id} className={`t alert-${alert.alertType}`}>
        {alertt.msg}
      </div>
    ));
  
}

export default Alert