import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://dog.ceo/api/breed/',
})


export const getDog = {
    HoundDog: (pageSize) => {return instance.get(`hound/images/random/${pageSize}`)},
    AkitaDog: () => instance.get(`akita/images`)
}
