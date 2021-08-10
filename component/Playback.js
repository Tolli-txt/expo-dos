import React, { useState, useEffect } from "react"
import { View, StyleSheet, Button, } from "react-native"
import { Audio } from "expo-av"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Playback = () => {

    const [sound, setSound] = useState()

    var [soundData, SetSoundData] = useState("")
    
    AsyncStorage.getItem("sound")
    .then((value) => {
        var x = JSON.parse(value)    
        SetSoundData(x)
    })

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync({
            uri: soundData
        })
        setSound(sound)
        await sound.playAsync() 
    }

    useEffect(() => {
        return sound ? () => {
            sound.unloadAsync() 
        } : undefined
    }, [sound])

    return (
        <View style={styles.container}>
            <Button title="Play Sound" onPress={playSound} />
        </View>
    );
}

export default Playback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})