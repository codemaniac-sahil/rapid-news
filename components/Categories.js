import { Link } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  {
    id: "1",
    name: "India",
    link: "/",
  },
  {
    id: "2",
    name: "Politics",
    link: "/politics",
  },
  {
    id: "3",
    name: "Business",
    link: "/business",
  },
  {
    id: "4",
    name: "Entertainment",
    link: "/entertainment",
  },
  {
    id: "5",
    name: "Sports",
    link: "/sports",
  },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(categories)}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View>
            <Link
              href={item.link}
              style={[
                styles.categoryText,
                selectedCategory?.id === item.id && {
                  backgroundColor: "#f9f9f9",
                },
              ]}
            >
              {item.name}
            </Link>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    backgroundColor: "#fbad28",
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: 20,
    marginHorizontal: 12,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
});

export default Categories;
