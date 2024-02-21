import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { getFeedsAPI } from "../network/ApiHook";

type ItemProps = {title: string, imageUrl: string};

const Item = ({title, imageUrl}: ItemProps) => (
    <View style={styles.item}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
    </View>
  );

const StoriesComponent = () => {

    const [storiesList, setStoriesList] = useState<any[]>([]);
    useEffect(() => {
        console.log('effect activated');
        const getStories = async () => {
          try {
            const {contentResp, errorMessage} = await getFeedsAPI(
              'v1/e4cf6dd8-ac8c-472c-bcf0-62adf77b1f2a',
            );
            setStoriesList(contentResp);
          } catch (error) {
            console.error('Error:', error);
          }
        };
        getStories();
      }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.storiesTitle}>Stories</Text>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator = {false}
            data={storiesList}
            renderItem={({item}) => <Item title={item.title} imageUrl={item.imageUrl} />}
            keyExtractor={item => item.id}
            />
        </View>
    )
}
    
const styles = StyleSheet.create ({
    container: {
        marginTop: 10,
    },
    item: {
        padding: 10,
        alignItems: 'center'
    },
    storiesTitle: {
        marginLeft: 12,
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
    },
    title:{
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
    },
    image: {
        width: 80,
        height:80,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'purple',
    },
})
    

export default StoriesComponent