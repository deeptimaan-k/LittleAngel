import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Features from './components/Features';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import VirtualTourPage from './pages/VirtualTourPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Hero />
            <Programs />
            <Features />
          </Layout>
        } />
        <Route path="/aboutus/:section" element={
          <Layout>
            <AboutPage />
          </Layout>
        } />
        <Route path="/programs/:program" element={
          <Layout>
            <ProgramsPage />
          </Layout>
        } />
        <Route path="/admissions/:section" element={
          <Layout>
            <AdmissionsPage />
          </Layout>
        } />
        <Route path="/facilities/:section" element={
          <Layout>
            <FacilitiesPage />
          </Layout>
        } />
        <Route path="/virtual-tour" element={
          <Layout>
            <VirtualTourPage />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;