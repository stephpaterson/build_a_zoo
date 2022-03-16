import "./ZooContainer.css"
import { useState, useContext } from "react"
import ZooAnimal from "./ZooAnimal"
import NightContext from "../context/NightContext"




const ZooContainer = ({zooAnimals, removeAnimal}) => {

   

    const [whatZoo, setWhatZoo] = useState('');

    const { isDarkMode , setIsDarkMode} = useContext(NightContext);

    const handleClick = (event) => {
        setWhatZoo(event.target.value)
        showBackGroundColor(event.target.value)
    }


    const returnRightZooComponent = () => {

    return zooAnimals.filter(animal => {
        return animal.active_time.includes(whatZoo)
        }).map(animal => <ZooAnimal animal={animal} key={animal._id} removeAnimal={removeAnimal} />)
    }

    const showBackGroundColor = (option) => {
        if (option === '') {
            setIsDarkMode(false)
        }
        if (option === 'Diurnal') {
            setIsDarkMode(false)
        }
        if (option === 'Nocturnal') {
            setIsDarkMode(true)
        }
    }

    const showInfo = () => {

        if (whatZoo === 'Diurnal') {
            return <p>Diurnal Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, hic. Sint voluptatibus sapiente iusto voluptates, atque rem a odio deleniti velit eveniet eum quis quae.</p>
        }
        if (whatZoo === 'Nocturnal') {
            return <p>Nocturnal Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptas ea ipsa corrupti libero. Non doloremque vitae necessitatibus assumenda excepturi atque dicta quidem. A, molestias.</p>
        }
    }



    return (

        // <div className={showBackGroundColor()}>
            <div className="zoo-buttons-and-animals-container">
                <div className="zoo-button-container">
                <h2>Visit the animals in your zoo</h2>
                <button onClick={handleClick} value=''>Show all the animals</button>
                <button onClick={handleClick} value='Diurnal'>See the animals active in the daytime</button>
                <button onClick={handleClick} value='Nocturnal'>See the animals active at night</button>
                </div>
                <div>{showInfo()}</div>
                <div className="zoo-animals-container">
                    {returnRightZooComponent()}
                </div>
            </div>


        // </div>
    )
}

export default ZooContainer;