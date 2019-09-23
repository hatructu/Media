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
        this.state = {
            timerStart: false,
            stopwatchStart: false,
            totalDuration: 90000,
            timerReset: false,
            stopwatchReset: false,
        }
        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        
    }                                        
    toggleTimer() {
        this.setState({ timerStart: !this.state.timerStart, timerReset: false });
    }

    resetTimer() {
        this.setState({ timerStart: false, timerReset: true });
    }

    toggleStopwatch() {
        this.setState({ stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
    }

    resetStopwatch() {
        this.setState({ stopwatchStart: false, stopwatchReset: true });
    }

    getFormattedTime(time) {
        this.currentTime = time;
    };
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
                <Stopwatch laps start={this.state.stopwatchStart}
                    reset={this.state.stopwatchReset}
                    options={options}
                    getTime={this.getFormattedTime} />
                <TouchableOpacity onPress={this.toggleStopwatch}>
                    <Text style={{ fontSize: 30 }}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
                </TouchableOpacity>
                <TouchableHighlight onPress={this.resetStopwatch}>
                    <Text style={{ fontSize: 30 }}>Reset</Text>
                </TouchableHighlight>
                
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