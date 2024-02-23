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
        <Route path="/" element={<App />}>
          <Route path="" element={<Accueil data={data}/>} />
          <Route path="logement/:id" element={<Logement id={data.id} data={data}/>} />
          <Route path="apropos" element={<APropos />} />
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Root;