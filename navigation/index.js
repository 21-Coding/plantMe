import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Browse from '../screens/Browse';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import Product from '../screens/Product';
import Settings from '../screens/Settings';

import { theme } from '../constants';

const screens = createStackNavigator({
    Welcome,
        Browse,
        Explore,
        Login,
        Product,
        Settings,

}, {
    defaultNavigationOptions: {
        
    }
});
