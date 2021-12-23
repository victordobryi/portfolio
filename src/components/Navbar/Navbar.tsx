import React, { MouseEvent, useState } from 'react';
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

  const moveToAnchor = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const blockID = e.currentTarget.getAttribute('href')?.substring(1);

    document.querySelector(`.${blockID}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
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
        <div
          className="menu__links"
          onClick={closeSideBar}
          onKeyPress={() => ''}
          role={'presentation'}
        >
          {SidebarData.map((item, i) => {
            return (
              <a
                onClick={(e) => moveToAnchor(e)}
                href={item.path}
                key={i}
                className={item.cName}
              >
                <span>{item.title}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
