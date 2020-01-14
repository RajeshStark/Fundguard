import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import "react-native-gesture-handler";
import Home from './src/Home';
import Financial from './src/Financial';
import Services from './src/Services';
import QuoteScreen from './src/Quote';
import OtherScreen from './src/Others';
import Popular from './src/Popular';
import Refer from './src/Refer';
import Contact from './src/Contact';
import Faq from './src/Faq';
import Premium from './src/Premium';

import LogIn from './src/Contacts/Login';
import EditProfile from './src/Contacts/EditProfile';
import IndexC from './src/Contacts/IndexC';
import AddProspect from './src/Contacts/AddProspect';
import AddCustomer from './src/Contacts/AddCustemor';
import Report from './src/Contacts/Greetings/TabG/Report';
import Frequent from './src/Contacts/Greetings/TabG/Frequent';

import Sidebar from './src/Sidebar';

const MyDrawerNavigator = createDrawerNavigator({
  Home : {
    screen: Home,
  },
  Services : {
    screen: Services,
  },
  PopularPlans : {
    screen: Popular,
  },
  FinancialPlans: {
    screen: Financial,
  },
  Quote : {
    screen: QuoteScreen,
  },
  Refer : {
    screen: Refer,
  },
  Contact: {
    screen: Contact,
  },
  Other: {
    screen: OtherScreen,
  }, 
  Faq : {
    screen: Faq,
  },
  Premium : {
    screen: Premium,
  },
  LogIn : {
    screen: LogIn,
  },

  EditProfile : {
    screen: EditProfile,
  },
 AddProspect : {
    screen: AddProspect,
  },
 AddCustomer : {
    screen: AddCustomer,
  },
  Report : {
    screen: Report,
  },
  Frequent : {
    screen: Frequent,
  },
  IndexC : {
    screen : IndexC
  }

},
{
  contentComponent: Sidebar,
}
);

export default createAppContainer(MyDrawerNavigator);

