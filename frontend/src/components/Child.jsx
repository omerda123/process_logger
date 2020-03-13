import React from 'react';

export default function Child(props) {
  return (
    <div className="child">
      {props.name}
      {props.number}
    </div>
  );
}
