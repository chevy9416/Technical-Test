import React, { useContext, useState } from "react";
import { View, ViewStyle } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { UserContext } from "../utils/Context/Context";
import DetailSearchUser from "../components/DetailSearchUser/DetailSearchUser";

const SearchDetailUserScreen = () => {
  const { users } = useContext(UserContext);

  return (
    <View>
      <DetailSearchUser />
    </View>
  );
};

export default SearchDetailUserScreen;
