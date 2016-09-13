import React from 'react';
import { IndexLink, Link } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="https://www.twitch.tv/"><i className="fa fa-twitch"></i> Twitch</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/abouts">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;