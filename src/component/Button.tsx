import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonComponent = () => {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    button: { //add border radius and 2 colours for button and text
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
      },
      loginText: {
        fontSize: 20,
        fontWeight: 'bold',
      }    
})

export default ButtonComponent
