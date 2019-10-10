import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from '../config/firebase';
import '@firebase/firestore';
export default class DebitScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnumber: '',
      type: '',
      user: '',
    };
  }

  static navigationOptions = {
    headerTitle: 'Payment',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
  };

  onButtonPress = () => {
    const db = firebase.firestore();
    const userRef = db.collection('UserCard').add({
      cnumber: this.state.cnumber,
      type: this.state.type,
      user: this.state.user,
    });
    this.setState({
      cnumber: '',
      type: '',
      user: '',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <Text style={{fontSize: 20, color: '#E64A19'}}>Card Details</Text>
        </View>
        <TextInput
          placeholder="CardNumber"
          placeholderTextColor="white"
          style={styles.Input}
          onChangeText={cnumber => this.setState({cnumber})}
          value={this.state.cnumber}
        />
        <TextInput
          placeholder="Type"
          placeholderTextColor="white"
          style={styles.Input}
          onChangeText={type => this.setState({type})}
          value={this.state.type}
        />

        <TextInput
          placeholder="Card Holder Name"
          placeholderTextColor="white"
          style={styles.Input}
          onChangeText={user => this.setState({user})}
          value={this.state.user}
        />
        <View>
          <TouchableOpacity
            style={styles.buttoncontainer}
            onPress={this.onButtonPress}>
            <Text style={styles.buttontext}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 10,
  },
  Input: {
    height: 40,
    backgroundColor: '#234564',
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
    color: 'white',
  },
  buttoncontainer: {
    borderRadius: 20,
    backgroundColor: '#27ae60',
  },
  buttontext: {
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  maincontainer: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    width: Dimensions.get('window').width,
  },
  logocontainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"red"
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  myform: {
    flexGrow: 3,
  },
});
