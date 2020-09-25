import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { addScore } from '../redux'
import { connect } from 'react-redux'

const Square = (props) => {

    console.log('jkey:',props.jkey)
    console.log('actualMole:',props.actualMole)
    console.log('isGameOver:',props.isGameOver)

    return (
        <TouchableOpacity onPress={(props.actualMole == props.jkey) ? props.addScore : null }>
            <View style={styles.square}>
                {props.isGameOver && <Image source={require('../assets/whacka/vacio.png')} style={styles.mole}/>}
                {!props.isGameOver && ((props.actualMole == props.jkey) ? <Image source={require('../assets/whacka/topo.png')} style={styles.mole}/>
                                            : <Image source={require('../assets/whacka/hueco.png')} style={styles.mole}/> )}
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
    mole: {
       width: '100%',

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
        addScore: () => dispatch(addScore())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)