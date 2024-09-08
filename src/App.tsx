// App.tsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import AdressPage from "./pages/AdressFormPage";
import PersonalDetail from "./pages/PersonalDetails";
import ProfilePage from "./pages/ProfilePage";
import ReviewPage from "./pages/ReviewPage";
import DetailsPage from "./pages/DetailsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalDetail />} />
        <Route path="/adress" element={<AdressPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
