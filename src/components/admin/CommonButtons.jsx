import React from "react";

function CommonButtons({ firstBtn, secondBtn }) {
  return (
    <div className="common_btns">
      <button className="primary_btn">{firstBtn}</button>
      <button className="secondry_btn">{secondBtn}</button>
    </div>
  );
}

export default CommonButtons;
