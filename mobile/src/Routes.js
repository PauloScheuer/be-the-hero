import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import React from 'react';

const AppStack = createStackNavigator();

import Incidents from './Pages/Incidents';
import Detail from './Pages/Detail';

export default function Routes(){
        return(
                <NavigationContainer>
                
                <AppStack.Navigator screenOptions={{ headerShown: false}}>
                
                <AppStack.Screen name="incidents" component={Incidents} />
                <AppStack.Screen name="details" component={Detail} />
                </AppStack.Navigator>
                
                </NavigationContainer>
                );
}