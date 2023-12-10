import React, { useEffect } from "react";
import ReactPlayer from 'react-player/lazy'

interface VideoProps {
  videoId?: string;
}

const VideoComponent: React.FC<VideoProps> = ({ videoId }) => {
  
  useEffect(() => {
    const cacheVideoIfWiFi = async () => {
      const navigateObject: any = navigator
      
      const connection = navigateObject.connection || navigateObject.mozConnection || navigateObject.webkitConnection;

      if (connection) {
        
        if (connection.effectiveType) {
          // Cache the video 
         console.log('cache video');
        } else {
          return false
        }
      }
    };

    cacheVideoIfWiFi();
  }, [videoId]);


  return (
    <div className="flex justify-center items-center">
       <ReactPlayer
        url={videoId}
        controls={true}
        width={"100%"}
      />
    </div>
  )
}

export default VideoComponent