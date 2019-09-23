import React, { Component } from 'react'
import {
    Text,
    View, StyleSheet, Image, TouchableOpacity,
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

export default class Camera extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filePath: null
        }
    }

    chooseFile = () => {
        var option = {
            title: 'Select Images',
            storageOption: {
                skipBackup: true,
                path: 'images'
            }
        }
        ImagePicker.showImagePicker(option, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            }
            else {
                const source = { uri: response.uri }
                this.setState({ filePath: source })
            }
        })
    }



    render() {

        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, flex: 1 }}>
                    <Image
                        source={this.state.filePath}
                        style={{ height: 250, width: 250 }}
                    />

                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                    <TouchableOpacity
                        onPress={this.chooseFile.bind(this)}
                    >
                        <Image
                            source={require('@icons/camera.png')}
                            style={{
                                height: 64,
                                width: 64,
                            }}
                        />

                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}