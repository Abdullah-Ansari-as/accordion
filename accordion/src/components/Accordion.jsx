import React, { useEffect, useState } from 'react'
import Faq from '../Api/Faq.json'
import FAQ from './FAQ'


function Accordion() {

    const [data, setData] = useState([])
    
    const [isActiveId, setIsActiveId] = useState(false)

    useEffect(() => {
        setData(Faq)
    }, [])

    const handletogglebtn = (id) => {
        setIsActiveId((prevId) => (prevId === id ? false : id)) 
        
    }

    return (
        <div>
            <h1>The Accordion</h1>
            <ul className='section-accordion'>
                {
                    data.map((curData) => {
                        
                        return (
                            <FAQ
                             key={curData.id} 
                             curData={curData}
                             isActive={isActiveId === curData.id}
                             onToggle={() => handletogglebtn(curData.id)}
                             />
                        )

                    })
                }
            </ul>
        </div>
    )
}

export default Accordion
