import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App(): React.JSX.Element {;
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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealCategories" component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
