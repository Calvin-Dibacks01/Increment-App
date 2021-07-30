import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
state ={
  value: 0,
  total_taps: 0
}
incrementValue =() => {
  this.setState({
    value: this.state.value + 1,
    total_taps: this.state.total_taps + 1
  })
  console.log("Value: " + (this.state.value + 1))
}

decrementValue =() => {
  this.setState({
    value: this.state.value - 1,
    total_taps: this.state.total_taps + 1
  })
  console.log("Value: " + (this.state.value - 1))
}
  render() {
    return (
      <View style={styles.container}>
        <Text styles ={{fontSize: 60, marginBotton: -20}}>{this.state.value}</Text>
    <Text styles ={{fontSize: 12,padding: 20,color: 'yellow'}}>{"Total taps: " + this.state.total_taps}</Text>
        <StatusBar style="auto" />
        <View style={{flexDirection: 'row'}}>
          <Button onPress={this.decrementValue} title="Decrement" />
          <Text>     </Text>
          <Button onPress={this.incrementValue} title="Increment" />
        </View>

      </View>
    );
  }
  
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
