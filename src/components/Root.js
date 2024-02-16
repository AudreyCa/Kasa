import React from "react";
import App from './App';
import Accueil from './Accueil';
import Logement from './Logement';
import APropos from './APropos';
import PageError from './PageError';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* <Route path="logement:id" element={<Logement//ici : mettre une réf id// />} /> */

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Accueil />} />
          <Route path="logement" element={<Logement />} />
          <Route path="apropos" element={<APropos />} />
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Root;