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
import Club from './src/Club';
import Mdrt from './src/Mdrt';
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
  Club : {
    screen: Club,
  },
  Mdrt : {
    screen: Mdrt,
  },
},
{
  contentComponent: Sidebar,
}
);

export default createAppContainer(MyDrawerNavigator);