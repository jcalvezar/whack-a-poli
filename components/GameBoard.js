import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import Square from './Square'
//import { setActualMole, setGameover, addScore } from '../redux'
import { connect } from 'react-redux'

const GameBoard = (props) => {
    
    const [timeLeft, setTimeLeft] = useState(props.maxTime);
    const timer = () => { 
        setTimeLeft(timeLeft -1);
        const mole = Math.floor(Math.random() * 12);
     
        props.setActualMole(mole);
        console.log('AFTER Actual Mole: ',props.actualMole);
        //props.addScore();
    }

    const items = []
    for(let i=0;i<12;i++) {
        items.push(<Square key={i.toString()} jkey={i}/>);
        
    }

    useEffect( () => {
        if (timeLeft <= 0) {
            props.setGameover();
            return;
        }
        const id = setInterval(timer, 1000);
        return () => clearInterval(id);
        
    }, [timeLeft])

    return (
        <ImageBackground
            source={require('../assets/whacka/fondo.png')}
            style={styles.container}
        >
            <Text style={{ fontSize: 30, marginTop: 30 }}>Whack A Politic</Text>
            <Text style={{ fontSize: 20, }}>Time Left: {timeLeft}</Text>
            <Text style={{ fontSize: 20, }}>Score: {props.score}</Text>
            <View style={styles.game}>
                { props.isGameOver ? items : <Button title="Restart"/> }
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 0
    },
    game: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 300,
      paddingTop: 20,
    }
  });

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
        setGameover: () => dispatch({type: 'SET_GAMEOVER'}),
        setActualMole: (mole) => dispatch({type: 'SET_ACTUALMOLE', payload: mole}),
        addScore: () => dispatch({type: 'ADD_SCORE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
