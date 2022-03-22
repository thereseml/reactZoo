import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GetAnimals } from "./GetAnimals";

export const ShowAnimal = () => {
    const [animalId, setAnimalId] = useState(0);

    let params = useParams();

    // hämtar id från url
    useEffect(() => {
        if(params.id) {
        setAnimalId(+params.id);
        }
    }, []);

    // hämtar det djur som matchar url
    useEffect(() => {
        if(animalId === 0) return;

    }, [animalId]);

    return (<>Got animal id: {+animalId}</>)
}