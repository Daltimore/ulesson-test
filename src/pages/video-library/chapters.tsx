import React from "react";
import { useNavigate } from 'react-router-dom'
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import PageLayout from '../../layouts/PageLayout'
import VideoComponent from "../../components/Video";

interface VideoProps {
  video_id?: string;
}

const Chapters: React.FC<VideoProps> = () => {

  const navigate = useNavigate()
  
  return (
    <PageLayout>
      <div className="px-[52px] py-20 bg-[#EDEDEE] h-screen w-full">
        <div className="mb-6">
          <img src={ArrowLeft} alt="" className="cursor-pointer" onClick={() => navigate(-1)} />
        </div>
        <VideoComponent videoId={'https://res.cloudinary.com/www-pluslitedesigns-org/video/upload/v1701773952/BIO10_01_01_01_RV_qpw65a.mp4'} />
        <div className="flex justify-between items-center">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </PageLayout>
  )
}

export default Chapters