import { createSlice } from '@reduxjs/toolkit'


const globalSlice = createSlice({
    name : 'global',
    initialState : {
        isAuth: false,
    },
    reducers : {
        setAuth: (state, {payload: status}) => {state.isAuth = status},
    }
})


export const { setAuth } = globalSlice.actions;

export default globalSlice.reducer;