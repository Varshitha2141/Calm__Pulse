import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';

import About from './pages/AboutPage.js';
import Chat from './pages/ChatPage.js';
import Journal from './pages/JournalPage.js';
import Resources from './pages/ResourcesPage.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/chat" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
}

export default App;
