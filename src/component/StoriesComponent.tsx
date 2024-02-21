import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

type ItemProps = {title: string, imageUrl: string};

const Item = ({title, imageUrl}: ItemProps) => (
    <View style={styles.item}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
    </View>
  );

const stories = [
{ id: '1', title: 'Your Story', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
{ id: '2', title: 'Hari Lee', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
{ id: '3', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
{ id: '6', title: 'Changler Bing', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
{ id: '4', title: 'Monica Geller', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
{ id: '5', title: 'Ross', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
{ id: '7', title: 'Rach', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },

// Add more stories here
];


const StoriesComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.storiesTitle}>Stories</Text>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator = {false}
            data={stories}
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