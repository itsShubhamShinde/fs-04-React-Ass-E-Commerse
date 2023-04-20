import {createSlice} from '@reduxjs/toolkit'

const MoviDetails = createSlice({
    name: "Movies",
    initialState:{
        Movidata : [],
        Addtocart:[],
    },
    reducers:{
        SetAPIdata: (state,action) =>{
            state.Movidata=action.payload;
        },
        SetAddToCart: (state,action) =>{
            state.Addtocart= [...state.Addtocart,(action.payload)]
        },
        DeleteAddToCart: (state,action)=>{
            state.Addtocart= action.payload;            
        }
    }
})
export const {SetAPIdata ,SetAddToCart,DeleteAddToCart} = MoviDetails.actions
export default MoviDetails.reducer;