import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://dog.ceo/api/breed/',
})


export const ImagesAPI = {
    ImagesDog: () => instance.get(`hound/afghan/images`)
}

export const AkitaAPI = {
    ImagesDog: () => instance.get(`akita/images`)
}