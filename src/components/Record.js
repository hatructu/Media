import React, { Component } from 'react'
import {
    Text,
    View, StyleSheet, Image, TouchableOpacity, TouchableHighlight,
} from 'react-native'
import AudioRecorderPlayer from 'react-native-audio-recorder-player'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'

export default class Record extends Component {
    constructor(props) {
        super(props);

    }                                        
    
    render() {
        const options = {
            container: {
                backgroundColor: '#000',
                padding: 5,
                borderRadius: 5,
                width: 220,
            },
            text: {
                fontSize: 30,
                color: '#FFF',
                marginLeft: 7,
            }
        };
        return (
            <View style={{ flex: 1 }}>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
})