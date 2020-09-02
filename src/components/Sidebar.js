import React from 'react';
import { PageSidebar, Nav, NavList, NavItem, NavExpandable, capitalize } from '@patternfly/react-core';
import { NavLink, Location } from "react-router-dom";

const SidebarItem = ({ text, href, exact }) => (
  <NavItem>
    <NavLink
      to={href}
      activeClassName="pf-m-current"
      exact={exact}
    >
      {text}
    </NavLink>
  </NavItem>
);

const Sidebar = ({ routes }) => {
  const sectionedRoutes = routes
    .filter(({ section }) => Boolean(section))
    .reduce((acc, cur) => {
      acc[cur.section] = acc[cur.section] || [];
      acc[cur.section].push(cur);

      return acc;
    }, {});
  console.log('sectionedRoutes', sectionedRoutes)
  return <PageSidebar nav={
    <Nav>
      <NavList>
        <SidebarItem href="/" text="Dashboard" exact />
        {Object.entries(sectionedRoutes)
          .map(([section, items]) => [section, items, location.hash.startsWith(`#/${section}`)])
          .map(([section, items, isActive]) => (
            <NavExpandable
              key={section}
              title={`${capitalize(section)} APIs`}
              isActive={isActive}
              isExpanded={isActive}
            >
              {items.map(({ path, text }) => (
                <SidebarItem key={path + text} href={path} text={text} />
              ))}
            </NavExpandable>
          ))}
      </NavList>
    </Nav>
  } />
}

export default Sidebar;
