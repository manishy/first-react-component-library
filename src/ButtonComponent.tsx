import React from 'react';

// import logo from './logo.png';
import './ButtonComponent.css';

const ButtonComponent: any = ()=>{
  const handleOnClick: any = (e:any) => {

  };

  return (<div>
        <button onClick={handleOnClick}><img alt="logo" className="img"/></button>
      </div>
  )
}

export default ButtonComponent;
