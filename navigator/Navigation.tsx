import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { UserContext } from "../utils/Context/Context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens import
import RegistrationScreen from "../screens/RegistrationScreen";
import LogInScreen from "../screens/LogInScreen";
import UserListScreen from "../screens/UsersListScreen";
import SearchDetailUserScreen from "../screens/SearchDetailUserScreen";
import CardUserScreen from "../screens/CardUserScreen";
import ModifyUserScreen from "../screens/ModifyUserScreen";
import ModifyUserInfoScreen from "../screens/ModifyUserInfoScreen";

const TabNavigator = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();

function MyStackUserDetail() {
  return (
    <StackNavigator.Navigator initialRouteName="HomeStackUserDetail">
      <StackNavigator.Screen
        name="User Detail Search"
        component={SearchDetailUserScreen}
      />
      <StackNavigator.Screen
        name="User Detail Info"
        component={CardUserScreen}
      />
    </StackNavigator.Navigator>
  );
}
function MyStackModifyUser() {
  return (
    <StackNavigator.Navigator initialRouteName="HomeStackModifyUser">
      <StackNavigator.Screen name="Modify User" component={ModifyUserScreen} />
      <StackNavigator.Screen
        name="Modify User Info"
        component={ModifyUserInfoScreen}
      />
    </StackNavigator.Navigator>
  );
}

export default function Navigation() {
  const { key } = useContext(UserContext);

  return (
    <NavigationContainer>
      <TabNavigator.Navigator>
        {!key ? (
          <>
            <TabNavigator.Screen name="Log In Screen" component={LogInScreen} />
            <TabNavigator.Screen
              name="Registration Screen"
              component={RegistrationScreen}
            />
          </>
        ) : (
          <>
            <TabNavigator.Screen name="User List" component={UserListScreen} />
            <TabNavigator.Screen
              name="HomeStackUserDetail"
              component={MyStackUserDetail}
              options={{
                tabBarLabel: "User Detail Search",
                headerShown: false,
              }}
            />
            <TabNavigator.Screen
              name="HomeStackModifyUser"
              component={MyStackModifyUser}
              options={{
                tabBarLabel: "Modify User",
                // tabBarIcon: ()=> {
                //   <MaterialCommunityIcons name
                // }
                headerShown: false,
              }}
            />
          </>
        )}
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}
