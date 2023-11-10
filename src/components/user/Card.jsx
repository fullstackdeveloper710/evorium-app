import React from "react";
import { Image } from "react-bootstrap";
import { checked, paused } from "../../assets/icons/user";
import { video1 } from "../../assets/images/user";
import Moment from "react-moment";
import { useNavigate } from "react-router";
import { ROUTES } from "../../navigation/constants";

const Card = (props) => {
  const {
    onClick,
    title,
    img,
    video_duration,
    views,
    watched,
    description,
    subsType,
    amount,
    url,
    thumbnail_url,
    speaker,
    episodes,
    price,
    key,
    video_id,
    course_type
  } = props;
  const navigate = useNavigate();

  

  const data2send = {
    video_id,
    key,
    title,
    img,
    video_duration,
    views,
    watched,
    description,
    subsType,
    url,
    thumbnail_url,
    speaker,
    episodes,
    price,
    course_type
  };


  const { usrVideoPlayer } = ROUTES;
  return (
    <div
      onClick={() => {
        onClick();
        // window.open(`/videoplayer?${video1}?type=${subsType}`, "_self")
        navigate(usrVideoPlayer, {
          state: { data2send },
        });
      }}
      className="subs-card free-card"
    >
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
