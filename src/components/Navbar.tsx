import React from "react";
import SearchIcon from '../assets/icons/search.svg'
import NotificationIcon from '../assets/icons/notif.svg'
import Avatar from '../assets/images/avatar.svg'

const NavbarComponent: React.FC = () => {
  return (
    <nav className="bg-[#EDEDEE] border-b border-[#D6D7DA] py-4 px-10 w-full">
      <div className="flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            className="px-10 py-[14px] min-w-[521px] w-full rounded border border-gray-300 focus:outline-none"
            placeholder="What would you like to learn?"
          />
          <img className="absolute top-5 left-3" src={SearchIcon} alt="" />
        </div>
        <div className="flex items-center gap-6">
          {/* <div>
            <select name="" id=""></select>
          </div> */}
          <img src={NotificationIcon} alt="" />
          <img src={Avatar} alt="" className="cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent