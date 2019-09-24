import React, { Component } from 'react'
import {
    Text,
    View, StyleSheet, Image,
    Dimensions,
    PixelRatio,
    ScrollView,
    Button,
    Platform
} from 'react-native'
import Youtube, { YouTubeStandaloneAndroid } from 'react-native-youtube'

export default class YoutubePlayer extends Component {
    state = {
        isReady: false,
        status: null,
        quality: null,
        error: null,
        isPlaying: true,
        isLooping: false,
        duration: 0,
        currentTime: 0,
        fullscreen: false,
        playerWidth: Dimensions.get('window').width,
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <Youtube
                    apiKey='AIzaSyBe9AgtPkeDNqPLb9voworBDF1nxic23tI'
                    videoId='GQ4F9k4USfA'
                    play={this.state.isPlaying}
                    loop={this.state.isLooping}
                    fullscreen={this.state.fullscreen}
                    style={[
                        { height: PixelRatio.roundToNearestPixel(this.state.playerWidth / (16 / 9)) },
                        styles.player,
                    ]}

                    onError={e => { this.setState({ error: e.error }) }}
                    onReady={e => { this.setState({ isReady: true }) }}
                    onChangState={e => { this.setState({ stattus: e.state }) }}
                    onChangeQuality={e => { this.setState({ quality: e.quality }) }}
                    onChangeFullscreen={e => { this.setState({ fullscreen: e.isFullscreen }); }}
                    onProgress={e => { this.setState({ currentTime: e.currentTime }); }}
                />

                <View style={styles.buttonGroup}>
                    <Button
                        title={this.state.status == 'Playing' ? 'Paused' : 'Play'}
                        color={this.state.status == 'Playing' ? 'green' : undefined}
                        onPress={() => {
                            this.setState(state => ({ isPlaying: !state.isPlaying }))
                        }}
                    />
                </View>
                {Platform.OS === "android" && YouTubeStandaloneAndroid &&
                    (
                        <View style={styles.buttonGroup}>
                            <Button
                                style={styles.button}
                                title="Standalone: One Video"
                                onPress={() => {
                                    YouTubeStandaloneAndroid.playVideo({
                                        apiKey : 'AIzaSyBe9AgtPkeDNqPLb9voworBDF1nxic23tI',
                                        videoId : 'GQ4F9k4USfA',
                                        autoplay: false,
                                        lightboxMode: false,
                                    }).then(()=>{console.log('Finish')}).catch(errorMes =>{this.setState({error: errorMes})})
                                }}
                            />
                        </View>
                    )
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    buttonGroup: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingBottom: 5,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    player: {
        alignSelf: 'stretch',
        marginVertical: 10,
    },
});