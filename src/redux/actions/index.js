// export const addItem = (product) => {
//     return {
//         type : "ADDITEM",
//         payload : product
//     }
// }

// export const delItem = (product) => {
//     return {
//         type : "DELITEM",
//         payload : product
//     }
// }

export const addCart = (product) => {

    return{

        type : "ADDITEM",

        payload : product

    }

}




// For Delete Item From Cart

export const delCart = (product) => {

    return{

        type : "DELITEM",

        payload : product

    }

}