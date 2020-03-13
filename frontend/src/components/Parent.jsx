import React from 'react';

export default function Parent(props) {
  return (
    <div className="parent">
      {props.name}
      {props.number}
    </div>
  );
}
