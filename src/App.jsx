import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutMain from './layouts/layoutMain';
import Home from './components/Home';
import About from './components/about';
import Computers from './components/computers';
import HostLayout from './components/Host/HostLayout';
import Dashboard from './components/Host/Dashboard';
import Income from './components/Host/Income';
import Review from './components/Host/Review';
import ComPreview from './components/computerPurchase';
import HostCompsDetails from './components/Host/HostCompsDetails';
import HostComps from './components/Host/HostComps';

export default function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* host layout */}
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="comps" element={<HostComps />} />
              <Route path="comps/:id" element={<HostCompsDetails />} />
              <Route path="review" element={<Review />} />
            </Route>
             <Route path="computers" element={<Computers />}/>
             <Route path="computers/:id" element={<ComPreview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
