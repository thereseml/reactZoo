import axios from "axios"
import { useEffect, useState } from "react";
import { IAnimals } from "../models/IAnimals";

export const GetAnimals = () => {
    const [animal, setAnimal] = useState<IAnimals[]>([]);

    useEffect(() => {
        if(animal.length > 0) return;
        getData();
    });

    function getData() {
        axios.get<IAnimals[]>('https://animals.azurewebsites.net/api/animals')
        .then(response => {

            setAnimal(response.data)
         });
    };

         let AnimalsFromApi = animal.map((animal: IAnimals) => {
            return (
                <li key={animal.id}>
                    <img src={animal.imageUrl} width="150px"/>
                    <h3>{animal.name}</h3>
                    <p>{animal.shortDescription}</p>
                </li>  
            )
            });
            
        return (<ul>{AnimalsFromApi}</ul>);


}