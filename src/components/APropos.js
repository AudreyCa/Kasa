import '../styles/APropos.scss';
import Back3 from './../assets/Background3.png';
import Collapse from './Collapse';


const APropos = () => {

    /* Contenu collapse */
    const itemsAPropos = [
        {
            titreCol: "Fiabilité",
            contentCol: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
        },
        {
            titreCol: "Respect",
            contentCol: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
        },
        {
            titreCol: "Service",
            contentCol: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
        },
        {
            titreCol: "Sécurité",
            contentCol: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, celà permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]

    return <>
        <section className="containerPropos">
            <div className="headerPropos">
                <img src={Back3} alt="paysage de montagne" />
            </div>
            <div className="valeurs">
                <Collapse itemsCol={itemsAPropos} />
            </div>
        </section>
    </>

};

export default APropos;