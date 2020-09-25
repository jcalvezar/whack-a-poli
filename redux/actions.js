import * as actions from './actionTypes'

export const addScore = () => {
    return {
        type: actions.ADD_SCORE
    }
}

export const setGameover = () => {
    console.log('Set Game Over')
    return {
        type: actions.SET_GAMEOVER
    }
}

export const setActualMole = (mole) => {
    console.log('set Actual Mole ',mole)
    return {
        type: actions.SET_ACTUALMOLE,
        payload: mole
    }
}