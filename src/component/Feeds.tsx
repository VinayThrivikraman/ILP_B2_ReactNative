import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { getFeedsAPI } from "../network/ApiHook";

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
  const [feedList, setFeedList] = useState<any[]>([]);

  useEffect(() => {
    console.log('effect activated');
    const getFeeds = async () => {
      try {
        const {contentResp, errorMessage} = await getFeedsAPI(
          'v1/a2608b7c-9e93-4233-b8d5-fd5e0995a243',
        );
        setFeedList(contentResp);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getFeeds();
  }, []);
  
  return (
    <View>
      <FlatList
          horizontal={false}
          data={feedList}
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