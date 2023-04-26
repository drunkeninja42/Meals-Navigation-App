
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealItemScreen from './screens/MealItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{headerStyle: {backgroundColor : '#ff7431'}}}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}
          options={{title : "Meals Categories"}} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
          // options={
          //   ({route , navigation}) => {
          //     const catId = route.params.categoryId;
          //     return {title : catId}
          //   }
          // }
          />
          <Stack.Screen name= "MealItem" component={MealItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});