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
import {ScrollView} from 'react-native-gesture-handler';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
      loading: false,
    };
  }

  onButtonPress = () => {
    this.setState({errorMessage: null, loading: true});

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.onLoginSuccess())
      .catch(error => this.setState({errorMessage: error.message}));
  };
  onLoginSuccess = () => {
    this.props.navigation.navigate('Post');

    this.setState({
      email: '',
      password: '',
      errorMessage: null,
      loading: false,
    });
  };
  onLoginFailure = errorMessage => {
    this.setState({errorMessage: errorMessage, loading: false});
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="height" style={styles.maincontainer}>
        <View style={styles.logocontainer}>
          <Image
            style={styles.logo}
            source={{
              uri:
                'https://payload.cargocollective.com/1/0/21154/8811319/Santa-to-portfolio.gif',
            }}
          />
        </View>

        <View style={styles.myform}>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <View style={styles.container}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="white"
              style={styles.Input}
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="white"
              style={styles.Input}
              onChangeText={password => this.setState({password})}
              value={this.state.password}
            />
            <View>
              <TouchableOpacity
                style={styles.buttoncontainer}
                onPress={this.onButtonPress}>
                <Text style={styles.buttontext}>Login</Text>
              </TouchableOpacity>
              <View>
                <Text>
                  {' '}
                  Don't have an account?{' '}
                  <Text
                    onPress={() => this.props.navigation.navigate('SignUp')}
                    style={{color: '#e93766', fontSize: 18}}>
                    {' '}
                    Sign Up{' '}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"red"
  },
  logo: {
    width: '100%',
    height: '100%',
    // borderRadius: 50,
  },
  myform: {
    flexGrow: 3,
  },
});
