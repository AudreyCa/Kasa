import React from "react";
import App from './App';
import Accueil from './Accueil';
import PageError from './PageError';
import APropos from './APropos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Accueil />} />
          <Route path="apropos" element={<APropos />} />
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default Root;