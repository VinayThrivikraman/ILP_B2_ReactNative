import React from 'react';
import {FlatList, SectionList, StyleSheet, Text, View} from 'react-native';

const Page3 = () => {
  const sectionListData = [
    {
      title: 'Now Showing',
      data: [
        {
          id: 'horizontalList',
          renderHorizontal: true,
          movies: [
            {id: 1, title: 'Movie A'},
            {id: 2, title: 'Movie B'},
          ],
        },
      ],
    },
    {
      title: 'Coming Soon',
      data: [
        {
          renderHorizontal: true,
          movies: [
            {id: 3, title: 'Movie C'},
            {id: 4, title: 'Movie D'},
          ],
        },
      ],
    },
  ];

  return (
    <SectionList
      sections={sectionListData}
      keyExtractor={(item, index) => item.id + index}
      renderSectionHeader={({section: {title}}) => {
        return <Text style={{fontWeight: 'bold', fontSize: 40}}>{title}</Text>;
      }}
      renderItem={({item, section}) => {
        if (item.renderHorizontal) {
          return (
            <FlatList
              horizontal
              data={item.movies}
              renderItem={({item}) => (
                <View style={{marginRight: 20}}>
                  <Text>{item.title}</Text>
                </View>
              )}
              keyExtractor={item => item.id.toString()}
            />
          );
        } else {
          return (
            <View style={{paddingVertical: 0}}>
              <Text>{item.title}</Text>
            </View>
          );
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Page3;
