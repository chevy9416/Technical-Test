import React from "react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { ScrollView, StyleSheet } from "react-native";
const RegistrationScreen: React.FC = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <RegistrationForm />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
  },
});

export default RegistrationScreen;
