import React from "react";

const HeaderBrand = () => {
  return (
    <div className="navbar-header">
      <a className="navbar-brand" href="/">React Photo Gallery</a>
    </div>
  );
};

const Header = () => {
  return (
    <nav className="Header navbar bg-primary">
      <div className="container-fluid">
        <HeaderBrand />
      </div>
    </nav>
  );
};

export default Header;
