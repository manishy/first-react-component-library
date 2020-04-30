import React from 'react';
import './ButtonComponent.css';
// @ts-ignore
import logo from './logo.png';

const ButtonComponent: any = ()=>{
  const handleOnClick: any = (e:any) => {
        alert("hello world");
  };

  return (<div>
        <button onClick={handleOnClick}><img alt="logo" className="img" src={logo}/></button>
      </div>
  );
};

export default ButtonComponent;
