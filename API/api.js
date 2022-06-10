import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://dog.ceo/api/breed/',
})


export const getDog = {
    HoundDog: () => instance.get(`hound/afghan/images`),
    AkitaDog: () => instance.get(`akita/images`)
}
