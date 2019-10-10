import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  ScrollView,
  ListView,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import axios from 'axios';
import InfiniteScroll from 'react-native-infinite-scroll';

export default class PostScreen extends Component {
  static navigationOptions = {
    title: 'My Post',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 10,
    };
  }

  async componentDidMount() {
    await this.renderUser();
  }

  async renderUser() {
    var url = 'https://jsonplaceholder.typicode.com/posts';
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

    var photos = [];
    var countData = [];
    for (var j = this.state.data.length; j < this.state.count; j++) {
      countData.push(response.data[j]);
      console.log('this is exact data', response.data[j]);
    }
    this.setState({data: this.state.data.concat(countData)});
  }
  loadMorePage = async () => {
    this.setState({count: this.state.count + 10});
    await this.renderUser();
  };
  _onPress = item => {
    console.log('clicked', item);
    // Alert.alert(item.id);
    this.props.navigation.navigate('PersonalMessage', {name: item});
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({item}) => (
          <TouchableOpacity key={item.id}>
            <View style={{backgroundColor: '#e6ffff'}}>
              <View style={styles.item}>
                <Text style={styles.title} onPress={() => this._onPress(item)}>
                  {item.title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          // />
        )}
        keyExtractor={item => item.id}
        onEndReached={this.loadMorePage}
        onEndReachedThreshold={0.9}
        ItemSeparatorComponent={this.renderSeparator}
      />
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
  item: {
    backgroundColor: '#66ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
    color:"#ad3122"
  },
});
