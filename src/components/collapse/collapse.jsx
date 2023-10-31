import {useState} from 'react';
import './collapse.css';

import arrowdown from '../../assets/arrow-down.png';
import arrowup from '../../assets/arrow-up.png';

function Collapse({ data }) {
    const [openIndexes, setOpenIndexes] = useState([])
  
    const toggleCollapse = (index) => {
      const currentIndex = openIndexes.indexOf(index)
      const newOpenIndexes = [...openIndexes]
  
      if (currentIndex === -1) {
        newOpenIndexes.push(index)
      } else {
        newOpenIndexes.splice(currentIndex, 1)
      }
  
      setOpenIndexes(newOpenIndexes)
    }
  
    const numCollapses = data.length
    const containerClass = numCollapses === 2 ? 'collapse-home' : 'collapse-next'

    return (
        <div className={containerClass}>
          {data.map((collapse, index) => (
            <div className="content-collapse" key={index}>
              <div className="tittle-content" onClick={() => toggleCollapse(index)}>
                <h3 className='tittle-collapse'>{collapse.title}</h3>
                {openIndexes.includes(index) ? (
                  <img src={arrowup} alt="arrow" />
                ) : (
                   <img src={arrowdown} alt="arrow" />
                )}
              </div>
              
              {openIndexes.includes(index) && (
                <div className="text-collapse">{collapse.text}</div>
              )}
            </div>
          ))}
        </div>
      )
    }
    
    export default Collapse