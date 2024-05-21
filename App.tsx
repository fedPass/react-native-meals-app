import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Button
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#fff',
      tabBarActiveBackgroundColor: '#06595C',
      tabBarStyle: {
        borderTopWidth: 0
      }
    }}
    sceneContainerStyle= {{
      backgroundColor: "#3B8C8F"
    }}>
      <Tab.Screen name='Categories' component={CategoriesScreen} options={{
        tabBarIcon: ({color, size}) => <Icon name="list" color={color} size={size} />
      }}></Tab.Screen>
      <Tab.Screen name='Favourites' component={FavouritesScreen} options={{
        tabBarIcon: ({color, size}) => <Icon name="star" color={color} size={size} />
      }}></Tab.Screen>
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* the order of screen depend of stask.screen order, the first is the deafult when app starts
      or it's possible to declare a Stack.navigation prop -> initialRouteName="CategoriesScreen"  */}
      <Provider store={store}>
        <NavigationContainer>
          {/* in stack.navigation set options we want share with all screen */}
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#06595C',
              },
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: '#3B8C8F',
              },
            }}>
            <Stack.Screen
              name="MealCategories"
              component={TabNavigator}
              options={{
                headerShown: false,
                // title: 'All meat categories',
              }}
            />
            <Stack.Screen 
              name="MealOverview" 
              component={MealsOverviewScreen} 
              // this is a way to set options dinamically (through arrow func)
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen} 
              // this is a way to set button on header nav
              // options={{
              //   headerRight: () => (
              //     <Button
              //       onPress={() => alert('This is a button!')}
              //       title="&#9829;"
              //       color="transparent"
              //     />
              //   )
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
