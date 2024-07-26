import React, { Fragment, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Dashboard from '../pages/Dashboard';
import Courses from '../pages/Courses';
import Newcourse from '../pages/Newcourse';
import appContext from '../context/appContext';
import Profile from '../pages/Profile';
import Footer from '../components/Footer';
import LeaderBoard from '../components/LeaderBoard';

function Router() {
  const { State } = useContext(appContext);
  const {
    WalletAddress,
    isAdmin
  } = State;

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' index element={<Dashboard />} />
          <Route path='/courses' element={WalletAddress ? <Courses /> : <Dashboard />} />
          <Route path='/new-course' element={WalletAddress && isAdmin ? <Newcourse /> : <Dashboard />} />
          <Route path='/profile' element={WalletAddress ? <Profile /> : <Dashboard />} />
          <Route path='/dashboard' element={WalletAddress ? <LeaderBoard /> : <Dashboard />} /> {/* Conditionally render LeaderBoard */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default Router;
