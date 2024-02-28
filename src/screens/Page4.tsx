import {
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getFeedsAPI} from '../network/ApiHook';
import {useEffect, useState} from 'react';

type StoriesItemProps = {title: string; imageUrl: string};
type FeedsItemProps = {
  imageUrl: string;
  title: string;
  feedImage: string;
  likeCount: string;
};

const StoriesItem = ({title, imageUrl}: StoriesItemProps) => (
  <View style={styles.item}>
    <Image source={{uri: imageUrl}} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FeedsItem = ({imageUrl, title, feedImage, likeCount}: FeedsItemProps) => (
  <View style={styles.singleFeedContainer}>
    <View style={styles.profileContainer}>
      <Image source={{uri: imageUrl}} style={styles.profileImage} />
      <Text style={styles.profileTitle}>{title}</Text>
    </View>
    <View>
      <Image source={{uri: feedImage}} style={styles.feedImage}></Image>
    </View>
    <View>
      <View style={styles.likeContainer}>
        <Image
          source={require('../assets/heart.png')}
          style={styles.heartIcon}></Image>
        <Image
          source={require('../assets/chat.png')}
          style={styles.commentIcon}></Image>
        <Image
          source={require('../assets/send.png')}
          style={styles.shareIcon}></Image>
      </View>
      <Text style={styles.likeCount}>{likeCount} likes</Text>
    </View>
  </View>
);

const InstagramHome = () => {
  const [storiesList, setStoriesList] = useState<any[]>([]);
  const [feedList, setFeedList] = useState<any[]>([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const {contentResp} = await getFeedsAPI(
          'v1/e4cf6dd8-ac8c-472c-bcf0-62adf77b1f2a',
        );
        setStoriesList(contentResp);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    const fetchFeeds = async () => {
      try {
        const {contentResp} = await getFeedsAPI(
          'v1/a2608b7c-9e93-4233-b8d5-fd5e0995a243',
        );
        setFeedList(contentResp);
      } catch (error) {
        console.error('Error fetching feeds:', error);
      }
    };

    fetchStories();
    fetchFeeds();
  }, []);

  const combinedData = [
    {title: 'Stories', data: [storiesList]},
    {title: 'Feeds', data: feedList},
  ];

  return (
    <SectionList
      sections={combinedData}
      // keyExtractor={index => index.toString()}
      renderSectionHeader={({section: {title}}) => {
        return <Text style={{fontWeight: 'bold', fontSize: 40}}>{title}</Text>;
      }}
      renderItem={({item, section}) => {
        if (section.title == 'Stories') {
          return (
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={storiesList}
              renderItem={({item}) => (
                <StoriesItem title={item.title} imageUrl={item.imageUrl} />
              )}
              keyExtractor={item => item.id}
            />
          );
        } else {
          return (
            // <FlatList
            //   horizontal={false}
            //   data={feedList}
            //   renderItem={({item}) => (
            <FeedsItem
              imageUrl={item.imageUrl}
              title={item.title}
              feedImage={item.feedImage}
              likeCount={item.likeCount}
            />
            // )}
            // keyExtractor={item => item.id}
            // />
          );
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  item: {
    padding: 10,
    alignItems: 'center',
  },
  storiesTitle: {
    marginLeft: 12,
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'purple',
  },
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
  },
});

export default InstagramHome;
