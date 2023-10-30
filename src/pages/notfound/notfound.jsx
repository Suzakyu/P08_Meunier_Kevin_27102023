import { Link } from "react-router-dom";
import './notfound.css';

function NotFound() {
    return (
        <section className="content-error">
          <h1 className="title-error">404</h1>
          <p className="text-error">Oups 🙈 La page que vous demandez n'existe pas ...</p>
          <Link to="/" className='link-error'>Retourner sur la page d'accueil</Link>
        </section>
      );
};

export default NotFound;