import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Calendar } from 'react-native-calendars'

const Calendars = () => {
    return (
        <View style={{marginTop: 20}}>
            <Calendar 
            style={{
                height: '100%'
            }}
            dayComponent={(e)=> {
                console.log(e)
                return (
                    <View style={{width: 40, height: 40, backgroundColor: 'red'}}>
                        <Text>{e.date.day}</Text>
                    </View>
                )
            }}
            />
        </View>
    )
}
const styles=StyleSheet.create({

});

export default Calendars;