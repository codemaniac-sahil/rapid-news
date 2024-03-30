import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
// import { Feather } from '@expo/vector-icons';
function Navbar({ title }) {
  return (
    <View style={styles.navbarContainer}>
      <View style={{ marginLeft: 14 }}>
        <Feather name="menu" size={24} color="black" />
      </View>
      <View>
        <Text style={styles.navbarContainerText}>{title}</Text>
      </View>
      <View style={{ marginRight: 14 }}>
        <Feather name="search" size={24} color="black" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  navbarContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",

    backgroundColor: "#f63e35",
    height: 50,
    borderRadius: 30,

    alignItems: "center",
  },
  navbarContainerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fcf2f2",
  },
});

export default Navbar;
