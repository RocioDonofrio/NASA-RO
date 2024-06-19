import React, { useEffect, useState } from "react";
import Layout from "./layout";
import Header from "../components/header";
import Cards from "../components/imageDay";
import { format, sub } from "date-fns";
import { FlatList, View, Button, StyleSheet } from "react-native";
import ImagenesDiasView from "../components/imagenesdias";
import TextWhite from "../components/textWhite";
import api from "../utility/api";
import translate from "translate";

const Home = ({ navigation }) => {
  const [imgDay, setImgDay] = useState({});
  const [img7Day, setImg7Day] = useState([]);
  const [toSpanish, setToSpanish] = useState(false);

  useEffect(() => {
    const getImgDay = async () => {
      try {
        const img = await api("");
        setImgDay(img);
        console.log("objeto json", img);
      } catch (error) {
        console.error("error desde home", error);
      }
    };

    const getImg7Day = async () => {
      const fechaDeHoy = new Date();
      const fechaConFormato = format(fechaDeHoy, "yyyy-MM-dd");
      const fecha7dias = format(sub(fechaDeHoy, { days: 6 }), "yyyy-MM-dd");

      try {
        const response = await api(
          `&start_date=${fecha7dias}&end_date=${fechaConFormato}`
        );
        setImg7Day(response);
      } catch (error) {
        console.error("error al obtener imágenes de los últimos 7 días", error);
      }
    };

    getImgDay();
    getImg7Day();
  }, []);

  useEffect(() => {
    if (toSpanish) {
      const translateImages = async () => {
        try {
          const translations = await Promise.all(
            img7Day.map(async (item) => {
              const translatedTitle = await translate(item.title, {
                from: "en",
                to: "es",
              });
              return { ...item, translatedTitle };
            })
          );
          setImg7Day(translations);
        } catch (error) {
          console.error("Error", error);
        }
      };

      translateImages();
    } else {
      const translateImagesBack = async () => {
        try {
          const translations = await Promise.all(
            img7Day.map(async (item) => {
              const translatedTitle = await translate(item.title, {
                from: "es",
                to: "en",
              });
              return { ...item, translatedTitle };
            })
          );
          setImg7Day(translations);
        } catch (error) {
          console.error("Error", error);
        }
      };

      translateImagesBack();
    }
  }, [toSpanish]);

  const handleDetalles = (objetoimagen) => {
    navigation.navigate("Detalles", {
      title: objetoimagen.title,
      url: objetoimagen.url,
      desc: objetoimagen.explanation,
      date: objetoimagen.date,
    });
  };

  const handleTranslateToggle = () => {
    setToSpanish((prev) => !prev);
  };

  return (
    <Layout>
      <Header texto={toSpanish ? "Casa" : "Home"} />

      <Cards Data={imgDay} onPress={() => handleDetalles(imgDay)} />
      <TextWhite
        texto={
          toSpanish
            ? "Imágenes de los últimos 7 días"
            : "Images from the last 7 days"
        }
      />
      <FlatList
        style={{ marginVertical: 5 }}
        data={img7Day}
        renderItem={({ item }) => (
          <ImagenesDiasView
            title={item.translatedTitle || item.title}
            date={item.date}
            url={item.url}
            onPress={() => handleDetalles(item)}
          />
        )}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={toSpanish ? "Traducir" : "Traducir"}
          onPress={handleTranslateToggle}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
    marginBottom: 10,
    alignItems: "center",
  },
});

export default Home;
