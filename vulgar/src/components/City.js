import React from 'react';

const City = (props) => {

  return (<div className={`city ${props.className}`}>
            <span>{props.temperature}</span>
            <h1>{props.caption}</h1>
            <h3>{props.city}</h3>
        </div>);
}

export default City;