import React from 'react';

function Header() {
  const date = new Date();

  let month = date.toLocaleString('default', { month: 'long' });

  let year = date.getFullYear();
  return (
    <div>
      <div className="header">
        <h2>
          {month}, {year}
        </h2>
        <div className="btns">
          <button> Prev week</button>
          <button> Next Week</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
