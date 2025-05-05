import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'
import LandingPage from './LandingPage';
import RequireAuth from 'C:/Users/Jack/AutoPlan/AutoPlan/src/RequireAuth';
import UserPage from './UserPage';

function App() {
  
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={
          <RequireAuth>
          <UserPage />
          </RequireAuth>
          } />
      </Routes>
  );
}

export default App;
