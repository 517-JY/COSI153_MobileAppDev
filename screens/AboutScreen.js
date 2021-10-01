import * as React from "react";

import { StyleSheet, Text, View, Image } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/dollar.jpg")} />
      <Text style={styles.headerStyle}>
        This is an app for tracking your daily expense
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerStyle: {
    color: "#768591",
    fontSize: 18,
    marginTop: 50,
    marginVertical: 30,
  },
  logo: {
    height: 200,
    maxWidth: "60%",
    marginTop: 120,
  },
});

export default AboutScreen;
