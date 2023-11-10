// Import React 
import React from 'react';

// Other Imports
import {HashRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './components/style.css';

// Component Imports 
import Navbar from './components/Navbar';
import { Home, About, Info, Upload, Contact, Project, Sidebar } from './components/Navcomponents';

function App() {

  return (
    <div>
      <HashRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />  
          <Route path="/info" element={<Info />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      
      </HashRouter>
    </div>
  );

}

export default App;