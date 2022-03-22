import axios from "axios"
import { useEffect } from "react";
import { Animals } from "../models/Animals";

export const GetAnimals = () => {


    useEffect(()=> {
        getData()
    }, []);

    function getData(){
        axios.get<Animals[]>('https://animals.azurewebsites.net/api/animals')
        .then(response => { 
            let AnimalsFromApi = response.data.map((animal: Animals) => {
                return 
            })
        })
    }

    return (<ul>{Animals.name}</ul>)
}