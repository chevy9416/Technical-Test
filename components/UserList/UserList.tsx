import React, { useContext } from "react";
import { Linking, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { UserContext } from "../../utils/Context/Context";

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <>
      {users.map((user) => (
        <List.Accordion
          key={user.id}
          title={`${user.nombre} ${user.apellido}`}
          left={(props) => <List.Icon {...props} icon="account" />}
        >
          <List.Item title={`Cedula: ${user.cedula}`} />
          <List.Item style={styles.item} title={`Email: ${user.email}`} />
          <List.Item
            style={styles.item}
            titleStyle={styles.url}
            title={`url: ${user.url}`}
            titleNumberOfLines={3}
            onPress={() => Linking.openURL(`${user.url}`)}
          />
        </List.Accordion>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "100%",
  },
  url: {
    textDecorationLine: "underline",
    textDecorationColor: "#0645AD",
    color: "#0645AD",
  },
});

export default UserList;
