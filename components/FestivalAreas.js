import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

export default class FestivalAreas extends React.Component {
 
  render() {
    const { areas, map  } = this.props;  
    console.log(areas)  
    return (
      <View>
        <Image
            source={{ uri: map }}
            style={{ width: 350, height: 500 }}
            PlaceholderContent="Festival map"
        />
        {areas.map(a => 
            {console.log(a.area.x)
               return <Image
                source={{ uri: a.area.icon }}
                style={{ width: 30, height: 30, borderRadius: 5, marginLeft: a.area.x, marginTop: a.area.y, position: "absolute", zIndex: 5 }}
                PlaceholderContent="Festival map"
                />}
            )}
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