import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"; // Importa TouchableOpacity
import Link from "./link";

const Cards = ({ Data, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Data.title}</Text>
      <Image style={styles.image} source={{ uri: Data.url }} />
      <Text style={styles.date}>{Data.date}</Text>
      <TouchableOpacity onPress={onPress} style={styles.detailsButton}>
        <Text style={styles.detailsText}>Detalles</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10,
    borderColor: "#fc3d21",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#1a1a1a",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  date: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
  detailsButton: {
    marginTop: 10,
    backgroundColor: "#1A2C7D",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  detailsText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Cards;
