import React from "react";

import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">
              HATS
              <div className="subtitle">SHOP NOW</div>
            </div>
          </div>
        </div>
        <div className="menu-item">
        <div className="content">
          <div className="title">
            JAckets
            <div className="subtitle">SHOP NOW</div>
          </div>
        </div>
      </div>
      <div className="menu-item">
      <div className="content">
        <div className="title">
         SNEAKERS
          <div className="subtitle">SHOP NOW</div>
        </div>
      </div>
    </div>
    <div className="menu-item">
    <div className="content">
      <div className="title">
     WOMENS
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  </div>
  <div className="menu-item">
  <div className="content">
    <div className="title">
      MENS
      <div className="subtitle">SHOP NOW</div>
    </div>
  </div>
</div>
<div className="menu-item">
<div className="content">
  <div className="title">
    HATS
    <div className="subtitle">SHOP NOW</div>
  </div>
</div>
</div>
      </div>
    </div>
  );
};


export default HomePage;