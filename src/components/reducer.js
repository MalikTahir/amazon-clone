export const initialState={
    basket:[
        {
            id:151,
            title:"This is going to be the product that awill be added in my demo react app",
             price:159.12,
            image:"https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg",
            rating:5,
        },
        {
            id:151,
            title:"This is going to be the product that awill be added in my demo react app",
             price:159.12,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQez5pBtBRlaFwXWL14FYdyq4EO0YXQEn1-OA&usqp=CAU",
            rating:5,
        },
    ],
};
const reducer = (state,action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for adding to basket
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
        case 'REMOVE_FROM_BASKET':
            //logic forremoving from basket
            return {...state};    
        default:
            return state;    
    }
};
export default reducer;