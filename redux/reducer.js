import { ADD_SCORE, SET_GAMEOVER, SET_ACTUALMOLE } from './actionTypes'
const initialState = {
    maxTime: 5,
    isGameOver: false,
    actualMole: 0,
    score: 0
}

const gameReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_SCORE: return {
            ...state,
            score: state.score + 1
            }
        case SET_GAMEOVER: return {
            ...state,
            isGameOver: true
        }
        case SET_ACTUALMOLE: 
            console.log('REDUCER: ',action.payload);
            return {
            ...state,
            actualMole: action.payload
        }
        default: return state
    }
}

export default gameReducer;