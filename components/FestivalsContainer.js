import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text,View } from 'react-native';
import { Input, Button, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FestivalsContainer extends React.Component {
    
    state = {
        input: "",
        selectedFestival: null,
        search: ""
    }

    updateSearch = search => {
        this.setState({ search });
    };
    

    renderFestivals = (festivals, selectedFestival, search) => {
       return ( <View>
            <SearchBar
                lightTheme={true}
                placeholder="Search festivals ..."
                onChangeText={this.updateSearch}
                value={search}
            />
            <ScrollView>
                {
                    festivals.filter(f => f.name.toLowerCase().includes(search.toLowerCase())).map(f => 
                        <TouchableOpacity 
                            key={`festival-${f.id}`}
                            onPress={() => this.setState({selectedFestival: f})}>
                            <Text>{f.name}</Text>
                            <Text>{selectedFestival ? selectedFestival.name : null}</Text>
                        </TouchableOpacity>)} 
                
            </ScrollView>
       </View>)
       
       }
    


    renderSecretInput = (selectedFestival, input) => {
        return(<View>
                <Input onChange={(e) => this.setState({input: e.nativeEvent.text})}placeholder='Type festival secret here'/>
                <Button onPress={() => 
                    input === selectedFestival.secret ? 
                     this.props.navigation.navigate('FestivalDetails', {
                        festival: selectedFestival
                     }): null}
                     icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="white"
                        />
                   } />
                <Text>{selectedFestival.name}</Text>
                <Text>{selectedFestival.location}</Text>
                <Text>{selectedFestival.date_from}</Text>
                <Text>{selectedFestival.date_until}</Text>
            </View>
        )
     }

  render() {
    const {selectedFestival, input, search } = this.state
    const {festivals} = this.props
    
    return (
      <ScrollView style={styles.container}>
        {selectedFestival ? this.renderSecretInput(selectedFestival, input): this.renderFestivals(festivals, selectedFestival, search)}
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