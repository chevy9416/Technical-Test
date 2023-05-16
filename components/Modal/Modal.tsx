import React, { useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { UserContext } from "../../utils/Context/Context";
import { useNavigation } from "@react-navigation/native";

const ModalComponent = () => {
  const { showModal, setShowModal } = useContext(UserContext);

  const navigation = useNavigation();

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Usuario creado con exito!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setShowModal(false);
                navigation.navigate("Log In Screen");
              }}
            >
              <Text style={styles.textStyle}>Ir a Log In</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalComponent;
