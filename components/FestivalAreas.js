import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

export default class FestivalAreas extends React.Component {
 
  render() {
    const { navigation, areas, events, festival } = this.props;    
    return (
      <View>
        <Text>{festival.name}</Text>
        <Text>Festival Areas</Text>
        <Image
            source={{ uri: festival.image }}
            style={{ width: 200, height: 200 }}
            PlaceholderContent="Festival map"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});