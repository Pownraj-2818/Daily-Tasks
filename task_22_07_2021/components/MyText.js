import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";

export default function MyText(props) {
  const { name, phoneNumber } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is {name} and my phone number is {phoneNumber}{" "}
      </Text>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
