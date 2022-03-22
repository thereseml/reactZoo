import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IAnimals } from "../models/IAnimals";

export const ShowAnimal = () => {
    const [animalId, setAnimalId] = useState(0);
    const [storedAnimal, setStoredAnimal] = useState<IAnimals[]>([]);
    const [isFeed, setIsFeed] = useState(false)

    let params = useParams();

    // hämtar id från url
    useEffect(() => {
        if(params.id) {
        setAnimalId(+params.id);
        }
    }, []);

    // hämtar det djur som matchar url
    useEffect(() => {
        const localAnimal = localStorage.getItem("Djurlista")
        if(localAnimal) {
            setStoredAnimal(JSON.parse(localAnimal))
        }
    }, []);

    let AnimalDetails = storedAnimal.map((animal: IAnimals) => {
        if(animalId === animal.id) {
       return (<div  key={animal.id}>
                    <img src={animal.imageUrl} width="300px"/>
                    <h3>{animal.name}</h3>
                    <p>{animal.longDescription}</p>
                    <button onClick={()=> setIsFeed(true)}>Mata</button>
                    
                    {isFeed && <p>Djuret är matat!</p>} {animal.lastFed}
       </div>)}
       
       });
    

    return (<>
    Got animal id: {+animalId} + {AnimalDetails}
    </>)
}