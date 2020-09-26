import { ADD_SCORE, SET_GAMEOVER, SET_ACTUALMOLE } from './actionTypes'

export const addScore = () => {
    return {
        type: ADD_SCORE
    }
}

export const setGameover = () => {
    console.log('Set Game Over')
    return {
        type: SET_GAMEOVER
    }
}

export const setActualMole = (mole) => {
    console.log('set Actual Mole ',mole)
    let myMole = mole;

    return {
        type: SET_ACTUALMOLE,
        payload: myMole
    }
}