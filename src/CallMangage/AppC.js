import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import IndexG from './Greetings/IndexG';
import AddProspect from './AddProspect';
// import AddCustemor from './AddCustemor'; 
import IndexC from './IndexC';
import EditProfile from './EditProfile';



const MainNavigator = createStackNavigator({
    IndexC: {
        screen:IndexC,
        navigationOptions: {
            header: null //this will hide the header 
        }
    },
     EditProfile : {
         screen: EditProfile,
         navigationOptions: {
            header: null //this will hide the header
        }
       },
     AddProspect : {
      screen: AddProspect,
      navigationOptions: {
         header: null //this will hide the header
     }
    },

});

const App = createAppContainer(MainNavigator);

export default App;