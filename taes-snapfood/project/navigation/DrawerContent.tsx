import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { COLORS } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { IAuthState } from "../store/reducers/authReducer";
import { SignOut } from "../store/actions/authActions";

export function DrawerContent(props) {
  const navigation = useNavigation();
  const userProfileState = useSelector((state) => state.firebase.profile);
  const dispatch = useDispatch();

  const pressSignOut = () => {
    dispatch(SignOut(() => navigation.navigate("Auth")));
  };

  return (
    <View style={{ flex: 1, borderLeftColor: "black", borderLeftWidth: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.firstSection}>
            <View>
              <Text style={styles.email}> {userProfileState.Email} </Text>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={() => (
              <Icon
                type={"ionicon"}
                name={"create-outline"}
                size={30}
                color={COLORS.dark_gray}
                style={{ paddingLeft: "30%" }}
              />
            )}
            label="Editar Perfil"
            labelStyle={{ color: "black", fontSize: 15, marginLeft: -35 }}
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => (
            <Icon
              type={"ionicon"}
              name={"exit-outline"}
              size={30}
              color={COLORS.dark_gray}
              style={{ paddingLeft: "30%" }}
            />
          )}
          label="Cerrar Sesión"
          labelStyle={{ color: "black", fontSize: 15, marginLeft: -35 }}
          onPress={pressSignOut}
        />
        <DrawerItem
          label="Eliminar cuenta"
          labelStyle={{ color: "red", paddingLeft: "35%", fontSize: 15 }}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    shadowColor: "transparent",
  },
  bottomDrawerSection: {
    marginBottom: 10,
  },
  firstSection: {},
  drawerSection: {
    marginTop: 15,
  },
  email: {
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
