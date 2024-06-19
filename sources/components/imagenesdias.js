import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import TextWhite from "./textWhite";

const ImagenesDiasView = ({ title, date, url, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TextWhite texto={title} />
        <TextWhite texto={date} />
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.linkText}>Detalles</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    padding: 10,
    borderColor: "#fc3d21",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#1a1a1a",
  },
  leftContainer: {
    flex: 0.7,
    alignItems: "flex-start",
  },
  rightContainer: {
    flex: 0.3,
    alignItems: "flex-end",
  },
  image: {
    width: 100,
    height: 90,
    borderRadius: 25,
  },
  linkText: {
    color: "#1e90ff",
    textDecorationLine: "underline",
  },
});

export default ImagenesDiasView;
