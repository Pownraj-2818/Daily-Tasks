import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Alert,
  Button,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import Flex from "./Exercises/Flex";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Flex /> */}
      <View style={styles.box}>
        <Text style={styles.text}>Hello I am Pownraj</Text>
      </View>
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
  box: {
    flex: 0.2,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    borderColor: "yellow",
    borderWidth: 8,
    borderRadius: 70,
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: "Avanir",
    fontStyle: "italic",
    textDecorationLine: "underline",
    textDecorationStyle: "dashed",
    textDecorationColor: "blue",
  },
});
