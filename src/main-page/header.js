import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <header className="row">
    <div className="col-md-5">
      Lets add some logo later
    </div>
    <div className="class-md-7">
      {props.title}
    </div>
  </header>
);

export default Header;