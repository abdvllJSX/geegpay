// Layout.jsx
import React from 'react';
import Sidebar from './sidebar/sidebar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">{children}</main>
    </div>
  );
}

export default Layout;
