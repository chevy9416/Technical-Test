import React, { useContext, useState } from "react";
import { View, ViewStyle } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { UserContext } from "../../utils/Context/Context";
import { useNavigation } from "@react-navigation/native";
import { ApiServices } from "../../utils/API/Api";

const ModifyUserById = () => {
  const { setUserId } = useContext(UserContext);
  const [id, setId] = useState("");

  const navigation = useNavigation();

  const handler = () => {
    setUserId(id);
    navigation.navigate("Modify User Info");
    setId("");
  };
  return (
    <View style={style.container}>
      <Text style={style.title} variant="headlineMedium">
        Enter the ID of the user to modify
      </Text>
      <TextInput
        style={style.input}
        label="User ID"
        value={id}
        onChangeText={(id) => setId(id)}
      />

      <Button
        style={style.button}
        mode="contained"
        onPress={handler}
        children={"Modify User"}
      />
    </View>
  );
};

const style = {
  container: {
    marginTop: 30,
  } as ViewStyle,
  title: {
    marginLeft: 20,
  } as ViewStyle,
  input: {
    marginVertical: 10,
    marginHorizontal: 15,
  } as ViewStyle,
  button: {
    margin: 15,
  } as ViewStyle,
};

export default ModifyUserById;
