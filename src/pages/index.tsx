import React from "react";
import Dashboardlayout from "../layouts/DashboardLayout";
import { useNavigate } from 'react-router-dom'
import IconComponent from "../components/Icon";
import BannerImg from '../assets/images/banner.svg'

const DashboardLading: React.FC = () => {

  const navigate = useNavigate()

  const goToVideoLessons = () => {
    navigate('/video-library')
  }

  return (
    <Dashboardlayout>
      <div className="bg-[#EDEDEE] px-10 py-11 h-full">
        <img src={BannerImg} alt="" className="w-full" />
        <div className="py-[60px]">
          <h4 className="text-[#313848] font-bold text-lg pb-6">Watch Video Lessons</h4>
          <div onClick={() => goToVideoLessons()} className="pl-4 pt-4 bg-green-500 rounded-xl w-[180px] h-[80px] bg-opacity-50 cursor-pointer">
            <IconComponent name="biology" />
            <p className="uppercase text-right text-white pr-2 text-xs pt-2">Biology</p>
          </div>
        </div>
      </div>
    </Dashboardlayout>
  )
}

export default DashboardLading