import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './logement.css';


import Error from '../../pages/notfound/notfound';
import Carousel from '../../components/carousel/carousel';
import Rating from '../../components/rating/rating';
import Collapse from '../../components/collapse/collapse';


import Location from '../../assets/location.json';



// Page Logement 
function Logement() {
   const [logement, setLogement] = useState(null); 
   const { id } = useParams(); // Récupère l'id du logement dans l'url

   useEffect(() => {  // Récupère les infos du logement en fonction de l'id
      const data = Location.find(location => location.id === id);
      if (data) {
      setLogement(data);
   } else { 
      setLogement(null);
   }
   }, [id]);

   if (!logement) { // Si l'id n'existe pas, affiche la page d'erreur
      return (<Error />);
   }

   // Créer un JSON pour le passer en props au composant Collapsehome
   const data = [
      {
         title: 'Description',
         text: logement.description
      },
      {
         title: 'Equipements',
         // Créer une liste avec les équipements
         text: logement.equipments.map(equipment => (
            <p className='text-collapse' key={equipment}>{equipment}</p>
         ))
      }
   ]


   return ( 
      <>
         {logement.pictures && <Carousel images={logement.pictures} />}

         <section className='content-info'>

            <div className='content-info-logement'>
               <h1 className='tittle-info'>{logement.title}</h1>
               <p className='text-info'>{logement.location}</p>
               <ul className='tagUl'>
                  {logement.tags.map(tag => (
                     <li className='tagLi' key={tag}>{tag}</li>
                  ))}
               </ul>
            </div>

            <div className='content-info-owner'>
               <div className='test'>
                  <p className='text-info-owner'>{logement.host.name}</p>
                  <img className='img-owner' src={logement.host.picture} alt={logement.host.name} />
               </div>

               <Rating rating={logement.rating} />
            </div>

         </section>

         <Collapse data={data}/>

      </>
  );
}


export default Logement;