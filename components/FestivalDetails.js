import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements'
import FestivalInfo from './FestivalInfo'
import FestivalEvents from './FestivalEvents'
import FestivalAreas from './FestivalAreas'


export default class FestivalDetailsScreen extends React.Component {
    state= {
        events: [],
        areas: [],
        selectedIndex: 0
    }

    updateIndex = (selectedIndex) => {
        this.setState({selectedIndex})
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
    const {areas, events, selectedIndex} = this.state
    const festival = navigation.getParam('festival', 'NO-ID');
    const buttons = ["INFO", "EVENTS", "MAP"]

    return (
      <View>
        <Text>{festival.name}</Text>
        <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 100}} />
        {selectedIndex === 0 ? <FestivalInfo festival={festival}/>: 
        selectedIndex === 1 ? <FestivalEvents events={events.map(e =>{ return {event: e, area: areas.find(a => a.id === e.area_id)}})} /> : 
        selectedIndex === 2 ? <FestivalAreas map={festival.map_img} areas={areas.map(a =>{ return {area: a, events: events.filter(e => a.id === e.area_id)}})}/> : null}
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