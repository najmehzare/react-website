import { createSlice } from '@reduxjs/toolkit'

const notifySlice = createSlice({
    name : 'notify',
    initialState : {
        showNotify : false,
        setNotifyText : {
            text : "",
            type : "warn"
        }
        
    },
    reducers : {
        openNotify : (state , { payload } ) => {
            state.showNotify = payload
        },
        setNotifyText : (state , { payload } ) => {
            state.setNotifyText.text = payload.text
            state.setNotifyText.type = payload.type
        },
    }
})

export const { openNotify , setNotifyText } = notifySlice.actions;

export default notifySlice.reducer;