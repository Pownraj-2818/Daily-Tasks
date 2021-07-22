import React from "react";
import {
  Alert,
  Button,
  Image,
  Platform,
  StatusBar,
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
import MyText from "./components/MyText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <MyText name="Pownraj.S" phoneNumber="9876543211">
      <View style={styles.container1}>
        <MaterialCommunityIcons name="billboard" color="black" size={75} />
        <MaterialCommunityIcons name="car" color="black" size={75} />
        <MaterialCommunityIcons name="road" color="black" size={75} />
        <MaterialCommunityIcons name="bike-fast" color="black" size={75} />
      </View>
    </MyText>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "red",
    height: "50%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginTop:
      Platform.OS === "android"
        ? StatusBar.currentHeight
        : StatusBar.currentHeight + 10,
  },
});
