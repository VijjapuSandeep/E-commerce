const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM":
            //already exist product//
            // const exist = state.find((x)=> x.id === product.id);
            // if(exist){
            //     // increase product qty//
            //     return state.map((x)=>
            //     x.id === product.id ? {...x, qty: x.qty + 1} : x
            //     );
            // }else{
            //     const product = action.playload;
            //     return[
            //         ...state,
            //         {
            //             ...product,
            //             qty: 1,
            //         }
            //     ]
            // }
            // break;
        case "ADDITEM" : return [
            ...state,
            action.payload
        ]

        case "DELITEM" :
        //     const exist1 = state.find((x)=> x.id === product.id);
        //     if(exist1.qty === 1){
        //         return state.filter((x) => x.id !== exist1.id);
        //     }else{
        //         return state.map((x)=>
        //         x.id === product.id ? {...x, qty: x.qty-1} : x
        //     );
        // }
        break;
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })

        default: return state;

        
    }
}

export default addItems;