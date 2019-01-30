import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class FestivalsContainer extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
      console.log(this.props)
    return (
      <ScrollView style={styles.container}>
        {this.props.festivals.map(f => <TouchableOpacity key={`festival-${f.id}`}>
              <Text>{f.name}</Text>
            </TouchableOpacity>)}
      </ScrollView>
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