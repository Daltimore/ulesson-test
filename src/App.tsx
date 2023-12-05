import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppRoutes } from './enums/Routes'
import './App.css';

// Pages
import DashboardLanding from './pages/index'

const App: React.FC = () => {
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path={AppRoutes.landing} element={<DashboardLanding />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
