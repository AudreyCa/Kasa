import '../styles/PageError.scss';
import { NavLink } from 'react-router-dom';


const PageError = () => {
    return <>
        <section className="error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas</p>
            <NavLink to="/kasa" className="backToHome">Retourner sur la page d'accueil</NavLink>
        </ section>
    </>

};

export default PageError;