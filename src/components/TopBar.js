import React from 'react';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">Logo</div>
      <div className="title">YGDA</div>
      <div className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/announcements">Announcements</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/calendar">Calendar</a></li>
          <li><a href="/learn">Learn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;

