import React, { useContext } from "react";
import { View, ViewStyle } from "react-native";
import { UserContext } from "../utils/Context/Context";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="account-check" />;

const CardUserScreen = () => {
  const { userById } = useContext(UserContext);

  console.log(userById);

  return (
    <View style={style.container}>
      <Card>
        <Card.Title
          title={`${userById.nombre} ${userById.apellido}`}
          subtitle={`Cedula: ${userById.cedula}`}
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">{`ID: ${userById.id}`}</Text>
          <Text variant="titleLarge">{`Email: ${userById.email}`}</Text>
          <Text variant="titleLarge">{`Entidad: ${userById.entidad}`}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const style = {
  container: {
    marginTop: 200,
    marginHorizontal: 15,
  } as ViewStyle,
};
export default CardUserScreen;
