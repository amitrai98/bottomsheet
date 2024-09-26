// StarRating.js
import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Or import from 'react-native-vector-icons/FontAwesome' for bare RN projects.

const StarRating = ({ maxStars = 5, initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRating = (value) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <View style={styles.starContainer}>
      {Array.from({ length: maxStars }, (_, index) => (
        <TouchableOpacity key={index} onPress={() => handleRating(index + 1)}>
          <FontAwesome
            name={index < rating ? "star" : "star-o"}
            size={32}
            color={index < rating ? "#FFD700" : "#ccc"}
            style={styles.star}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  star: {
    marginHorizontal: 5,
  },
});

export default StarRating;
