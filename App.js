import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {joke: "Wait for joke"} //sets state to string-- Wait for joke-- named joke
  }

  componentDidMount() { //only fired once in the begining 
    this.getRandomJoke()
    setInterval(() => {
        this.getRandomJoke()
      }, 7000);

  }


 async getRandomJoke() {
    //fetch api returns a promise so wait
    let response = await fetch("http://api.icndb.com/jokes/random?exclude=[nerdy]&firstName=Prof&lastName=X") //&adds new parameter
    //.json just returns the json
    let parsedObject = await response.json()
    this.setState({
      joke: parsedObject.value.joke //got from structure of object returned
    }) //stores new joke
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>
          {this.state.joke}
        </Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
