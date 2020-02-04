import React from "react";

import './Card.css';

const card = (props) => {
  return (
    <div className={'Card'}>
        <div>Name: {props.name}</div>
        <div className={'Div'}>Email: {props.email}</div>
        <div className={'Div'}>Gender: {props.gender}</div>
        <div className={'Div'}>Address: {props.address}</div>
    </div>
  );
};

export default card;
