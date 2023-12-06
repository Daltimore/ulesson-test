import React from "react";
import Logo from '../assets/icons/logo.svg'
import { AppRoutes } from '../enums/Routes'
import IconComponent from "./Icon";
import Arrowup from '../assets/icons/arrow-up.svg'

const SidebarComponent: React.FC = () => {
  const sidebarItems = {
    main: [
    {
      name: 'Home',
      icon: 'dashboard',
      route: AppRoutes.landing,
      hasChild: false
    },
    {
      name: 'Live Classes',
      icon: 'liveClasses',
      route: '/#',
      hasChild: true
    },
    {
      name: 'Homework Help',
      icon: 'homework',
      route: '/#',
      hasChild: false,
    },
    {
      name: 'Video Library',
      icon: 'video',
      route: '/video-library',
      hasChild: true
    },
    {
      name: 'Mock Exam',
      icon: 'mock',
      route: '/#',
      hasChild: false
    },
    {
      name: 'Multiplayer Quiz',
      icon: 'multiplayer',
      route: '/#',
      hasChild: false
    },
    {
      name: 'Pratice Exam',
      icon: 'practice',
      route: '/#',
      hasChild: false
    },
    {
      name: 'Notifications',
      icon: 'notifications',
      route: '/#',
      hasChild: false
    },
    {
      name: 'Learning Project',
      icon: 'report',
      route: '/#',
      hasChild: false
    }
  ],
  others: [
    {
      name: 'Buy Learning plan',
      icon: 'cart',
      route: '#',
    },
    {
      name: 'Manage Subscription',
      icon: 'subscriptions',
      route: '#',
    }
  ]
}
  return (
    <aside className="w-[300px] p-6 bg-[#313848] h-screen">
      <div className="py-6">
        <img src={Logo} alt="" />
      </div>
      {
         sidebarItems.main && sidebarItems.main.map((item: any, index: number) => (
          <ul key={index}>
            <li className="relative">
              <a
                href={item.route}
                className={item.route === window.location.pathname ? 'bg-orange-400 rounded flex items-center py-4 pl-4 gap-4 mb-4' : 'flex items-center pl-4 py-4 gap-4'}
                >
                <IconComponent name={item.icon} />
                <p className="text-white text-sm">{ item.name }</p>
                {
                  item.hasChild ? <img src={Arrowup} alt="" className="absolute right-0" /> : ''
                }
              </a>
            </li>
          </ul>
         )) 
      }
      <div className="border-b border-gray-500 my-6"></div>
      {
         sidebarItems.others && sidebarItems.others.map((item: any, index: number) => (
          <ul key={index}>
            <li className="relative">
              <a
                href={item.route}
                className={item.route === window.location.pathname ? 'bg-orange-400 rounded flex items-center py-4 pl-4 gap-4 mb-4' : 'flex items-center pl-4 py-4 gap-4'}
                >
                <IconComponent name={item.icon} />
                <p className="text-white text-sm">{ item.name }</p>
                {
                  item.hasChild ? <img src={Arrowup} alt="" /> : ''
                }
              </a>
            </li>
          </ul>
         )) 
      }
      
    </aside>
  )
}

export default SidebarComponent