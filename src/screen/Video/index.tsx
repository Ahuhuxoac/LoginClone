import React, { useCallback, useEffect, useState } from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Video, AVPlaybackStatus} from 'expo-av';
import { AntDesign } from '@expo/vector-icons';

const Tutorial = () => {
    const video = React.useRef(null);
    const [status,setStatus] = useState({})
    return (
        <View style={styles.root}>
            <View style={styles.header}>
                <View style={styles.button}>
                    <Pressable
                    style={styles.left}>
                        <AntDesign name="left" size={30} color="white" />
                    </Pressable>
                </View>
                
                <Text style={styles.title} >TUTORIAL</Text>
            </View>
            <View style={styles.video}>
                <Video 
                ref={video}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                style={{width: '100%', aspectRatio: 16/9}}
                posterSource={require('../../image/thumnail.png')}
                posterStyle={{
                    resizeMode: 'cover'
                }}
                usePoster={false}
                useNativeControls
                resizeMode="contain"
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </View>
            <View style={styles.button}>
                <Pressable
                onPress={()=>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }
                >
                    <AntDesign name="caretright" size={40} color="black" />
                </Pressable>
            </View>
        </View>
       
    );
}
const styles = StyleSheet.create({
    root: {

    },
    header: {
        paddingTop: 60,
        backgroundColor: '#3A3E48',
        flexDirection: 'row',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '100%',
    },
    button: {
        height: 42,
        width: 42,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 40,
        elevation: 3,
        marginBottom: 20,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    left: {
        
    },
    title: {
        fontFamily: 'Nippo-Light',
        fontSize: 20,
        lineHeight: 27,
        color: '#ffffff',
        left: 94,
        marginTop: 10,
    },
    video: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    }

})
export default Tutorial;