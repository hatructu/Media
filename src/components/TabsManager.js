import React, { Component } from 'react'
import {
    Text,
    View, StyleSheet, Image
} from 'react-native'
import { Scene, Stack, Router, Tabs } from 'react-native-router-flux'
import Camera from './Camera'
import VideoPlayer from './Video'
import Record from './Record'
import YoutubePlayer from './Youtube'

const TabsIcon = ({ ...props }) => {
    const { iconsAction, iniconsAction, focused } = props
    return (
        <View>
            <Image
                source={iconsAction}
                style={styles.icon}
            />
        </View>
    )
}

const TabsManager = () => {
    return (
        <Router
           
        >
                <Tabs
                     hideNavBar={true}
                >
                    <Stack
                        icon={TabsIcon}
                        iconsAction={require('@icons/camera.png')}
                        hideNavBar={true}
                        title='Camera'
                    >
                        <Scene
                            component={Camera}
                            initial
                        />
                    </Stack>
                    <Stack
                        icon={TabsIcon}
                        iconsAction={require('@icons/video.png')}
                        hideNavBar={true}
                        title='Video'
                    >
                        <Scene
                            component={VideoPlayer}
                        />
                    </Stack>
                    <Stack
                        icon={TabsIcon}
                        iconsAction={require('@icons/record.png')}
                        hideNavBar={true}
                        title='Record'
                    >
                        <Scene
                            component={Record}
                        />
                    </Stack>
                    <Stack
                        icon={TabsIcon}
                        iconsAction={require('@icons/youtube_logo.png')}
                        hideNavBar={true}
                        title='Youtube'
                    >
                        <Scene
                            component={YoutubePlayer}
                        />
                    </Stack>
                </Tabs>
           
        </Router>
    )

}

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'center'
    }
})


export default TabsManager