import React, { useContext, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import UserList from "../components/UserList/UserList";
import { UserContext } from "../utils/Context/Context";
import { ApiServices } from "../utils/API/Api";
import { Text } from "react-native-paper";

const UserListScreen = () => {
  const { key, setUsers } = useContext(UserContext);

  useEffect(() => {
    ApiServices.getUsersList(key).then((data) => setUsers(data));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} variant="titleMedium">
        List of users
      </Text>
      <ScrollView style={styles.scrollView}>
        <UserList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  scrollView: {
    marginHorizontal: 20,
    height: "90%",
  },
  title: {
    marginVertical: 10,
    marginLeft: 15,
  },
});

export default UserListScreen;
