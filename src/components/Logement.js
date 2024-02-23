import '../styles/Logement.scss';
import { useParams, Navigate } from 'react-router-dom';


const Logement = ({ data }) => {

    const { id } = useParams();
    const location = data.find(loc => loc.id === id);
    const tagLoc = location.tags;
    const tags = tagLoc.map((tag, ind) =>
        <p className='tag_item' key={`${tag}-${ind}`}>{tag}</p>);

    if (!location) {
        return <Navigate to="NotFound" replace />;
    }

    return (
        <>
            <section className="containerLogement">
                <img src={location.cover} alt="Aperçu du logement à louer" className='caroussel'/>
                <div className='infos_loc'>
                    <div className='entete_titre'>
                        <h1>{location.title}</h1>
                        <p>{location.location}</p>
                        <div className='tags_container'>{tags}</div>
                    </div>
                    <div className='infos_plus'>
                        <div className='infos_hote'>
                            <p>{location.host.name}</p>
                            <img src={location.host.picture} alt="aperçu du logement" />
                        </div>
                        <p>{location.rating}</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Logement;