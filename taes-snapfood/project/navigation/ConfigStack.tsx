import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProfileScreen } from "../screens/ProfileScreen/";
import { EditProfileScreen } from "../screens/EditProfileScreen";
import { DrawerContent } from "./DrawerContent";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function EditProfileSidebar() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      drawerPosition="right"
      drawerType="front"
      hideStatusBar={false}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default EditProfileSidebar;
