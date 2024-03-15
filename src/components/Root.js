import React from "react";
import App from './App';
import Accueil from './Accueil';
import Logement from './Logement';
import APropos from './APropos';
import PageError from './PageError';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from './../assets/bdd-projet6.json';


const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/kasa" element={<App />}>
          <Route path="/kasa" element={<Accueil data={data}/>} />
          <Route path="/kasa/logement/:id" element={<Logement id={data.id} data={data}/>} />
          <Route path="/kasa/apropos" element={<APropos />} />
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Root;