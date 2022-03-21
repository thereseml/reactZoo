import axios from "axios"
import { Animals } from "../models/Animals";

export const GetAnimals = () => {

    axios.get<Animals>('https://animals.azurewebsites.net/api/animals')
    .then(response => {
        console.log(response.data);
        
    })

    return (<p>Hejhej</p>)
}