import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center mt-4">
      <div className="container py-4">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <p className="nav-link text-light">Dinda Friska Oktaviana</p>
          </li>
          <li className="nav-item">
            <p className="nav-link text-light">Dirham Triyadi</p>
          </li>
          <li className="nav-item">
            <p className="nav-link text-light">Muhammad Elham Al Haq</p>
          </li>
        </ul>
      </div>
      <div className="bg-dark text-white pb-2">
        <p className="m-0">© 2023 Kelompok 4</p>
      </div>
    </footer>
  );
};

export default Footer;
