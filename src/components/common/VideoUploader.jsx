import React, { useState } from "react";
import Dropzone from "react-dropzone";

const VideoUploader = () => {
  const [video, setVideo] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);

  const handleVideoUpload = (acceptedFiles) => {
    const selectedVideo = acceptedFiles[0];
    setVideo(selectedVideo);

    const timeIntervals = [50, 10, 15, 20, 25]; // Capture thumbnails at these time intervals

    const videoRef = document.createElement("video");
    videoRef.src = URL.createObjectURL(selectedVideo);
    videoRef.load();

    const canvas = document.createElement("canvas");
    canvas.width = 160;
    canvas.height = 90;
    const context = canvas.getContext("2d");

    const captureThumbnails = () => {
      const thumbnailImages = timeIntervals.map((interval) => {
        videoRef.currentTime = interval;
        context.drawImage(videoRef, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL("image/jpeg");
      });
      console.log(thumbnailImages);
      setThumbnails(thumbnailImages);
    };

    videoRef.addEventListener("loadeddata", captureThumbnails);
  };

  return (
    <div>
      <Dropzone onDrop={handleVideoUpload}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} />
            <p>Drag & drop a video file here, or click to select one</p>
          </div>
        )}
      </Dropzone>
      {console.log(thumbnails)}
      {video && (
        <div>
          {thumbnails.map((thumbnail, index) => (
            <div key={index}>
              <img src={thumbnail} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: "2px dashed #ccc",
  borderRadius: "4px",
  textAlign: "center",
  padding: "20px",
  cursor: "pointer",
};

export default VideoUploader;

// <p>Uploaded Video:</p>
// <video controls width="320">
//   <source src={URL.createObjectURL(video)} type={video.type} />
// </video>
