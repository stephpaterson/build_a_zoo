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
            return (
            <div className="info-background">
            <h3>Welcome to the Zoo at day time!</h3>
            <p>
            Some animals, like humans, are active during the day and they are called diurnal animals. This means that they eat and play during the day and sleep at night. They are the opposite of nocturnal animals who are active during the night.
            Learn all about the diurnal animals in your zoo.
            </p>
            </div>
            )
        }
        if (whatZoo === 'Nocturnal') {
            return (
                <div className="info-background">
                <h3>Welcome to the Zoo at night time!</h3>
                <p>
                Some animals are active during the night, these are called nocturnal animals. They are active during the night and sleep during the day time. They are the opposite of diurnal animals who are active during the day.
                Learn all about the nocturnal animals in your zoo.
                </p>
                </div>
                )
        }
    }



    return (

            <div className="zoo-buttons-and-animals-container">
                <div className="zoo-button-container">
                <h1>View My Animals</h1>
                    <div className="zoo-button-flex">
                    <button className="zoo-buttons" onClick={handleClick} value=''>Show all the animals</button>
                    <button className="zoo-buttons" onClick={handleClick} value='Diurnal'>Visit zoo in the daytime</button>
                    <button className="zoo-buttons" onClick={handleClick} value='Nocturnal'>Visit zoo at night</button>
                    </div>
                </div>
                <div className="centre-info">
                    <div className="show-info">{showInfo()}</div>
                    <div className="zoo-animals-container">
                        {returnRightZooComponent()}
                    </div>
                </div>
            </div>
    )
}

export default ZooContainer;