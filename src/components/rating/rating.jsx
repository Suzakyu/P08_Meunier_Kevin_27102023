
import './rating.css';

import staractive from '../../assets/star-active.png';
import starinactive from '../../assets/star-inactive.png';


// Composant Rating > affiche les étoiles en fonction de la note
// Props : rating (note de 1 à 5)
function Rating({ rating }) { 
   const stars = []; // Creer un tableau pour stocker les étoiles
 
   for (let i = 1; i <= 5; i++) { // Boucle pour afficher les étoiles
      if (i <= rating) { // Tant que i est inférieur ou égal à la note
         stars.push(<img className='stars' key={i} src={staractive} alt="star-filled" />);
      } else { // Sinon on affiche une étoile vide
         stars.push(<img className='stars' key={i} src={starinactive} alt="star-empty" />);
      }
   }

   return <div>{stars}</div>; // Retourne les etoiles
}
export default Rating;