import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const Page1 = () => {
  const [response, setResponse] = useState<any>(null);
  const openBrowse = async () => {
    launchImageLibrary({mediaType: 'photo', selectionLimit: 0}, setResponse);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Picker Page</Text>
      <TouchableOpacity onPress={openBrowse} style={styles.button}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {response?.assets &&
          response?.assets.map(({uri}: {uri: string}) => (
            <View key={uri}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={styles.image}
                source={{uri: uri}}
              />
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 30,
    marginBottom: 10,
    padding: 15,
    backgroundColor: 'purple',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  imageContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    margin: 5,
    width: 150,
    height: 150,
  },
});
export default Page1;
