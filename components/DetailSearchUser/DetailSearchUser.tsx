import React, { useContext, useState } from "react";
import { View, ViewStyle } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { UserContext } from "../../utils/Context/Context";
import { useNavigation } from "@react-navigation/native";
import { ApiServices } from "../../utils/API/Api";

const DetailSearchUser = () => {
  const { key, setUserById } = useContext(UserContext);
  const [idUser, setIdUser] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    await ApiServices.searchUserById(key, Number(idUser)).then((data) =>
      setUserById(data)
    );
    navigation.navigate("User Detail Info");
    setIdUser("");
  };
  return (
    <View style={formStyle.container}>
      <TextInput
        style={formStyle.input}
        label="User ID"
        value={idUser}
        onChangeText={(idUser) => setIdUser(idUser)}
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

export default DetailSearchUser;
