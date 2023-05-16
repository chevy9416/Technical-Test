import React, { useContext, useState } from "react";
import { Linking, StyleSheet, View, ViewStyle } from "react-native";
import { Button, List, TextInput } from "react-native-paper";
import { UserContext } from "../../utils/Context/Context";

const UserCard = () => {
  const { users } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const handleLogin = async () => {
    console.log("asdasd");
  };

  return (
    <View style={formStyle.container}>
      <TextInput
        style={formStyle.input}
        label="User ID"
        value={userName}
        onChangeText={(userName) => setUserName(userName)}
      />

      <Button
        style={formStyle.button}
        mode="contained"
        onPress={handleLogin}
        children={"Search User"}
      />
    </View>
  );
};

const formStyle = {
  container: {
    marginTop: 30,
  } as ViewStyle,
  input: {
    marginVertical: 10,
    marginHorizontal: 15,
  } as ViewStyle,
  button: {
    margin: 15,
  } as ViewStyle,
};
export default UserCard;
