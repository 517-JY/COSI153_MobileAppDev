import * as React from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
} from "react-native";

const TrackerScreen = () => {
  const expenses = [
    { date: "2019-01-02", name: "table lamp", amount: "62.99" },
    { date: "2019-03-15", name: "lifting desk", amount: "120" },
    { date: "2020-09-26", name: "Costco", amount: "348.98" },
    { date: "2021-08-11", name: "Homepod Mini", amount: "99" },
    { date: "2021-10-01", name: "Monitor", amount: "143.99" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(expense) => expense.date}
        data={expenses}
        renderItem={({ item }) => {
          return (
            <Text style={styles.bodyStyle}>
              {item.date} : {item.name} - ${item.amount}
            </Text>
          );
        }}
      />
      <View style={styles.item}>
        <TextInput style={styles.input} placeholder="Date" />
        <TextInput style={styles.input} placeholder="Product Name" />
        <TextInput style={styles.input} placeholder="Price($)" />
      </View>
      <View style={styles.item}>
        <Button title="Add Expense" />
        <Button title="Sort" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  bodyStyle: {
    color: "#003F63",
    fontSize: 20,
    marginTop: 20,
    marginVertical: 30,
  },
  input: {
    color: "black",
    height: 40,
    width: 80,
    margin: 12,
    borderWidth: 1,
    padding: 3,
  },
  item: {
    flexDirection: "row",
  },
});

export default TrackerScreen;
