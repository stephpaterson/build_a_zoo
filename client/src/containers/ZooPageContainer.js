import { useState, useEffect } from "react";

import ZooContainer from "../components/ZooContainer";

import { getAnimals } from "../AnimalService";
import { useContext } from "react";
import UserContext from '../context/UserContext';

const ZooPageContainer = () => {

    const [zooAnimals, setZooAnimals] = useState([]);

    const {zooKeeperName} = useContext(UserContext)

    useEffect(() => {
        getZooAnimals()
    }, [])

    const getZooAnimals = () => {
        getAnimals()
        .then(data => setZooAnimals(data))
    }

    const removeAnimal = (id) => {
        const temp = zooAnimals.filter((animal)=>{
            return animal._id !== id
        })
        setZooAnimals(temp)
    }

    return(
        <div classname="zoo-page-div">
        <ZooContainer zooAnimals={zooAnimals} removeAnimal={removeAnimal}/>
        </div>
        
    )
}

export default ZooPageContainer;