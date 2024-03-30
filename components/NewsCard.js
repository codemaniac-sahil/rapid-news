import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

function NewsCard({ author, image, source, desc, title, url }) {
  return (
    <View style={styles.newsContainer}>
      <View style={{ height: 340, width: "100%" }}>
        {image === null ? (
          <Ionicons name="image-outline" size={330} color="black" />
        ) : (
          <Image
            source={{ uri: image }}
            style={{ height: "100%", width: "100%", borderRadius: 5 }}
          />
        )}
      </View>
      <View>
        <Text style={styles.newsContainerHeaderHeading}>{title}</Text>
      </View>
      <View style={styles.newsContainerCredits}>
        <View style={styles.newsContainerCreditsInfo}>
          <Text style={styles.newsContainerCreditsInfoBoldText}>Author: </Text>
          <Text style={{ fontSize: 13 }}>{author}</Text>
        </View>
        <View>
          <View style={styles.newsContainerCreditsInfo}>
            <Text style={styles.newsContainerCreditsInfoBoldText}>
              Source:{" "}
            </Text>
            <Text style={{ fontSize: 13 }}>{source}</Text>
          </View>
        </View>
      </View>
      <View style={styles.newsContainerGap}>
        <Text>{desc}</Text>
      </View>
      <View>
        <Link href={url} style={styles.urlButton}>
          Read Article
        </Link>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  newsContainer: {
    // marginTop: 23,
    height: "auto",
    backgroundColor: "#fcf2f2",
    margin: 24,
    borderRadius: 10,

    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",

    padding: 5,
  },
  newsContainerHeaderHeading: {
    // fontSize: 16,
    fontWeight: "bold",
    // fontFamily: "corbel",
  },
  newsContainerCredits: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  newsContainerCreditsInfo: {
    // flex: 2,
    flexDirection: "row",
  },
  newsContainerCreditsInfoBoldText: {
    fontWeight: "bold",
    fontSize: 13,
  },
  newsContainerGap: {
    flex: 1,
    marginTop: 5,
  },
  urlButton: {
    backgroundColor: "#fb6784",
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
    // color: "#f9f9f9",
    fontWeight: "bold",
  },
});

export default NewsCard;
