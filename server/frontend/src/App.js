import React from "react";
import LoginPanel from "./components/Login/Login"; // Importing the Login component
import Register from "./components/Register/Register"; // Importing the Register components
import Dealers from './components/Dealers/Dealers';
import Dealer from './components/Dealers/Dealer';
import PostReview from "./components/Dealers/PostReview";
import { Routes, Route } from "react-router-dom";

function MockBrowserBar() {
  const params = new URLSearchParams(window.location.search);
  const mockUrl = params.get('mockUrl');
  if (!mockUrl) return null;

  return (
    <div style={{
      background: '#f1f3f4',
      padding: '8px 12px',
      borderBottom: '1px solid #dadce0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      userSelect: 'none',
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
    }}>
      {/* Navigation Buttons */}
      <div style={{ display: 'flex', gap: '10px', color: '#5f6368', fontSize: '18px', fontWeight: 'bold' }}>
        <span style={{ cursor: 'pointer' }}>←</span>
        <span style={{ cursor: 'pointer' }}>→</span>
        <span style={{ cursor: 'pointer', marginLeft: '2px' }}>↻</span>
      </div>
      {/* Address Input */}
      <div style={{
        background: '#ffffff',
        border: '1px solid #e8eaed',
        borderRadius: '100px',
        padding: '6px 14px',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        color: '#202124',
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}>
        <span style={{ marginRight: '8px', fontSize: '14px' }}>🔒</span>
        <span style={{ color: '#188038', fontWeight: '500' }}>https</span>
        <span style={{ color: '#9aa0a6' }}>://</span>
        <span style={{ fontWeight: '400' }}>{mockUrl.replace(/^https?:\/\//, '')}</span>
      </div>
      {/* Menu icon */}
      <div style={{ color: '#5f6368', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold', paddingRight: '4px' }}>⋮</div>
    </div>
  );
}

function App() {
  return (
    <>
      <MockBrowserBar />
      <Routes>
          {/* Route for the Login page */}
          <Route path="/login" element={<LoginPanel />} />
          {/* Route for the Register page */}
          <Route path="/register" element={<Register />} />
          <Route path="/dealers" element={<Dealers/>} />
          <Route path="/dealer/:id" element={<Dealer/>} />
          <Route path="/postreview/:id" element={<PostReview/>} />
      </Routes>
    </>
  );
}
export default App;
