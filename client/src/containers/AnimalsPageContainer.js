import { useEffect, useState } from "react";
import AnimalsContainer from "../components/AnimalsContainer";

const AnimalPageContainer = () =>{

    const [fetchedAnimals, setFetchedAnimals] = useState([])
    const [addAnmial, setAddAnimal] = useState(null)

    useEffect(() => {
        getAnimals()
    }, [])

    const getAnimals =  () => {
        fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
        .then(res => res.json())
        .then(data => setFetchedAnimals(data))
    }       


    return(
        <>
            <h1>Choose your animal to go to your zoo</h1>

            <AnimalsContainer fetchedAnimals={fetchedAnimals} setAddAnimal={setAddAnimal}/>
            <button onClick={getAnimals}>Show me more animals</button>
        </>

    )
}

export default AnimalPageContainer;