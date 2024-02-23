import '../styles/APropos.scss';
import Back3 from './../assets/Background3.png';
//import React, { useState, useEffect } from 'react';

/* const [isVisible, setIsVisible] = useState(false);
const [svgState, setSvgState] = useState(0);

useEffect(() => {
  const hiddenValueElement = document.querySelector('.hiddenValue');
  if (isVisible) {
    hiddenValueElement.classList.add('slide-in');
  } else {
    hiddenValueElement.classList.remove('slide-in');
  }
}, [isVisible]);

const handleSvgClick = () => {
  setIsVisible(!isVisible);
  setSvgState((prevState) => (prevState ===  0 ?  1 :  0));
}; */
/* onClick={handleSvgClick} sur les  containerVal*/

const APropos = () => {
    return <>
        <section className="containerPropos">
            <div className="headerPropos">
                <img src={Back3} alt="paysage de montagne" />
            </div>
            <div className="valeurs">
                <div className="containerVal">
                    <p>Fiabilité</p>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6.76667C5.73333 6.76667 5.46667 6.63333 5.33333 6.5L0.933333 2.1C0.533333 1.7 0.533333 1.03333 0.933333 0.633333C1.33333 0.233333 2 0.233333 2.4 0.633333L6 4.23333L9.6 0.633333C10 0.233333 10.6667 0.233333 11.0667 0.633333C11.4667 1.03333 11.4667 1.7 11.0667 2.1L6.8 6.36667C6.53333 6.63333 6.26667 6.76667 6 6.76667Z" fill="white" />
                    </svg>
                </div>
                <div className="hiddenValue">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p>
                </div>
                <div className="containerVal">
                    <p>Respect</p>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6.76667C5.73333 6.76667 5.46667 6.63333 5.33333 6.5L0.933333 2.1C0.533333 1.7 0.533333 1.03333 0.933333 0.633333C1.33333 0.233333 2 0.233333 2.4 0.633333L6 4.23333L9.6 0.633333C10 0.233333 10.6667 0.233333 11.0667 0.633333C11.4667 1.03333 11.4667 1.7 11.0667 2.1L6.8 6.36667C6.53333 6.63333 6.26667 6.76667 6 6.76667Z" fill="white" />
                    </svg>
                </div>
                <div className="hiddenValue">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</p>
                </div>
                <div className="containerVal">
                    <p>Service</p>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6.76667C5.73333 6.76667 5.46667 6.63333 5.33333 6.5L0.933333 2.1C0.533333 1.7 0.533333 1.03333 0.933333 0.633333C1.33333 0.233333 2 0.233333 2.4 0.633333L6 4.23333L9.6 0.633333C10 0.233333 10.6667 0.233333 11.0667 0.633333C11.4667 1.03333 11.4667 1.7 11.0667 2.1L6.8 6.36667C6.53333 6.63333 6.26667 6.76667 6 6.76667Z" fill="white" />
                    </svg>
                </div>
                <div className="hiddenValue">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</p>
                </div>
                <div className="containerVal">
                    <p>Sécurité</p>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6.76667C5.73333 6.76667 5.46667 6.63333 5.33333 6.5L0.933333 2.1C0.533333 1.7 0.533333 1.03333 0.933333 0.633333C1.33333 0.233333 2 0.233333 2.4 0.633333L6 4.23333L9.6 0.633333C10 0.233333 10.6667 0.233333 11.0667 0.633333C11.4667 1.03333 11.4667 1.7 11.0667 2.1L6.8 6.36667C6.53333 6.63333 6.26667 6.76667 6 6.76667Z" fill="white" />
                    </svg>
                </div>
                <div className="hiddenValue">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, celà permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
            </div>
        </section>
    </>

};

export default APropos;