import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const ButtonNav = (props) => {
    return(
        <React.Fragment>
            <TouchableOpacity
                style={{...styles.button}}
                onPress={props.onPress}
            >
            <Text style={{...styles.titleLink}}>
                {props.link}
            </Text>
            </TouchableOpacity>
        </React.Fragment>
    )
}

const TextContent = (props) => {
    return(
        <Text style={props.style}>
            {props.text}
        </Text>
    )
}

const Home = ({navigation}) => {
    return (
        <React.Fragment>
            <View style={{...styles.container}}>
                <View style={{...styles.bottomContainer}}>
                    <TextContent 
                        style={{...styles.titleText}}
                        text="Welcome to my recording app!"
                    />
                    <ButtonNav 
                        onPress={() => navigation.navigate("Recording")}
                        link="Recording"
                    />
                    <ButtonNav 
                        onPress={() => navigation.navigate("Playback")}
                        link="Playback"
                    />
                    <TextContent
                        style={{...styles.titleText}}
                        text="Made by Oskar" 
                    />
                </View>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: "rgb(200, 80, 80)"
    },
    bottomContainer: {
        marginBottom: "100%"
    },
    button: {
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: "whitesmoke",
        borderWidth: 3,
        borderRadius: 10,
        marginLeft: "10%",
        marginRight: "10%",
    },
    titleLink: {
        fontSize: 40,
        textAlign: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        padding: 10,
        color: "black",
        fontWeight: "700"     
    },
    titleText: {
        fontSize: 25,
        textAlign: "center",
        color: "white",
        marginBottom: 25,
        marginTop: 25
    }
})

export default Home