import React from "react";
import { Image } from "react-bootstrap";
import { checked, paused } from "../../assets/icons/user";

const Card = (props) => {
  const {
    onClick,
    title,
    video_duration,
    views,
    watched,
    description,
    subsType,
    amount,
    thumbnail_url,
  } = props;
  return (
    <div onClick={onClick} className="subs-card free-card">
      <div className="card-wrapper">
        <div className="img-wrap">
          {/* <ReactPlayer url={url} width={'100%'} light={true} className="bg-img"  /> */}
          <div className="bg-img">
            <img src={thumbnail_url} />
          </div>

          {subsType === "free" ? (
            <span className="free-btn">{subsType}</span>
          ) : (
            <span className="premium-btn">{amount}</span>
          )}

          <Image src={watched ? checked : paused} className="label-watch" />
        </div>
        <div className="bottom-details">
          <p className="name">{title}</p>
          <a href="#" className="link-card">
            {description}
          </a>
          <div className="time-view">
            <span className="mins">{video_duration} mins </span>
            <span className="views">{views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
