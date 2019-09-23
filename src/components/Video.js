import React, { Component } from 'react'
import {
    Text, TouchableWithoutFeedback,
    View, StyleSheet, Image
} from 'react-native'
import Video from 'react-native-video'
import funnycats from '../videos/funnycats.mp4'

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={() => {}}
                >
                    <Video
                        source ={funnycats}
                        ref={(ref) => { this.player = ref }}
                        resizeMode='cover'
                        style={StyleSheet.absoluteFill}
                    />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    
    container:{
        flex:1
    },
  })