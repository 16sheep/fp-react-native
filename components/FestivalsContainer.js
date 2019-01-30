import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text,View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FestivalsContainer extends React.Component {
    
    state = {
        input: "",
        selectedFestival: null
    }

    // () => {
    //     /* 1. Navigate to the Details route with params */
    //     this.props.navigation.navigate('FestivalDetails', {
    //       festival: f
    //     });
    //   }
    

    renderFestivals = () => {
       return this.props.festivals.map(f => 
            <TouchableOpacity 
                key={`festival-${f.id}`}
                onPress={() => this.setState({selectedFestival: f})}>
                <Text>{f.name}</Text>
                <Text>{this.state.selectedFestival? this.state.selectedFestival.name : null}</Text>
            </TouchableOpacity>)} 
    


    renderSecretInput = (selectedFestival, input) => {
        return(<View>
                <Input onChange={(e) => this.setState({input: e.nativeEvent.text})}placeholder='BASIC INPUT'/>
                <TouchableOpacity onPress={() => 
                    input === selectedFestival.secret ? 
                     this.props.navigation.navigate('FestivalDetails', {
                        festival: selectedFestival
                     }): null}>
                    {/* icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="white"
                        />
                    } */}
                    <Text>Open fest info</Text>
                </TouchableOpacity>
                <Text>{selectedFestival.name}</Text>
                <Text>{selectedFestival.location}</Text>
                <Text>{selectedFestival.date_from}</Text>
                <Text>{selectedFestival.date_until}</Text>
            </View>
        )
     }

  render() {
    console.log(this.state)
    const {selectedFestival, input } = this.state
    const {selectFestival, festivals} = this.props
    
    return (
      <ScrollView style={styles.container}>
        {this.state.selectedFestival? this.renderSecretInput(selectedFestival, input): this.renderFestivals()}
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