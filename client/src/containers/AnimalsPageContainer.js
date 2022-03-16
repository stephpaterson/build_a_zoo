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
        const temp = fetchedAnimals.filter((animal)=>{
            return animal.id !== id
        })
        setFetchedAnimals(temp)
    }   


    return(
        <>
        <div className="animal-header">
            <h1>Choose some animals for your zoo.</h1>
            </div>
            <button className="discover-bttn" onClick={getAnimals}>Discover More Animals</button>
        
        <AnimalsContainer fetchedAnimals={fetchedAnimals} removeFetchedAnimal={removeFetchedAnimal}/>
            
        </>

    )
}

export default AnimalPageContainer;