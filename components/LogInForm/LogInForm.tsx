import React, { useContext, useState } from "react";
import { Alert, View, ViewStyle } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { UserContext } from "../../utils/Context/Context";
import { ApiServices } from "../../utils/API/Api";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const { setKey } = useContext(UserContext);

  const handleLogin = async () => {
    const res = await ApiServices.logInUser(userName, email, password);
    setKey(res.key);
  };

  return (
    <View style={formStyle.container}>
      <TextInput
        style={formStyle.input}
        label="Username"
        value={userName}
        onChangeText={(userName) => setUserName(userName)}
      />
      <TextInput
        style={formStyle.input}
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={formStyle.input}
        label="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        right={
          <TextInput.Icon
            icon="eye"
            onPress={() =>
              isPasswordSecure
                ? setIsPasswordSecure(false)
                : setIsPasswordSecure(true)
            }
          />
        }
        secureTextEntry={isPasswordSecure}
      />
      <Button
        style={formStyle.button}
        mode="contained"
        onPress={handleLogin}
        children={"Log In"}
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

export default LogInForm;
