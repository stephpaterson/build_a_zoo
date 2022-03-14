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
        const temp = [...zooAnimals]
        const indexToDel = temp.indexOf(id)
        temp.splice(indexToDel, 1)
        setZooAnimals([...temp])
    }

    return(
        <>
        <h1>{zooKeeperName}'s Zoo</h1>
        <ZooContainer zooAnimals={zooAnimals} removeAnimal={removeAnimal}/>
        </>
        
    )
}

export default ZooPageContainer;