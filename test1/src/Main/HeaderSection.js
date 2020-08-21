import React from 'react';
import './HeaderSection.css';

function HeaderSection() {
  return (
    <div className="HeaderSection">
      <div className="Title">Find your movie</div>
      <a className="AddMovie">Add Movie</a>
      <input className="Input" type="text" placeholder="What do you want to watch?"></input>
      <a className="Search">Search</a>
    </div>
  );
}

export default HeaderSection;
