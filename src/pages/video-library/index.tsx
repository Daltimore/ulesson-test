import React from "react";
import { useNavigate } from 'react-router-dom'
import IconComponent from "../../components/Icon";
// import { Video } from 'cloudinary-react';
import PageLayout from "../../layouts/PageLayout"
import ArrowLeft from '../../assets/icons/arrow-left.svg'

const VideoLibrary: React.FC = () => {

  const videoArr = [
    {
      name: 'Recognising Living things',
      lesson: 'Lesson 1',
      icon: 'lesson1',
      videoUrl: 'https://res.cloudinary.com/www-pluslitedesigns-org/video/upload/v1701773952/BIO10_01_01_01_RV_qpw65a.mp4'
    },
    {
      name: 'Recognising Living things 2',
      lesson: 'Lesson 2',
      icon: 'lesson2',
      videoUrl: 'https://res.cloudinary.com/www-pluslitedesigns-org/video/upload/v1701773950/BIO10_01_02_01_RV_wllml1.mp4'
    },
    {
      name: 'Calculations on Maginification and Resolution',
      lesson: 'Lesson 3',
      icon: 'lesson3',
      videoUrl: 'https://res.cloudinary.com/www-pluslitedesigns-org/video/upload/v1701773950/BIO10_03_01_06_NEW_u2oo0m.mp4'
    },
    {
      name: 'Three Domains of Life',
      lesson: 'Lesson 4',
      icon: 'lesson4',
      videoUrl: 'https://res.cloudinary.com/www-pluslitedesigns-org/video/upload/v1701773950/BIO10_02_07_02_tvrsx7.mp4'
    },
    {
      name: 'Kingdom or Domain?',
      lesson: 'Lesson 5',
      icon: 'lesson5',
      videoUrl: 'https://res.cloudinary.com/www-pluslitedesigns-org/video/upload/v1701773949/BIO10_02_07_01_ydc4em.mp4'
    },
  ]

  const navigate = useNavigate()

  const viewVideo = (videoId: string) => {
    navigate('/video-library/chapters', {state:{video_url: videoId}})
  }

  return (
    <PageLayout>
      <div className="px-[52px] py-20 bg-[#EDEDEE] h-screen">
        <div className="flex justify-between items-center">
          <div className="flex gap-8">
            <img src={ArrowLeft} alt="" className="cursor-pointer" onClick={() => navigate(-1)} />
            <div className="flex flex-col gap-1">
              <h3 className="text-[#313848] font-bold text-2xl">Biology</h3>
              <p className="text-[#313848] text-sm font-bold text-opacity-50">5 Chapters / 14 lessons</p>
            </div>
          </div>
        </div>

        <div className="pt-9">
          <h4 className="text-[#313848] text-lg pb-6 font-bold">All Chapters</h4>
          <div className="grid grid-cols-4 gap-7">
            {
              videoArr && videoArr.map((video: any, index: number) => (
                <div onClick={() => viewVideo(video.videoUrl)} key={index} className="bg-[#ffffff] cursor-pointer flex justify-center items-center flex-col rounded-xl px-6 pt-6">
                  <IconComponent name={video.icon} />
                  <p className="capitalize text-[#313848] text-sm font-bold text-opacity-50 pb-4">chapter { index + 1 }</p>
                  <p className="text-center text-[#313848] font-bold pb-8">{ video.name }</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default VideoLibrary