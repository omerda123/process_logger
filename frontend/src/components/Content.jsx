import React from 'react';
import Process from './Process';

export default function Content(props) {
  const { processes } = props;
  return (
    <div>
      {
          Object.keys(processes).map((process) => (
            <div>
              <Process name={processes[process].name} number={process} class="parent" />
              {
              processes[process].children
                ? processes[process].children.map((child) => (<Process name={child.name} number={child.pid} class="child" />))
                : null
               }
            </div>
          ))
        }
    </div>
  );
}
