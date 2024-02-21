import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HeaderComponent = () => {
     return (
        <View style={styles.headerContainer}>
            <Image 
            style={styles.cameraLogo}
            source={require("../assets/camera.png")}>
            </Image>

            <Text style={styles.InstagramText}>Instagram</Text>

            <Image
            style={styles.sendLogo}
            source={require("../assets/send.png")}>
            </Image>
        </View>
     )
}

const styles = StyleSheet.create ({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cameraLogo: {
        margin: 10,
        width: 0,
        height: 40
    },
    sendLogo: {
        margin: 10,
        width: 40,
        height: 40
    },
    InstagramText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    }
 })

 export default HeaderComponent