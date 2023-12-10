import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppRoutes } from './enums/Routes'
import './App.css';

// Pages
import LoginPage from './pages/login'
import DashboardLanding from './pages/index'
import VideoLibrary from './pages/video-library/index'
import ChapterPage from './pages/video-library/chapters'

const App: React.FC = () => {
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path={AppRoutes.login} element={<LoginPage />} />
          <Route path={AppRoutes.landing} element={<DashboardLanding />} />
          <Route path={AppRoutes.videoLibrary} element={<VideoLibrary />} />
          <Route path={AppRoutes.chapters} element={<ChapterPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
