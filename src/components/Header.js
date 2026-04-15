import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">LOGO</div>
      <nav className="header-nav">
        <a href="#advantages" className="header-link">Преимущества</a>
        <a href="#photos" className="header-link">Фотографии</a>
      </nav>
      <button className="header-login">Вход</button>
    </header>
  );
}

export default Header;
