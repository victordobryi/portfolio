import React, { useState } from 'react';
import './Navbar.scss';
import { SidebarData } from './SidebarData';

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  document.body.style.overflow = `${sidebar ? 'hidden' : 'visible'}`;

  const closeSideBar = () => {
    if (document.documentElement.clientWidth <= 1024) {
      showSidebar();
    }
  };

  return (
    <div className={sidebar ? 'menu menu_state_open' : 'menu'}>
      <div
        className="menu__icon"
        onClick={showSidebar}
        onKeyPress={() => ''}
        role={'presentation'}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul
          className="menu__links"
          onClick={closeSideBar}
          onKeyPress={() => ''}
          role={'presentation'}
        >
          {SidebarData.map((item, i) => {
            return (
              <li key={i} className={item.cName}>
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
