import './home.css'

import Card from '../../components/card/card'
import banner from '../../assets/banner-home.png'

function Home() {
    return (
        <section>

            <div className='content-banner'>
                <img className='banner-img' src={banner} alt='paysage'/>
            </div>

            <Card/>

        </section>
    )
}

export default Home;