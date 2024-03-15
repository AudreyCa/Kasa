import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import '../styles/Logement.scss';
import Collapse from './Collapse';


const Logement = ({ data }) => {

    /* ScrollToTop */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    /* Pour afficher les data du projet : */
    const { id } = useParams();
    const location = data.find(loc => loc.id === id);
    /* Animation caroussel : */
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % location.pictures.length);
    };
    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + location.pictures.length) % location.pictures.length);
    };
    /* Pour afficher les tags dynamiquement : */
    const tagLoc = location.tags;
    const tags = tagLoc.map((tag, ind) =>
        <p className='tag_item' key={`${tag}-${ind}`}>{tag}</p>);
    /* Pour afficher les équiements les uns en desous des autres : */
    const equipements = location.equipments;
    const equipement = equipements.map((eq, ind) =>
        <ul key={`${eq}-${ind}`}>
            <li>{eq}</li>
        </ul>);
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
    /* Gère l'erreur sur l'id d'une propriété */
    if (!location) {
        return <Navigate to="/kasa/404" replace />;
    }

    return (
        <>
            <section className="containerLogement">
                <div className='caroussel_container'>
                    {location.pictures.length > 1 ? (
                        <>
                            <button className='arrows prevArrow' onClick={prevImage}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                                </svg>
                            </button>
                            <button className='arrows nextArrow' onClick={nextImage}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                </svg>
                            </button>
                            <div className="image_numerotation">
                                {currentIndex + 1}/{location.pictures.length}
                            </div>
                        </>
                    ) : null}

                    <img src={location.pictures[currentIndex]} alt="Aperçu du logement à louer" className='cover_logements' />
                </div>
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