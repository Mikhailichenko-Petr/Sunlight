import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://dog.ceo/api/breed/hound/',
})


export const ImagesAPI = {
    ImagesDog: () => instance.get(`afghan/images`)
}
