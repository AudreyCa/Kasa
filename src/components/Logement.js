import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import '../styles/Logement.scss';
import Collapse from './Collapse';


const Logement = ({ data }) => {

    /* Pour afficher les data du projet : */
    const { id } = useParams();
    const location = data.find(loc => loc.id === id);
    /* Pour afficher les tags dynamiquement : */
    const tagLoc = location.tags;
    const tags = tagLoc.map((tag, ind) =>
        <p className='tag_item' key={`${tag}-${ind}`}>{tag}</p>);
    /* Pour afficher les équiements les uns en desous des autres : */
    const equipements = location.equipments;
    const equipement = equipements.map((eq, ind) =>
    <div>
    <span key={`${eq}-${ind}`}>{eq}</span>
    </div> );
    /* Pour afficher les étoiles de notation : */
    const note = location.rating;
    const [rating] = useState(note);
    /* Contenu collapse */
    const itemsLogement = [
        {
            titreCol: "Description",
            contentCol: location.description
        },
        {
            titreCol: "Equipements",
            contentCol: equipement
        }
    ]
    /* Gère le fait qu'il y ait une erreur dans les datas */
    if (!location) {
        return <Navigate to="NotFound" replace />;
    }

    return (
        <>
            <section className="containerLogement">
                <img src={location.cover} alt="Aperçu du logement à louer" className='caroussel' />
                <div className='infos_loc'>
                    <div className='entete_titre'>
                        <h1>{location.title}</h1>
                        {<p>{location.location}</p>}
                        <div className='tags_container'>{tags}</div>
                    </div>
                    <div className='infos_plus'>
                        <div className='infos_hote'>
                            <p>{location.host.name}</p>
                            <img src={location.host.picture} alt="aperçu du logement" />
                        </div>
                        <div className="notation">
                            {[...Array(5)].map((_star, index) => {
                                index += 1;
                                return (
                                    <span
                                        key={index}
                                        className={index <= rating ? "star active" : "star inactive"}
                                    >
                                        &#9733;
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className='accordeons'>
                        <Collapse itemsCol={itemsLogement} />
                </div>
            </section>
        </>
    );
}

export default Logement;