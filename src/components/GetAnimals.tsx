import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";

export const GetAnimals = () => {
    const [animal, setAnimal] = useState<IAnimals[]>([]);

    useEffect(() => {
        if(animal.length > 0) return;
    })

    // hämtar data/djur från api
        axios.get<IAnimals[]>('https://animals.azurewebsites.net/api/animals')
        .then(response => {
            setAnimal(response.data)
         });

        // loopar igenom listan med djur och skapar html till djuren
         let AnimalsFromApi = animal.map((animal: IAnimals) => {
             let animalLink = `/animal/${animal.id}`;

            return (
                <li key={animal.id}>
                    <img src={animal.imageUrl} width="150px"/>
                    <h3>{animal.name}</h3>
                    <Link to={animalLink}>{animal.name}</Link>
                    <p>{animal.shortDescription}</p>
                </li>  
                
            )
            });
            
            localStorage.setItem("Djurlista", JSON.stringify(animal))
            
        return (<ul>{AnimalsFromApi}</ul>);

        

}