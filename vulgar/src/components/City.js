import React from 'react';
import {celsiusConverter, classRenderer} from '../helpers';

const City = (props) => {

  return (<div className={`city ${classRenderer(props.temperature)}`}>
            <span>{celsiusConverter(props.temperature)}</span>
            <h1>{props.caption}</h1>
            <h3>{props.city}</h3>
        </div>);
}

export default City;