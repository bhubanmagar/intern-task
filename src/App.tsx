// App.tsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import AdressPage from "./pages/AdressFormPage";
import PersonalDetail from "./pages/PersonalDetails";
import ProfilePage from "./pages/ProfilePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalDetail />} />
        <Route path="/adress" element={<AdressPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
