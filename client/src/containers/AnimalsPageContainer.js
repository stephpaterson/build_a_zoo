import { useEffect, useState } from "react";
import AnimalsContainer from "../components/AnimalsContainer";


const AnimalPageContainer = () =>{

    const [fetchedAnimals, setFetchedAnimals] = useState([])

    useEffect(() => {
        getAnimals()
        removeFetchedAnimal()
    }, [])

    const getAnimals =  () => {
        fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
        .then(res => res.json())
        .then(data => setFetchedAnimals(data))
    } 

    const removeFetchedAnimal = (id) => {
        const temp = fetchedAnimals.map(s => s)
        const indexToDel = temp.map(s => s._id).indexOf(id)
        temp.splice(indexToDel, 1)
        setFetchedAnimals(temp)
    }   


    return(
        <>
            <h1>Choose your animal to go to your zoo</h1>

            <AnimalsContainer fetchedAnimals={fetchedAnimals} removeFetchedAnimal={removeFetchedAnimal}/>
            <button onClick={getAnimals}>Show me more animals</button>
        </>

    )
}

export default AnimalPageContainer;