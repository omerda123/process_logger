import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/"><div>Process Tree</div></Link>
      <Link to="/logger"><div>Process logger</div></Link>
      <Link to="/risks"><div>Detect risks</div></Link>
    </div>
  );
}
