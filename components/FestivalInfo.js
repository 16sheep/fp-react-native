import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

export default FestivalInfo = ({ festival }) => {
    console.log(festival)
    return (
      <View>
        <Text>{festival.name}</Text>
        <Text>{festival.date_from}</Text>
        <Text>{festival.date_until}</Text>
        <Text>{festival.location}</Text>
        <Image
            source={{ uri: festival.logo_img }}
            style={{ width: 200, height: 200 }}
            />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});