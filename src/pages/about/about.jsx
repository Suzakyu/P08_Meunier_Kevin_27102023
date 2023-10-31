
import './about.css'


import Collapse from '../../components/collapse/collapse'


import banner from '../../assets/banner-about.png'
import data from '../../assets/collapse.json'



function About() {
   return (
      <section>
         <img className='content-banner' alt='Paysage' src={banner} />
         <Collapse data={data}/>
      </section>
   )
 }
 
 export default About