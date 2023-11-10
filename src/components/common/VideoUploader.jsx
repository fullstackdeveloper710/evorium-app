import React, { useCallback, useState } from "react";
import { Image } from "react-bootstrap";
import Dropzone, { useDropzone } from "react-dropzone";
import { thumbnail } from "../../assets/images/admin";
import { upload } from "../../assets/icons/admin";

const VideoUploader = () => {
  const [video, setVideo] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setVideo(file);

    const videoBlob = URL.createObjectURL(file);

    const video = document.createElement("video");
    video.src = videoBlob;

    video.addEventListener("loadeddata", () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      // Set canvas dimensions
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Append canvas to the document (optional)
      document.body.appendChild(canvas);

      const thumbnailTimes = [15, 70, 50, 100];
      const thumbnails = [];

      // Helper function to capture a frame
      const captureFrame = async (time) => {
        return await new Promise((resolve) => {
          video.currentTime = (time / 100) * video.duration;

          // Wait for the video to seek to the specified time
          video.addEventListener("seeked", () => {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const thumbnailDataUrl = canvas.toDataURL("image/png");
            thumbnails.push(thumbnailDataUrl);
            resolve();
          });

          // If seeking fails (e.g., due to CORS issues), resolve immediately
          video.addEventListener("error", () => resolve());
        });
      };

      // Capture frames at specified intervals
      Promise.all(thumbnailTimes.map(captureFrame)).then(() => {
        // Update state with generated thumbnails
        setThumbnails(thumbnails);

        // Cleanup: Remove the canvas and stop the video
        document.body.removeChild(canvas);
        video.pause();
      });
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div
        className="video_upload_wrap"
        {...getRootProps()}
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={dropzoneStyles}
      >
        <div className="upload_input">
          <input
            type="file"
            id="video"
            className="d-none"
            {...getInputProps()}
          />
          <label for="video">
            <Image src={upload} />
            <span className="upload_title">Upload Video</span>
          </label>
        </div>

        <div className="uploaded_videos_wrap d-none">
          <Image src={video} />
          {/* video here */}
          <div className="loader_block">
            <span className="loader">80%</span>
          </div>
        </div>
      </div>
      {video && (
        <div className="select_thumbnail">
          <p>Select Thumbnail</p>
          <div className="select_thumbnail_imgs">
            {thumbnails.map((thumbnail, index) => (
              <button className="thumbnail_link" key={index}>
                <Image src={thumbnail} alt={`Thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
          <button className="done_btn">Done</button>
        </div>
      )}
    </>
  );
};

const dropzoneStyles = {
  border: "none",
  borderRadius: "4px",
  textAlign: "center",
  padding: "20px",
  cursor: "pointer",
};

export default VideoUploader;
