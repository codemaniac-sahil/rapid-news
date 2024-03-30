import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import * as Location from "expo-location";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";

export default function App() {
  const [newsData, setNewsData] = useState([]);
  const [countryCodeJSON, setCountryCodeJSON] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync({});
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
        );
        const data = await response.json();
        // console.log(data.address.country_code);
        setCountryCodeJSON(data.address.country_code);
      } catch (error) {
        console.error("Error fetching country code:", error);
      }
    })();
  }, []);

  const fetchNews = async (countryCode) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=7ccf3b8406a94d028b1cd059f0c6d015`
      );
      const data = await response.json();
      setNewsData(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
  useEffect(() => {
    if (countryCodeJSON) {
      fetchNews(countryCodeJSON);
    }
  }, [countryCodeJSON]);

  return (
    <View style={styles.container}>
      <Navbar title={"Top Headlines"} />
      <Categories />
      {newsData.length > 0 && (
        <FlatList
          style={{ marginTop: 24 }}
          data={newsData}
          renderItem={({ item }) => (
            <NewsCard
              author={item.author}
              image={item.urlToImage}
              title={item.title}
              desc={item.description}
              source={item.source.name}
              url={item.url}
            />
          )}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f63e35",
  },
});
