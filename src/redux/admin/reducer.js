import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  games: [],
  loading: false,
  title: null,
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    getGamesStart: (state) => {
      state.loading = true;
    },
    getGamesSuccess: (state, action) => {
      state.loading = false;
      state.games = action.payload
    },
    getGamesFailure: (state) => {
      state.loading = false;
    },

    setTitleStart: (state) => {
      state.loading = true;
    },
    setTitleSuccess: (state, action) => {
      state.loading = false;
      state.title = action.payload
    },
    setTitleFailure: (state) => {
      state.loading = false;
    },

  }
})

export const 
  {setItemInput, deleteItemInput, 
  getGamesStart, getGamesSuccess, getGamesFailure,
  setTitleStart, setTitleSuccess, setTitleFailure} 
  = adminSlice.actions

 //selectors
export const selectGames = (state) => state.games.games
export const selectTitle = (state) => state.games.title


// thunk action creators
export const getGames = () => {
  return async (dispatch) => {
    try{
      dispatch(getGamesStart())
      const response = await fetch(`http://localhost:3001/GAMES`)
      const data = await response.json()
      dispatch(getGamesSuccess(data))
    }
    catch (error) {
      dispatch(getGamesFailure(error));
    }
  }
}

export default adminSlice.reducer