import * as React from 'react';
import { BottomTabParamList } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native'
import { Icon } from 'react-native-elements'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { HomeScreen } from '../screens/HomeScreen'
import { SearchScreen } from '../screens/SearchScreen'
import { NewRecipeScreen } from '../screens/NewRecipeScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { SavedScreen } from '../screens/SavedScreen'
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import SearchStack from './SearchStack';
import SaveStack from './SaveStack';

import  EditProfileSidebar  from './ConfigStack'

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function RootBottomTabNavigator() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ 
        activeTintColor: "#97C7BB", 
        inactiveTintColor: "#FFAF58",
        showLabel: false, 
        style: { height: 50 } 
      }}
      screenOptions={({route}:{route: any}) => ({
          tabBarIcon: ({color}:{color: any}) => screenOptions(route, color)
      })}
      >
          
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchStack}
      />
      <BottomTab.Screen
        name="NewRecipe"
        component={NewRecipeScreen}
      />
      <BottomTab.Screen
        name="Saved"
        component={SaveStack}
      />
      <BottomTab.Screen
        name="Profile"
        component={EditProfileSidebar}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={40} style={{ marginBottom: -3 }} {...props} />;
}

function screenOptions(route: any,color: any){
  var iconName ="";
  switch (route.name) {
      case "Home":
        iconName = 'home-outline';
        break;
      case "Search":
        iconName = 'search-outline';
        break;
      case "NewRecipe":
        iconName = 'add-circle-outline';
        break;
      case "Saved":
        iconName = 'book-outline';
        break;
      case "Profile":
        iconName = 'person-outline';
        break;
      default:
        break;
  }
  return(
    <Icon type={'ionicon'} name={iconName} color={color}/>
  )
}