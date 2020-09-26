import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
//import { addScore } from '../redux'
import { connect } from 'react-redux'
import hueco from '../assets/whacka/hueco.png'
import macri from '../assets/whacka/macri.png'
import kris from '../assets/whacka/kris.png'

const Square = (props) => {

    console.log('jkey:',props.jkey)
    let personaje = (props.jkey % 2 == 0) ? macri : kris;

    return (
        <TouchableOpacity onPress={(props.actualMole == props.jkey && !props.isGameOver) ? props.addScore : null }>
            <View style={(props.actualMole == props.jkey) ? styles.square : styles.square2}>
                <Image source={(props.actualMole == props.jkey) ? personaje : hueco} style={styles.mole}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    square: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10,
        //backgroundColor: '#fff',
    },
    square2: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10,
        //backgroundColor: '#aaf',
    },
    mole: {
       width: '100%',
       height: '100%'
    } 
})

const mapStateToProps = state => {
    return {
        score: state.score,
        maxTime: state.maxTime,
        isGameOver: state.isGameOver,
        actualMole: state.actualMole
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addScore: () => dispatch({type: 'ADD_SCORE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)