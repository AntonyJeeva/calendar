import React from 'react';

function Week() {
  const date = new Date();

  let todayDate = date.getDate();

  let todayDay = date.toLocaleString('default', { weekday: 'long' });

  return (
    <div className="week">
      <div className="datebox">
        <div class="flex-box">
          <div class="box">
            <h6>{todayDate}</h6>
            <h6> {todayDay}</h6>
          </div>
          <div class="box">
            <h6> 2</h6>
            <h6> Thursday</h6>
          </div>
          <div class="box">
            <h6>3</h6>
            <h6> Friday</h6>
          </div>
          <div class="box">
            <h6>4</h6>
            <h6> Saturday</h6>
          </div>
          <div class="box">
            <h6>5</h6>
            <h6>Sunday</h6>
          </div>
          <div class="box">
            <h6>6</h6>
            <h6> Monday</h6>
          </div>
          <div class="box">
            <h6>7</h6>
            <h6>Tuesday</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week;
