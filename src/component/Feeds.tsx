import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const feeds = [
  {
    id: '1', feedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_4qTecYyAS3Le7wSQWgrJoMCHMUVBhSn1B1JxQCBJ7NTeQKMF9IlopklR-24QLFRN00&usqp=CAU'
    , likeCount: '1000', title: 'Your Story', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg'
  },
  {
    id: '2', feedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOAbM2VsbmRfH4Tg-OyeD3S5NksaZR5ne_KaWnh1UCOrVStwlnQoOc5mOFppNvKC_I-w&usqp=CAU'
    , likeCount: '2200', title: 'Hari Lee', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg'
  },
  {
    id: '3', feedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfV2kpHYP5tVGmqp-345N_uVlfHMhFvn3V1g&usqp=CAU'
    , likeCount: '550', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg'
  },
  {
    id: '6', feedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rEzB5BFKqhkxgnb5opU-zHcvelKkhditpQ&usqp=CAU'
    , likeCount: '4893', title: 'Changler Bing', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg'
  },
  {
    id: '4', feedImage: 'https://previews.123rf.com/images/studiostoks/studiostoks1801/studiostoks180100194/94512492-astronaut-breaks-the-wall-leadership-and-determination-pop-art-retro-comic-book-vector-cartoon.jpg'
    , likeCount: '12567', title: 'Monica Geller', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg'
  },
  {
    id: '5', feedImage: 'https://www.bigsmall.in/cdn/shop/articles/4435917.jpg?v=1604671099&width=1600'
    , likeCount: '8900', title: 'Ross', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg'
  },
  {
    id: '7', feedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_4qTecYyAS3Le7wSQWgrJoMCHMUVBhSn1B1JxQCBJ7NTeQKMF9IlopklR-24QLFRN00&usqp=CAU'
    , likeCount: '4589', title: 'Rach', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg'
  },

  // Add more feeds here
];

type ItemProps = {imageUrl: string, title: string, feedImage: string, likeCount: string};

const Item = ({imageUrl, title, feedImage, likeCount}: ItemProps) => (
  <View style={styles.singleFeedContainer}>
    <View style={styles.profileContainer}>
      <Image source={{ uri: imageUrl }} style={styles.profileImage} />
      <Text style={styles.profileTitle}>{title}</Text>
    </View>
    <View>
      <Image source={{ uri: feedImage }} style={styles.feedImage}></Image>
    </View>
    <View>
    <View style={styles.likeContainer}>
        <Image source={require('../assets/heart.png')} style={styles.heartIcon}></Image>
        <Image source={require('../assets/chat.png')} style={styles.commentIcon}></Image>
        <Image source={require('../assets/send.png')} style={styles.shareIcon}></Image>
      </View>
      <Text style={styles.likeCount}>{likeCount} likes</Text>
    </View>
  </View>
);

const Feeds = () => {
  return (
    <View>
      <FlatList
          horizontal={false}
          data={feeds}
          renderItem={({item}) => <Item imageUrl={item.imageUrl} title={item.title} feedImage={item.feedImage} likeCount={item.likeCount} />}
          keyExtractor={item => item.id}
          />
    </View>
  );
}

const styles = StyleSheet.create ({
  singleFeedContainer: {
    marginTop: 15,
    marginLeft: 8,
    marginRight: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'purple',
  },
  profileTitle: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 18,
    color: 'black',
  },
  feedImage: {
    width: 380,
    height: 380,
  },
  likeCount: {
    marginLeft: 3,
    fontWeight: '500',
    fontSize: 18,
    color: 'black',
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: {
    width: 30,
    height: 30,
    margin: 5,
  },
  commentIcon: {
    width: 35,
    height: 35,
    margin: 5,
  },
  shareIcon: {
    width: 40,
    height: 40,
    margin: -1,
  }
})

export default Feeds;