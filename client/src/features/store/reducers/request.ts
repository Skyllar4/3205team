import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'features/lib/models/userModel';

const initialState = {
    request: false,
    requestResult: []
}

export const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        setRequest(state, action: PayloadAction<boolean>) {
            state.request = action.payload;
        },
        setRequestResult(state, action: PayloadAction<Array<User> | any>) {
            state.requestResult = action.payload;
        }
    }
})

export default requestSlice.reducer;
