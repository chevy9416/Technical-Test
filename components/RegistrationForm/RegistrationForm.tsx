import React, { useContext, useState } from "react";
import { Alert, View, ViewStyle } from "react-native";
import { User } from "../../utils/Types/Types";
import { Button, TextInput, Text } from "react-native-paper";
import { ApiServices } from "../../utils/API/Api";
import ModalComponent from "../Modal/Modal";
import { UserContext } from "../../utils/Context/Context";

const RegistrationForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    firstName: "",
    lastName: "",
    image: "",
    identificationNumber: "",
    healthEntity: "",
  });
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const { setShowModal } = useContext(UserContext);

  const handleInputChange = (key: keyof User, value: string) => {
    setUser((prevUser) => ({ ...prevUser, [key]: value }));
  };

  const handleCreateUser = () => {
    // Handle user creation logic here
    if (user.password === user.passwordConfirmation) {
      ApiServices.createUser(user);
      setShowModal(true);
      setUser({
        username: "",
        password: "",
        passwordConfirmation: "",
        email: "",
        firstName: "",
        lastName: "",
        image: "",
        identificationNumber: "",
        healthEntity: "",
      });
    } else {
      Alert.alert("Error creating user", "The passwords are different");
    }
  };

  return (
    <View>
      <Text style={formStyle.title} variant="titleSmall">
        Please fill this form to create your user
      </Text>

      <TextInput
        style={formStyle.input}
        label="Username"
        value={user.username}
        onChangeText={(text) => handleInputChange("username", text)}
      />
      <TextInput
        style={formStyle.input}
        label="Password"
        value={user.password}
        onChangeText={(text) => handleInputChange("password", text)}
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
      <TextInput
        style={formStyle.input}
        label="Password Confirmation"
        value={user.passwordConfirmation}
        onChangeText={(text) => handleInputChange("passwordConfirmation", text)}
        secureTextEntry
      />
      <TextInput
        style={formStyle.input}
        label="Email"
        value={user.email}
        onChangeText={(text) => handleInputChange("email", text)}
      />
      <TextInput
        style={formStyle.input}
        label="First Name"
        value={user.firstName}
        onChangeText={(text) => handleInputChange("firstName", text)}
      />
      <TextInput
        style={formStyle.input}
        label="Last Name"
        value={user.lastName}
        onChangeText={(text) => handleInputChange("lastName", text)}
      />
      <TextInput
        style={formStyle.input}
        label="Identification Number"
        value={user.identificationNumber}
        onChangeText={(text) => handleInputChange("identificationNumber", text)}
        keyboardType="numeric"
        maxLength={10}
      />
      <TextInput
        style={formStyle.input}
        label="Health Entity"
        value={user.healthEntity}
        onChangeText={(text) => handleInputChange("healthEntity", text)}
      />
      <Button
        style={formStyle.button}
        mode="contained"
        onPress={handleCreateUser}
        children={"Create User"}
      />

      <ModalComponent />
    </View>
  );
};

const formStyle = {
  title: {
    marginTop: 20,
    marginLeft: 10,
  } as ViewStyle,
  input: {
    marginVertical: 5,
    marginHorizontal: 15,
  } as ViewStyle,
  button: {
    margin: 15,
  } as ViewStyle,
};

export default RegistrationForm;
