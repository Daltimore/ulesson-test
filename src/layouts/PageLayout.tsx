import React from "react";
import { ReactBaseModel } from '../models/ReactBase.class'
import SidebarComponent from "../components/Sidebar";

const Dashboardlayout: React.FC<ReactBaseModel> = ({ children }) => {
  return (
    <main className="flex">
      <div>
        <SidebarComponent />
      </div>
      <div className="w-full h-full">
        {children}
      </div>
    </main>
  )
}

export default Dashboardlayout