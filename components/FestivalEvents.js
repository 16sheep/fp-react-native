import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';


export default class FestivalEvents extends React.Component {
  
    state={
        search: "",
        selectedIndex: 3
    }

    updateSearch = search => {
        this.setState({ search });
    };

    updateIndex = (selectedIndex) => {
        this.setState({selectedIndex})
    }

    sortAndFilter = (events) => {
        sortedEvents = [...events]

        return events.filter(e => 
            e.event.name.toLowerCase().includes(this.state.search.toLowerCase())||
            e.event.category.toLowerCase().includes(this.state.search.toLowerCase())) 
    }

  render() {
    const { navigation, events, areas } = this.props;
    const { search, selectedIndex } = this.state;

   console.log(events)
    return (
      <View>
           <SearchBar
                lightTheme={true}
                placeholder="Search by event name or category ..."
                onChangeText={this.updateSearch}
                value={search}
            />
             <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={["Sort by category", "Sort by area","Sort by Time", "X"]}
            containerStyle={{height: 100}} />
        <Text>Events</Text>
        {this.sortAndFilter(events).map(e => 
            <View>
                <Text>{e.event.name}</Text>
                <Text>{e.event.category}</Text>
                <Text>{e.event.description}</Text>
                <Text>{e.event.time_from}</Text>
                <Text>{e.event.time_until}</Text>
                <Text>{e.area.name}</Text>
            </View>)}
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