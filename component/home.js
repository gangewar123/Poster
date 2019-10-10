import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import PostScreen from './screens/HomeScreen';
import PersonalMessage from './screens/personal_message';
import ChatScreen from './screens/GridScreen';
import DebitScreen from './screens/DebitScreen';
import LoginScreen from './screens/login_screen';
import SignUpScreen from './screens/SignUpScreen';

const HomeStack = createStackNavigator({
  Home: {screen: PostScreen},
});

const ChatStack = createStackNavigator({
  Chat: {screen: ChatScreen},
});
const DebitStack = createStackNavigator({
  Debit: {screen: DebitScreen},
});
const PersonalMessageStack = createStackNavigator({
  PersonalMessage: {
    screen: PersonalMessage,
  },
});

const tabbar = createBottomTabNavigator(
  {
    Post: {screen: HomeStack},
    Grid: {screen: ChatStack},
    Debit: {screen: DebitStack},
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      activeBackgroundColor: '#34ecaa',
      allowFontScaling: true,
      inactiveTintColor: 'white',
      focused: true,
      keyboardHidesTabBar: true,
      style: {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#E64A19',
      },
      labelStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
);

const applicationLayer = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Tabs: tabbar,
    PersonalMessage: {
      screen: PersonalMessageStack,
    },

    SignUp: {screen: SignUpScreen},
  },
  {
    headerMode: 'none',
  },

  /* any other route you want to render above the tab bar */
);

const Home = createAppContainer(applicationLayer);

export default Home;
