import { useState } from 'react';
import '../styles/Collapse.scss';

const Collapse = ({ itemsCol }) => {
    /* L'animation du contenu du collapse */
    const [openCollapse, setOpenCollapse] = useState({}); // Chaque clé représente l'index d'un élément, la valeur indique s'il est ouvert (true) ou fermé (false)

    /* Gestion du clic */
    const toggleCollapse = (index) => {
        setOpenCollapse(prevState => ({
            ...prevState, // Prend en compte l'état de chaque collapse pour n'ouvrir ou fermer que celle selectionnée.
            [index]: !prevState[index]
        }));

    };

    return (
        <div className='blocs_info'>
            {itemsCol.map((item, index) => (
                <div key={index} className='bloc_solo' onClick={() => toggleCollapse(index)}>
                    <div className="containerVal">
                        <p>{item.titreCol} </p>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={openCollapse[index] ? 'rotate' : ''}>
                            <path d="M6 6.76667C5.73333 6.76667 5.46667 6.63333 5.33333 6.5L0.933333 2.1C0.533333 1.7 0.533333 1.03333 0.933333 0.633333C1.33333 0.233333 2 0.233333 2.4 0.633333L6 4.23333L9.6 0.633333C10 0.233333 10.6667 0.233333 11.0667 0.633333C11.4667 1.03333 11.4667 1.7 11.0667 2.1L6.8 6.36667C6.53333 6.63333 6.26667 6.76667 6 6.76667Z" fill="white" />
                        </svg>
                    </div>
                    {openCollapse[index] &&
                        <div className="hiddenValue">
                            <div>{item.contentCol}</div>
                        </div>}
                </div>
            ))}
        </div>
    );
};

export default Collapse;
