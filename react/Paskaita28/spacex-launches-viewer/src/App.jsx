import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LaunchList from './components/LaunchList';
import LaunchDetails from './components/LaunchDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<LaunchList />} />
        <Route path="/launch/:id" element={<LaunchDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
