import React from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { useState } from "react"
import { View, StyleSheet, Button } from "react-native"
import { Audio } from "expo-av"

const Recording = () => {

    const [recording, setRecording] = useState()

    const storeData = async (value) => {
        const jsonValue = JSON.stringify(value)
        try {
            await AsyncStorage.setItem("sound", jsonValue)
        } catch (error) {}
    }

    async function startRecording() {
        try {
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
        })
        const recording = new Audio.Recording()
        await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY)
        await recording.startAsync()
        setRecording(recording)
        } catch (err) {}
    }
  
    async function stopRecording() {
        try {
            await recording.stopAndUnloadAsync()
            const uri = recording.getURI()
            storeData(uri)
            setRecording(undefined)
        } catch (error) {}
    }

    return (
        <React.Fragment>
            <View style={styles.container}>
                <Button
                    title={recording ? 'Stop Recording' : 'Start Recording'}
                    onPress={recording ? stopRecording : startRecording}/>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Recording