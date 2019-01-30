import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default class FestivalDetailsScreen extends React.Component {
    state= {
        events: [],
        areas: []
    }
    
    componentDidMount(){
        const festival = this.props.navigation.getParam('festival', 'NO-ID');
        fetch(`http://localhost:3006/api/v1/festival_events/${festival.id}`)
        .then(resp => resp.json())
        .then(events => this.setState({events: events}))

        fetch(`http://localhost:3006/api/v1/festival_areas/${festival.id}`)
        .then(resp => resp.json())
        .then(areas => this.setState({areas: areas}))
    }
  
    static navigationOptions = {
    title: 'FestivalDetails',
  };

  render() {
    const { navigation } = this.props;
    const {areas, events} = this.state
    const festival = navigation.getParam('festival', 'NO-ID');

    
    return (
      <View>
        <Text>{festival.name}</Text>
        <Text>Events</Text>
        {events.map(e => <Text>{e.name}</Text>)}
        <Text>Areas</Text>
        {areas.map(a => <Text>{a.name}</Text>)}
        
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