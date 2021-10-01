import * as React from "react";

import { StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="About us" onPress={() => navigation.navigate("About")} />
      </View>
      <View style={styles.button}>
        <Button
          title="Tracker"
          onPress={() => navigation.navigate("Tracker")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#99BFB3",
    // '#F0F0EB'

    //  #dafaf7
    paddingVertical: 20,
    paddingHorizontal: 45,
    borderRadius: 30,
    marginVertical: 50,
    marginTop: 120,
    marginBottom: 120,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default HomeScreen;
