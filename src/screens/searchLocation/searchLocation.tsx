import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
/**
 * The Details screen
 */
 const SearchLocation: FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Location</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default SearchLocation