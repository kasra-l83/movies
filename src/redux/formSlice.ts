import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from '../types/movies.type';

interface FormState {
  movies: IMovie[];
}

const initialState: FormState = {
  movies: [],
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<IMovie>) =>{
      state.movies.push(action.payload);
    },
    removeMovie: (state, action: PayloadAction<number>) =>{
      state.movies.splice(action.payload, 1);
    }
  }
})
export default formSlice.reducer;
export const { addMovie, removeMovie } = formSlice.actions;