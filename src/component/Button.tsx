import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonComponent = () => {
    const [count, setCount] = useState(0);
    const navigation = useNavigation();

    const onPress = () => {
        setCount((prevCount: number) => prevCount + 1);
        console.log('We are Here: '+ count);
        navigation.navigate("Instagram", {});

    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    button: { //add border radius and 2 colours for button and text
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        alignItems: 'center',
        backgroundColor: 'purple',
        padding: 12,
        borderRadius: 5,
      },
      loginText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "white"
      }    
})

export default ButtonComponent

