import { createSlice } from "@reduxjs/toolkit";

// A slice for storing Web3 wallet address
export const walletSlice = createSlice({
    name: "wallet",
    initialState: {
        value: '',
    },
    reducers: {
        addWallet: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { addWallet } = walletSlice.actions;
export const selectWallet = state => state.wallet.value;
export default walletSlice.reducer;