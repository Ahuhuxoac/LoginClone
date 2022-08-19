import React, { useCallback, useEffect, useRef, useState } from "react";
import {View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import { Video, AVPlaybackStatus} from 'expo-av';
import { AntDesign,Ionicons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { Calendar } from 'react-native-calendars'
import {Picker} from '@react-native-picker/picker';
import ButtonTT from "../../components/ButtonTT";

const windowWidth = Dimensions.get('window').width;
const Tutorial = () => {
    const video = React.useRef(null);
    const [status,setStatus] = useState({})
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const [selectedMonth, setSelectedMonth] = useState();

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
                <View style={{ position: 'absolute',flexDirection: 'row', marginTop: 8, marginLeft: 20, marginRight: 20}}>
                    <Text style={{fontSize: 18, fontWeight: '400',lineHeight: 26, color: '#eaeaea', alignItems: 'flex-start', paddingRight: 80}}>Mobile video tutorial</Text>
                    <AntDesign 
                    style={{}}
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
                    <Text style={{fontSize: 18, fontWeight: '400',lineHeight: 26,paddingRight: 80, color: '#eaeaea', alignItems: 'flex-start'}}>Mobile video tutorial</Text>
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
            onPress={toggleModal}
            >
                <Text style={{fontFamily: 'Nippo-Light', fontSize: 14, lineHeight: 18}}>Download PDF Intruction    </Text>
                <AntDesign name="download" size={30} color="black" />
            </Pressable>
            <Modal
            isVisible={isModalVisible}
            >
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <View style={{ backgroundColor: 'white',height: 398, width: windowWidth -50, alignSelf: 'center',justifyContent: 'space-around'}}>
                        
                        <Calendar 
                        hideArrows
                        
                        theme={{
                            textDayFontFamily: 'Nippo-Light',
                            textMonthFontFamily: 'Nippo-Light',
                            textDayHeaderFontFamily: 'Nippo-Medium',
                            todayButtonFontFamily: 'Nippo-Light',
            
                        }}
                        monthFormat={'MMM yyyy'}
                        onMonthChange={(month) => {console.log(month)}}
                        renderHeader={(date)=>{
                            console.log(date)
                            return (
                                <View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <View style={{borderBottomWidth: 1,borderColor: '#474a47' ,marginRight: 20}}>
                                        <Picker
                                        selectedValue={selectedMonth}
                                        style={{width: 120, fontFamily: 'Nippo-Light'}}
                                        >
                                            <Picker.Item label="January" value="1" />
                                            <Picker.Item label="February" value="2" />
                                            <Picker.Item label="March" value="3" />
                                            <Picker.Item label="April" value="4" />
                                            <Picker.Item label="May" value="5" />
                                            <Picker.Item label="June" value="6" />
                                            <Picker.Item label="July" value="7" />
                                            <Picker.Item label="August" value="8" />
                                            <Picker.Item label="September" value="9" />
                                            <Picker.Item label="October" value="10" />
                                            <Picker.Item label="November" value="11" />
                                            <Picker.Item label="December" value="12" />

                                        </Picker>
                                        </View>
                                        <View style={{borderBottomWidth: 1,borderColor: '#474a47'}} >
                                            <Picker
                                            style={{width: 120,fontFamily: 'Nippo-Light'}}
                                            >
                                                <Picker.Item label="2022" value="2022"  />
                                            </Picker>
                                        </View>
                                    </View>
                                    <View style={{width: '100%', marginTop: 6, height: 1, backgroundColor: '#E7ECF4'}}></View>
                                </View>
                                
                            )
                        }}
                        />

                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <ButtonTT onPress={toggleModal} color="red" text="Cancel" bgcolor="#E7ECF4" />
                            <ButtonTT onPress={toggleModal} color="white" text="Save" bgcolor="#2AC6A8" />
                            
                        </View>
                    </View>
                    
                </View>

            </Modal>
            
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