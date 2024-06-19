import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import translate from "translate";

const Detalles = ({ navigation }) => {
  const {
    params: { url, title, desc, date },
  } = useRoute();

  const [translatedDesc, setTranslatedDesc] = useState("");
  const [toSpanish, setToSpanish] = useState(false);

  useEffect(() => {
    const translateDescription = async () => {
      try {
        let translation;
        if (toSpanish) {
          translation = await translate(desc, { from: "en", to: "es" });
        } else {
          translation = await translate(desc, { from: "es", to: "en" });
        }
        setTranslatedDesc(translation);
      } catch (error) {
        console.error("Error translating description:", error);
      }
    };

    translateDescription();
  }, [desc, toSpanish]);

  const handleTranslateToggle = () => {
    setToSpanish((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{translatedDesc}</Text>
        </View>
      </ScrollView>
      <Button
        title={toSpanish ? "Traducir a Inglés" : "Traducir a Español"}
        onPress={handleTranslateToggle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  date: {
    textAlign: "center",
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
  },
  scrollView: {
    flex: 1,
    marginTop: 10,
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
  },
});

export default Detalles;
