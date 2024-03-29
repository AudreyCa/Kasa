import React, { useState, useEffect } from "react";
import axios from 'axios';
import App from '../App/App';
import Accueil from '../Accueil/Accueil';
import Logement from '../Logement/Logement';
import APropos from '../APropos/APropos';
import PageError from '../PageError/PageError';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const Root = () => {

  //Import des données via un fichier.json avant une vraie connexion au backend.
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/Data_Kasa.json")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <Navigate to="/404" replace />;
  }
  if (!data) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Accueil data={data} />} />
          <Route path="/logement/:id" element={<Logement id={data.id} data={data} />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path='/404' element={<PageError />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;