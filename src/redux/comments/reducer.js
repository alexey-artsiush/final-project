import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  loading: false,
}

const commentsSlice = createSlice({
  name:"comments",
  initialState, 
  reducers: {
    getCommentStart: (state) => {
      state.loading = true
    },
    getCommentsSucces: (state, action) => {
      state.loading = false;
      state.comments = action.payload
    },
    getCommentFailure: (state) => {
      state.loading = false
    }
  }})

  export const {getCommentStart, getCommentsSucces, getCommentFailure} = commentsSlice.actions

  //redux thunk

  export const getComments = async (dispatch) => {
    try{
      dispatch(getCommentStart())
      const response = await fetch(`http://localhost:3001/comments`)
      const data = await response.json()
      dispatch(getCommentsSucces(data))
    } catch(err) {
      dispatch(getCommentFailure(err))
    }}


  export default commentsSlice.reducer