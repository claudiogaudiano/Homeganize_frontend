import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" href="#">Tasks</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Gruppo</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Spesa</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
  );
}

export default Sidebar;
