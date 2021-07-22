import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Flex() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
        flexWrap: "nowrap",
        flexShrink: 1,
      }}
    >
      {/*  Child Container 1 */}
      <View
        style={{
          flex: 0.2,
          backgroundColor: "red",
          alignItems: "center",
          width: "50%",
          justifyContent: "center",
        }}
      >
        <Text>Hello</Text>
      </View>

      {/*  Child Container 2 */}
      <View
        style={{
          flex: 0.2,
          width: "50%",
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            flex: 0.25,
            backgroundColor: "yellow",
            width: "30%",
          }}
        ></View>
        <View
          style={{
            flex: 0.25,
            backgroundColor: "green",
            width: "30%",
          }}
        ></View>
      </View>

      {/*  Child Container 3 */}
      <View
        style={{
          flex: 0.2,
          width: "50%",
          backgroundColor: "deeppink",
          flexDirection: "row",
          flexShrink: 1,
        }}
      >
        <View
          style={{
            flex: 0.15,
            width: "30%",
            backgroundColor: "red",
          }}
        ></View>
        <View
          style={{
            flex: 0.15,
            width: "30%",
            backgroundColor: "blue",
          }}
        ></View>
        <View
          style={{
            flex: 0.15,
            width: "30%",
            backgroundColor: "green",
          }}
        ></View>
        <View
          style={{
            flex: 0.15,
            width: "30%",
            backgroundColor: "yellow",
          }}
        ></View>
        <View
          style={{
            flex: 0.15,
            width: "30%",
            backgroundColor: "pink",
          }}
        ></View>

        <View
          style={{
            flex: 0.15,
            width: "30%",
            backgroundColor: "purple",
          }}
        ></View>
        <View
          style={{
            flex: 0.15,
            width: "30%",
            backgroundColor: "violet",
          }}
        ></View>
        <View
          style={{
            flex: 0.15,
            width: "30%",
            backgroundColor: "orange",
          }}
        ></View>
        <View
          style={{
            flex: 0.15,
            width: "30%",
            backgroundColor: "brown",
          }}
        ></View>
        <View
          style={{
            flex: 0.15,
            width: "30%",
            backgroundColor: "black",
          }}
        ></View>
        <View
          style={{
            flex: 0.15,
            width: "30%",
            backgroundColor: "white",
          }}
        ></View>
      </View>

      {/*  Child Container 4 */}
      <View
        style={{
          flex: 0.2,
          width: "50%",
          backgroundColor: "orange",
        }}
      ></View>
      {/*  Child Container 5 */}
      <View
        style={{
          flex: 0.2,
          width: "50%",
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 0.3,
            backgroundColor: "blue",
            width: "30%",
          }}
        ></View>
      </View>
      {/*  Child Container 6 */}
      <View
        style={{
          flex: 0.2,
          width: "50%",
          backgroundColor: "green",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({});
