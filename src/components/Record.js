import React, { Component } from 'react'
import {
    Text,
    View, StyleSheet, Image, TouchableOpacity, TouchableHighlight,
} from 'react-native'
import AudioRecorderPlayer from 'react-native-audio-recorder-player'
const audioRecorderPlayer = new AudioRecorderPlayer()
export default class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recordSecs: null,
            recordTimes: null,
            playTime: null,
            duration: null,
        }
    }
    onStartRecord = async () => {
        const result = await audioRecorderPlayer.startRecorder();
        audioRecorderPlayer.addRecordBackListener((e) => {
            this.setState({
                recordSecs: e.current_position,
                recordTime: audioRecorderPlayer.mmssss(
                    Math.floor(e.current_position),
                ),
            });
            return;
        });
        console.log(result);
    }

    onStopRecord = async () => {
        const result = await audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removeRecordBackListener();
        this.setState({
            recordSecs: 0,
        });
        console.log(result);
    }
    onStartPlay = async () => {
        console.log('onStartPlay');
        const msg = await audioRecorderPlayer.startPlayer();
        console.log(msg);
        this.audioRecorderPlayer.addPlayBackListener((e) => {
          if (e.current_position === e.duration) {
            console.log('finished');
            this.audioRecorderPlayer.stopPlayer();
          }
          this.setState({
            currentPositionSec: e.current_position,
            currentDurationSec: e.duration,
            playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
            duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
          });
          return;
        });
      };
    render() {
        
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={()=>{this.onStartRecord()}}
                >
                    <Text>Start</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>{this.onStopRecord()}}
                >
                    <Text>Stop</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={()=>{this.onStartPlay()}}
                >
                    <Text>Play</Text>
                </TouchableOpacity>
                
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