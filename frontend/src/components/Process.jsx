import React from 'react';

export default function Process(props) {
  return (
    <div className={props.class}>
      {props.name}
      (
      {props.number}
      )
    </div>
  );
}
