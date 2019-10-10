import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import axios from 'axios';
import Loading from './loading';

export default class GridScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 20,
      loading: false,
    };
  }
  static navigationOptions = {
    headerTitle: 'Chat',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
  };

  async componentDidMount() {
    await this.renderUser();
  }

  async renderUser() {
    var url = 'https://jsonplaceholder.typicode.com/photos';
    var response = await axios
      .get(url)
      .then(function(response) {
        // handle success
        console.log(response.data);
        return response;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });

    var countData = [];
    for (var j = this.state.data.length; j < this.state.count; j++) {
      countData.push(response.data[j]);
      console.log('this is exact data', response.data[j]);
    }
    this.setState({data: this.state.data.concat(countData), loading: true});
  }
  loadMorePage = async () => {
    this.setState({count: this.state.count + 10});
    await this.renderUser();
  };

  renderItem() {
    console.log(this.state.message);

    return this.state.messages.map((message, index) => {
      console.log('kiran data index', index);
      return (
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('PersonalMessage', {
              name: message.name,
              response: message.response,
            })
          }>
          <View style={{margin: 10, borderRadius: 15}}>
            <View style={styles.container} key={index}>
              <Text style={{marginLeft: 5}}>{message.name}</Text>
              <Text> ></Text>
            </View>
            <View>
              <Text>{message.response}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  }
  render() {
    return this.state.loading ? (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
              <Image
                style={styles.imageThumbnail}
                source={{uri: item.thumbnailUrl}}
              />
            </View>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
          onEndReached={this.loadMorePage}
          onEndReachedThreshold={0.5}
        />
      </View>
    ) : (
      <Loading />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
