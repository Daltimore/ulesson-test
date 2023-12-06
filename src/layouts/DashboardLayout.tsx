import React from "react";
import { ReactBaseModel } from '../models/ReactBase.class'
import SidebarComponent from "../components/Sidebar";
import NavbarComponent from "../components/Navbar";

const Dashboardlayout: React.FC<ReactBaseModel> = ({ children }) => {
  return (
    <main className="flex">
      <div>
        <SidebarComponent />
      </div>
      <div className="flex flex-col w-full">
        <NavbarComponent />
        <div className="h-full">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Dashboardlayout