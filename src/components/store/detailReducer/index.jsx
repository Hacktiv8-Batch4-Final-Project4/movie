import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const APIKEY = '25129c6';
const initialState = {
    detail: [],
    loading: false,
}

export const getDetail = createAsyncThunk("detail/getDetail", async (query) => {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${APIKEY}&i=${query}`);
    console.log(response.data);
    return response.data;
})

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDetail.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDetail.fulfilled, (state, { payload }) => {
                state.detail = payload;
                state.loading = false;
            })
            .addCase(getDetail.rejected, (state) => {
                state.loading = false;
            })
    },
})

export default detailSlice.reducer;