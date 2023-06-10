import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    movie: [],
    loading: false,
}

export const getMovie = createAsyncThunk("home/getMovie", async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASEURL}?s=man&apikey=${process.env.REACT_APP_APIKEY}`);
    console.log(response.data);
    return response.data;
})

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovie.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovie.fulfilled, (state, { payload }) => {
                state.movie = payload;
                state.loading = false;
            })
            .addCase(getMovie.rejected, (state) => {
                state.loading = false;
            })
    },
})

export default homeSlice.reducer;