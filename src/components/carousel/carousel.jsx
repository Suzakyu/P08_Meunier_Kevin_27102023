
import React, { useState } from 'react';
import './carousel.css';


import arrowright from '../../assets/arrow-right.png';
import arrowleft from '../../assets/arrow-left.png';



// Props : images du slider a afficher
function Carousel({ images }) { 
   const [currentIndex, setCurrentIndex] = useState(0); // State > Index de l'image actuelle

   function goToNextImage() { // Passe a l'image suivante
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
   };

   function goToPreviousImage() { // Passe a l'image precedente
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
   };


   return (
      <section className='carousel-content'>
         
         {images.length > 1  // Si il n'y a qu'une seul image, on n'affiche seulement l'image
         &&
         <> 
            {/* // Affiche le compteur d'image */}
            <p className='compteur'>{currentIndex + 1} / {images.length}</p> 
            
            {/* // Affiche les fleches de navigation, au click on passe a l'image suivante ou precedente */}
            <img className='arrowleft' src={arrowleft} alt="Flèche gauche" onClick={goToNextImage} />
            <img className='arrowright' src={arrowright} alt="Flèche droite" onClick={goToPreviousImage} /> 
         </>
         }
         
         {/* // Affiche l'image actuelle en fonction de l'index */}
         <img className='img-carousel' src={images[currentIndex]} alt="Logement" /> 


      </section>
   )
}

export default Carousel;