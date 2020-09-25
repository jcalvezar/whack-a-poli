import * as tipos from './actionTypes'
const initialState = {
    maxTime: 5,
    isGameOver: false,
    actualMole: 0,
    score: 0
}

const gameReducer = (state = initialState, action) => {

    switch(action.type) {
        case tipos.ADD_SCORE: return {
            ...state,
            score: state.score + 1
            }
        case tipos.SET_GAMEOVER: return {
            ...state,
            isGameOver: true
        }
        case tipos.SET_ACTUALMOLE: return {
            ...state,
            actualMole: action.payload
        }
        default: return state
    }
}

export default gameReducer