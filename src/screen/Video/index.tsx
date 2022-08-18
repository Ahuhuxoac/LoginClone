import React, { useCallback, useEffect, useState } from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Video, AVPlaybackStatus} from 'expo-av';
import { AntDesign,Ionicons } from '@expo/vector-icons';

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
                style={{width: '100%', aspectRatio: 16/9, borderRadius: 20}}
                posterSource={require('../../image/thumnail.png')}
                posterStyle={{
                    resizeMode: 'cover'
                }}
                usePoster={false}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                <View style={{ position: 'absolute' ,flexDirection: 'row', marginTop: 8, marginLeft: 20, marginRight: 20}}>
                    <Text style={{fontSize: 18, fontWeight: '400',lineHeight: 26,paddingRight: 140, color: '#eaeaea', alignItems: 'flex-start'}}>Mobile video tutorial</Text>
                    <AntDesign 
                    name="exclamationcircle" size={30} color="#eaeaea" />
                </View>
                <View style={styles.play}>
                    <Pressable
                    onPress={()=>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                    >
                        <Ionicons name={status.isPlaying ? "pause" : "play-sharp"} size={40} color="#eaeaea" />
                    </Pressable>
                </View>
                
            </View>
            <View style={styles.video}>
                
                <Video 
                ref={video}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                style={{width: '100%', aspectRatio: 16/9, borderRadius: 20}}
                posterSource={require('../../image/thumnail.png')}
                posterStyle={{
                    resizeMode: 'cover'
                }}
                usePoster={false}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                <View style={{ position: 'absolute' ,flexDirection: 'row', top: 8, marginLeft: 20, marginRight: 20}}>
                    <Text style={{fontSize: 18, fontWeight: '400',lineHeight: 26,paddingRight: 140, color: '#eaeaea', alignItems: 'flex-start'}}>Mobile video tutorial</Text>
                    <AntDesign 
                    name="exclamationcircle" size={30} color="#eaeaea" />
                </View>
                <View style={styles.play}>
                    <Pressable
                    onPress={()=>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                    >
                        <Ionicons name={status.isPlaying ? "pause" : "play-sharp"} size={40} color="#eaeaea" />
                    </Pressable>
                </View>
                
            </View>
            <Pressable
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                height: 50,
                marginRight: 20,
                marginLeft: 20,
                backgroundColor: '#32a852',
                marginTop: 30
            }}
            >
                <Text style={{fontFamily: 'Nippo-Light', fontSize: 14, lineHeight: 18}}>Download PDF Intruction    </Text>
                <AntDesign name="download" size={30} color="black" />
            </Pressable>
            
        </View>
       
    );
}
const styles = StyleSheet.create({
    root: {

    },
    header: {
        paddingTop: 60,
        paddingLeft: 20,
        backgroundColor: '#3A3E48',
        flexDirection: 'row',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '100%',
    },
    button: {
        height: 42,
        width: 42,
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 4 },
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
    },
    play: {
        marginTop: -50,
        marginLeft: 29
    }


})
export default Tutorial;