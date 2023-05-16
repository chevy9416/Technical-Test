import React, { useContext, useState } from "react";
import { View, ViewStyle } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { UserContext } from "../utils/Context/Context";
import { ApiServices } from "../utils/API/Api";

const ModifyUserInfoScreen = () => {
  const { userId, key, setUserId } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [entity, setEntity] = useState("");

  console.log(userId);
  const infoModified = { password, name, lastName, entity };

  const handler = async () => {
    await ApiServices.modifyUser(key, userId, infoModified);
    setPassword("");
    setName("");
    setLastName("");
    setEntity("");
    setUserId();
  };

  return (
    <View style={style.container}>
      <Text style={style.title} variant="headlineMedium">
        Fill the properties that you want to change
      </Text>

      <TextInput
        style={style.input}
        label="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <TextInput
        style={style.input}
        label="Nombre"
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <TextInput
        style={style.input}
        label="Apellido"
        value={lastName}
        onChangeText={(lastName) => setLastName(lastName)}
      />
      <TextInput
        style={style.input}
        label="Entidad"
        value={entity}
        onChangeText={(entity) => setEntity(entity)}
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
    marginLeft: 10,
  } as ViewStyle,
  input: {
    marginVertical: 10,
    marginHorizontal: 15,
  } as ViewStyle,
  button: {
    margin: 15,
  } as ViewStyle,
};

export default ModifyUserInfoScreen;
