import React from "react";
import LogInForm from "../components/LogInForm/LogInForm";
import { ScrollView, StyleSheet } from "react-native";
const LogInScreen: React.FC = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <LogInForm />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
  },
});

export default LogInScreen;
