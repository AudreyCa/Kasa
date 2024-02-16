import '../styles/Accueil.scss';
import dataP6 from './../assets/bdd-projet6.json';
import Back2 from './../assets/Background2.png';
import { NavLink } from 'react-router-dom';


function Accueil() {

  const data = dataP6;
  const listLoc = data.map((location, index) =>
    <NavLink to="/logement" className="cardLoc" key={`${location}-${index}`}>{location.title}</NavLink>
  );

  return (
    <>
      <div className="containerAcc">
        <div className="headerAcc">
          <img src={Back2} alt="paysage de falaise" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="listeLocation">
          {listLoc}
        </div>
      </div>
    </>
  );
}

export default Accueil;
