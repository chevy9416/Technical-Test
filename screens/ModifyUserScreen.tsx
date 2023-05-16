import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import UserList from "../components/UserList/UserList";
import { UserContext } from "../utils/Context/Context";
import { ApiServices } from "../utils/API/Api";
import { Searchbar, SegmentedButtons } from "react-native-paper";
import ModifyUserById from "../components/ModifyUserById/ModifyUserById";

const ModifyUserScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ModifyUserById />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
});

export default ModifyUserScreen;
