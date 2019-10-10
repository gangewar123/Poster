import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
class PersonalMessage extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTitle: 'Message',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {this.props.navigation.state.params.name.title}
          </Text>
        </View>
        <View style={styles.body}>
          <Text style={{fontSize: 18, fontWeight: '200'}}>
            {this.props.navigation.state.params.name.body}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 8,
    padding: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    // flexGrow: 200,
    flexWrap: 'wrap',
    height: '50%',
    padding: 10,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'red',
  },
  title: {
    flex: 1,
    padding: 10,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
  },
});

export default PersonalMessage;
