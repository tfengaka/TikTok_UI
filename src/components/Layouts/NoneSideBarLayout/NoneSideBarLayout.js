import React from 'react';
import Header from '../components/Header/Header';

function NoneSideBarLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default NoneSideBarLayout;
