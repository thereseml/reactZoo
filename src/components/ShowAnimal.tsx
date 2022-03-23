import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { IAnimals } from "../models/IAnimals";
import "./GetAnimals.css"

export const ShowAnimal = () => {
    const [animalId, setAnimalId] = useState(0);
    const [storedAnimal, setStoredAnimal] = useState<IAnimals[]>([]);
    const [isFeed, setIsFeed] = useState(false)
    const [disable, setDisable] = useState(false);

    let params = useParams();

    // hämtar id från url
    useEffect(() => {
        if(params.id) {
        setAnimalId(+params.id);
        }
    }, []);

    function feedanimal(){
        setDisable(true)
        setIsFeed(true)
        
    }

    // hämtar det djur som matchar url
    useEffect(() => {
        let localAnimal = localStorage.getItem("Djurlista") 
        if(localAnimal) {
            setStoredAnimal(JSON.parse(localAnimal))
        }
    }, []);

    let AnimalDetails = storedAnimal.map((animal: IAnimals) => {

        let showdate = new Date()
        let todaystime = showdate.getHours()+":"+showdate.getMinutes()

        if(animalId === animal.id) {
       return (<div  key={animal.id}>
                    <img src={animal.imageUrl} width="300px"/>
                    <h3>{animal.name}</h3>
                    <p>{animal.longDescription}</p>
                    <button disabled={disable} onClick={feedanimal}>Mata djur</button>
                     <div> {isFeed && <p>Djuret är matat idag kl: {todaystime} </p>} </div>
       </div>)}
       
    });
    

    return (<>
     {AnimalDetails}
     <Link to="/">Gå tillbaka</Link>
    </>)
}