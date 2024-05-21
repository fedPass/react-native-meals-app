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
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    // <SafeAreaView style={backgroundStyle}>
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* the order of screen depend of stask.screen order, the first is the deafult when app starts
      or it's possible to declare a Stack.navigation prop -> initialRouteName="CategoriesScreen"  */}
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
            component={CategoriesScreen}
            options={{
              title: 'All meat categories',
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
    </>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
