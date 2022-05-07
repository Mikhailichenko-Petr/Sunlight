// const IMG_ONE = 'IMG_ONE'
// const IMG_TWO = 'IMG_TWO'
// const IMG_THRE = 'IMG_THRE'

// let initialState = {
//     _state:{
//         profilePage:{
//             posts:[
//                 {id:1, message:'bla bla 1'},
//                 {id:2, message:'bla bla 2'},
//                 {id:3, message:'bla bla 3'},
//                 {id:4, message:'bla bla 4'},
//                 {id:5, message:'bla bla 5'}
//             ],
//             newPost: ''
//         } 
//     },
// }

// export const nav_reducer=(state = initialState,action)=>{
//     switch (action.type) {
//         case IMG_ONE:
//             let image1 = {
//                 id:1,
//                 img: "https://g9.sunlight.net/media/i/160/85/products/19464f4715ff1acb701efc6716f214e043065062.jpg"
//             }
            
//             state.nav_image.push(image1)

//         case IMG_TWO:
//             console.log('www');
          
//             state.img.push({id:2, image: "https://g6.sunlight.net/media/i/160/85/products/26d21403-776b-11ec-82dc-005056b30bd2.jpg"})
//                 return state

//         case IMG_THRE:
//             let image3 = {
//                 id:3,
//                 image: "https://g3.sunlight.net/media/i/160/85/products/3ba9125b-6952-11ec-82c9-005056b30bd2.jpg"
//             }
            
//             state.nav_image.push(image3)

//         default:
//           return state
//     }
    
// }

// export const Image1AC=()=>({type:IMG_ONE})
// export const Image2AC=()=>({type:IMG_TWO})
// export const Image3AC=()=>({type:IMG_THRE})